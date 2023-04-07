import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import "./Layout.css";
import CategoryList from "../CategoryList/CategoryList";

export default function Layout(props) {
  return (
    <div className="Layout">

      <header>
        <Nav />
        <Logo />
        <CategoryList />
      </header>
      <aside>
        <nav>NAV Categories</nav>
      </aside>
      <main>{props.children}</main>
      <footer>FOOTER</footer>

    </div>
  )
}