import { useState } from "react"
import { register } from "../services/Register"
import { login } from "../services/Login"

export default function RegisterInfo() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError();
        
        setValidated(true);
        
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            return;
        }

        try {
            setLoading(true);
            await register(username, password, passwordVerify);
            await login(username, password);
            window.location.reload();
        } catch (error) {
            setError(error.message || "Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="col-md-6 col-lg-4 my-2">
            <form id="registerForm" className={validated ? "was-validated" : "needs-validation"} onSubmit={handleRegister} noValidate>
                <h1 className="h3 font-weight-normal text-center">Or, register below.</h1>
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <div class="input-group has-validation">
                    <input name="username" type="text" className="form-control my-2" id="register-username" placeholder="Enter Username" autoComplete="off"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        minLength="3"
                        maxLength="32"
                        pattern="[a-zA-Z0-9\-']+" />
                    <div class="invalid-feedback">Username must be 3-32 characters and contain only letters, numbers, hyphens, and apostrophes.</div>
                </div>
                <div class="input-group has-validation">
                    <input name="password" type="password" className="form-control my-2" id="register-password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="new-password"
                        required
                        minLength="8"
                        maxLength="32"
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,32}$" />
                    <div class="invalid-feedback">Password must be 8-32 characters and contain at least one lowercase letter, one uppercase letter, and one digit.</div>
                </div>
                <div class="input-group has-validation">
                    <input name="passwordVerify" type="password" className="form-control my-2" id="register-password-verify" placeholder="Verify Password"
                        value={passwordVerify}
                        onChange={(e) => setPasswordVerify(e.target.value)}
                        required
                        minLength="8"
                        maxLength="32"
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,32}$" />
                    <div class="invalid-feedback">Password must be 8-32 characters and contain at least one lowercase letter, one uppercase letter, and one digit.</div>
                </div>
                <button type="submit" className="btn btn-success btn-rspnsv btn-lg my-2" disabled={loading}>
                    {loading ? <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> : "Register"}
                </button>
            </form>
        </div>
    )
}