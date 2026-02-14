
export default function Footer() {
  return (
    <footer className="footer bg-primary text-white text-center pt-4">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <h5>SEASON GG</h5>
            <p>Season GG is run and operated by a one man team from the Detroit area of Michigan.</p>
            <p className="small text-secondary">
              Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors
                Market</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>.
            </p>
          </div>
          <div className="col-12">
            <a className="navbar-brand" href="/">
              <img className="logo-small" src="/src/assets/img/logo-small.png" />
            </a>
            <a href="#;" title="Contact Us" data-container="body"
              data-toggle="popover" data-placement="top"
              data-content="Please email us at seasonggfeedback@gmail.com to report a bug, leave feedback,
              or for any other customer support related questions."
              data-original-title="Contact Us">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
