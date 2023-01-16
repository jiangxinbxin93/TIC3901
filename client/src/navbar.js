import { NavLink } from "react-router-dom";
import "./navbar.css";
import WhoLogo from './images/whoAmI.png';
import HomeLogo from './images/Arts_Culture.png';

export default function Navbar() {
  return (
    <div className="nav">
      <NavLink className="navLink site-title" to="/">
        
      <img style={{ width: 70 + "px" }} src={HomeLogo}  alt=""></img>
      </NavLink>
      <ul className="header">
      <li>
          <NavLink className="navLink" to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink className="navLink" to="/about">
            About
          </NavLink>
        </li>

        <li>
          <NavLink className="navLink" to="/search">
          <img className="image" style={{ width: 65 + "px" }} src={WhoLogo}  alt=""></img>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
