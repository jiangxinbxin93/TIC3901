import { NavLink } from "react-router-dom";
import "./navbar.css";

import HomeLogo from '../images/Logo.png';

export default function Navbar() {
  return (
    <div className="nav">
      <NavLink className="navLink site-title" to="/">
      ArtsForAll
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
          <NavLink className="navLink" to="/about">
            Demo
          </NavLink>
        </li>

        <li>
          <NavLink className="navLink signUp" to="/about">
            Sign Up
          </NavLink>
        </li>
        {/* <li>
          <NavLink className="navLink" to="/search">
          <img className="image" style={{ width: 65 + "px" }} src={WhoLogo}  alt=""></img>
          </NavLink>
        </li> */}
      </ul>
    </div>

   


  );
}
