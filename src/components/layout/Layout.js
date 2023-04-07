import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="Layout">

      <header>
        <Logo/>
        <Nav />
      </header>
      <aside>
        <nav>NAV Categories</nav>
      </aside>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    
    </div>
  )
}