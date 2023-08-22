import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="container">
    <div className="frame1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
        className="icon"
        alt="wave"
      />

      <h1 className="icon-head">Wave</h1>
    </div>
    <div>
      <ul className="ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
