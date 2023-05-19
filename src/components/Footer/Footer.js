import { Link, NavLink } from "react-router-dom";
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
        <Link to="https://instagram.com/xxanax_2.0?igshid=OTk0YzhjMDVlZA==" target="blank">
          <i className="fa-brands fa-instagram" />
        </Link>
      </div>
      <div className="info">
        ToyHub - online shop © 2023
      </div>
    </div>
  )
}