
export default function LoginInfo() {
  return (
        <div className="row my-3 justify-content-around">
            <div className="col-md-6 col-lg-4 my-2">
                <form id="loginForm" action="/userLogIn" method="POST">
                    <h1 className="h3 font-weight-normal text-center">Please sign in.</h1>
                    <input name="username" type="text" className="form-control my-2" id="login-username" placeholder="Enter Username" />
                    <input name="password" type="password" className="form-control my-2" id="login-password" placeholder="Password" />
                    <button type="submit" className="btn btn-success btn-rspnsv btn-lg my-2">Log In</button>
                </form>
            </div>
            <div className="col-md-6 col-lg-4 my-2">
                <form id="registerForm" action="/userRegister" method="POST">
                    <h1 className="h3 font-weight-normal text-center">Or, register below.</h1>
                    <input name="username" type="text" className="form-control  my-2" id="register-username" placeholder="Enter Username" />
                    <input name="password" type="password" className="form-control  my-2" id="register-password" placeholder="Password" autocomplete="new-password" />
                    <input name="passwordVerify" type="password" className="form-control  my-2" id="register-password-verify" placeholder="Verify Password" />
                    <button type="submit" className="btn btn-success btn-rspnsv btn-lg my-2">Register</button>
                </form>
            </div>
        </div>
    )
}