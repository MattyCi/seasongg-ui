import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        <Link className="navbar-brand d-md-none" to="/">
          <img src="/src/assets/img/logo-small.png" alt="Season GG Logo Image" />
        </Link>
        <Link className="navbar-brand d-none d-md-block" to="/">
          <img className="nav-logo-img" src="/src/assets/img/logo.png" alt="Season GG Logo Image" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/viewSeasonList?view=allSeasonsList">All Seasons</Link>
            </li>
          </ul>
        </div>
    </nav>
  )
}
