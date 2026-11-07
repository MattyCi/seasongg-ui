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
            <h5 className="fw-bold"><span>SEASON</span> <span className="text-success">GG</span></h5>
          </div>
          <div className="col-12">
            <a className="navbar-brand" href="/">
              <img className="logo-small" src="/src/assets/img/logo-small.png" />
            </a>
            <a className="ms-3" href="#;" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Contact Us"
              data-bs-content="Please email us at seasonggfeedback@gmail.com to report a bug, leave feedback, or for any other customer support related questions.">
                Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
