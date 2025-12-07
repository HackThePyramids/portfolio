import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <svg
          className="nav-icon"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.80827 25.9497L11.2831 28.4246L18.7078 21L11.2831 13.5753L8.80827 16.0502L13.758 21L8.80827 25.9497Z"
            fill="white"
          />
          <path d="M26.25 24.5H19.25V28H26.25V24.5Z" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.5 3.5C1.567 3.5 0 5.067 0 7V35C0 36.933 1.567 38.5 3.5 38.5H38.5C40.433 38.5 42 36.933 42 35V7C42 5.067 40.433 3.5 38.5 3.5H3.5ZM38.5 7H3.5V35H38.5V7Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="nav-links">
        <Link
          to="/"
          className={`nav-link ${isActive('/') ? 'active' : ''}`}
        >
          HOME
        </Link>
        <Link
          to="/projects"
          className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
        >
          THINGS-I-MADE
        </Link>
        <Link
          to="/contact"
          className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
        >
          TALK-TO-ME
        </Link>
      </div>
    </nav>
  )
}
