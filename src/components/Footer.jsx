import { useEffect } from 'react';
import { Popover } from 'bootstrap';

export default function Footer() {
  useEffect(() => {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(popoverTriggerEl => new Popover(popoverTriggerEl));
  }, []);

  return (
    <footer className="footer bg-primary text-white text-center pt-4">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <h5 className="text-success fw-bold">SEASON GG</h5>
            <p className="small">Season GG is run and operated by a one man team from the Detroit area of Michigan.</p>
            <p className="small text-secondary">
              Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors
                Market</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>.
            </p>
          </div>
          <div className="col-12">
            <a className="navbar-brand" href="/">
              <img className="logo-small" src="/src/assets/img/logo-small.png" />
            </a>
            <a href="#;" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Contact Us"
              data-bs-content="Please email us at seasonggfeedback@gmail.com to report a bug, leave feedback, or for any other customer support related questions.">
                Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
