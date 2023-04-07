import {NavLink} from "react-router-dom";
import "./Nav.css";
import Logo from "../Logo/Logo";

export default function Nav() {
  return (
    <nav className="Nav">
      <Logo />
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
