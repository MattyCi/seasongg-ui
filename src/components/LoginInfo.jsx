
export default function LoginInfo() {
  return (
        <div className="col-md-6 col-lg-4 my-2">
            <form id="loginForm" action="/userLogIn" method="POST">
                <h1 className="h3 font-weight-normal text-center">Please sign in.</h1>
                <input name="username" type="text" className="form-control my-2" id="login-username" placeholder="Enter Username" />
                <input name="password" type="password" className="form-control my-2" id="login-password" placeholder="Password" />
                <button type="submit" className="btn btn-success btn-rspnsv btn-lg my-2">Log In</button>
            </form>
        </div>
    )
}