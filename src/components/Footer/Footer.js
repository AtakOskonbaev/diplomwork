import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="footer-links">
        <ul>
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
        <i class="fa-brands fa-instagram" />
      </div>
      <div className="info">
        ToyHub - online shop © 2023
      </div>
    </div>
  )
}