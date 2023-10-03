// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-bg">
    <div className="logo-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-logo"
      />
      <h1 className="header-logo-title">Wave</h1>
    </div>

    <ul className="header-list-items">
      <li>
        <Link to="/" className="header-components">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="header-components">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="header-components">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
