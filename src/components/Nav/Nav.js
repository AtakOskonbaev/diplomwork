import { NavLink } from "react-router-dom";
import "./Nav.css";
import Auth from "../Auth/Auth";

export default function Nav() {
  return (
    <nav className="Nav">
      <input id="menu-toggle" type="checkbox" />
      <label class='menu-button-container' for="menu-toggle">
        <div class='menu-button'></div>
      </label>
      <ul className="menu">
        <li>
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
