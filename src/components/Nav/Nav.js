import { NavLink } from "react-router-dom";
import "./Nav.css";
import Auth from "../Auth/Auth";

export default function Nav() {
  return (
    <nav className="Nav">
      <ul className="NavItem">
        <li className="homeLink">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/delivery">Delivery</NavLink>
        </li>
        <li className="rightSide">
          <Auth />
        </li>
      </ul>
    </nav>
  )
}
