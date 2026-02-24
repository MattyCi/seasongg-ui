import { useState } from "react"
import { register } from "../services/Register"

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

        if (!username || !password || !passwordVerify) {
            return;
        }

        try {
            setLoading(true);
            await register(username, password, passwordVerify);
            window.location.href = "/";
        } catch (error) {
            setError(error.message || "Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="col-md-6 col-lg-4 my-2">
            <form id="registerForm" className={validated ? "was-validated" : ""} onSubmit={handleRegister} noValidate>
                <h1 className="h3 font-weight-normal text-center">Or, register below.</h1>
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <input name="username" type="text" className="form-control my-2" id="register-username" placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required />
                <input name="password" type="password" className="form-control my-2" id="register-password" placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    required />
                <input name="passwordVerify" type="password" className="form-control my-2" id="register-password-verify" placeholder="Verify Password"
                    value={passwordVerify}
                    onChange={(e) => setPasswordVerify(e.target.value)}
                    required />
                <button type="submit" className="btn btn-success btn-rspnsv btn-lg my-2" disabled={loading}>
                    {loading ? <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> : "Register"}
                </button>
            </form>
        </div>
    )
}