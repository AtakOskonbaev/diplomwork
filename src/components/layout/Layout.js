export default function Layout(props) {
  return (
    <div className="Layout">

      <header>
        <nav>NAV</nav>
      </header>
      <aside>
        <nav>NAV Categories</nav>
      </aside>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    
    </div>
  )
}