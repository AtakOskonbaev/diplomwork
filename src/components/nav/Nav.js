import {NavLink} from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/toystore-logo.png";

export default function Nav() {
  return (
    <nav className="Nav">
      <img src="{logo}" alt="logo" />
      <ul className="NavItem">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacs</NavLink>
        </li>
        <li>
          <NavLink to="/delivery">Delivery</NavLink>
        </li>
      </ul>
    </nav>
  )
}
