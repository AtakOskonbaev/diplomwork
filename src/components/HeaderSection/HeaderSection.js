import "./HeaderSection.css";
import Logo from "../Logo/Logo";
import CartLink from "../CartLink/CartLink";

export default function HeaderSection() {
  return (
    <div className="HeaderSection">
      <Logo />
      <input type="text" placeholder="Catalog search" />
      <p>Daily from <span>10am</span> to <span>10pm</span></p>
      <CartLink />
    </div>
  )
}