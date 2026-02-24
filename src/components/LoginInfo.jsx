
import { useState } from "react"
import { login } from "../services/Login"

export default function LoginInfo() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError();
        setValidated(true);

        if (!username || !password) {
            return;
        }

        try {
            setLoading(true);
            await login(username, password);
            window.location.href = "/";
        } catch (error) {
            setError(error.message || "Login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="col-md-6 col-lg-4 my-2">
            <form id="loginForm" className={validated ? "was-validated" : ""} onSubmit={handleLogin} noValidate>
                <h1 className="h3 font-weight-normal text-center">Please sign in.</h1>
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <input name="username" type="text" className="form-control my-2" id="login-username" placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required />
                <input name="password" type="password" className="form-control my-2" id="login-password" placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                <button type="submit" className="btn btn-success btn-rspnsv btn-lg my-2" disabled={loading}>
                    {loading ? <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> : "Log In"}
                </button>
            </form>
        </div>
    )
}