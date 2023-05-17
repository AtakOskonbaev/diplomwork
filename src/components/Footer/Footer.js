import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <ul className="footerItem">
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
      </ul>
    </div>
  )
}