import "./HeaderSection.css";
import Logo from "../Logo/Logo";
import CartLink from "../CartLink/CartLink";

export default function HeaderSection() {
  return (
    <div className="HeaderSection">
      <Logo />
      <div className="search">
        <input type="text" placeholder="Catalog search" className="searcher" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="info">
        <p>Daily from 10am to 10pm</p>
        <p>+996 <span className="pink-text">123 345 567</span></p>
      </div>
      <CartLink />
    </div>
  )
}