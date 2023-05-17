import Nav from "../Nav/Nav";
import "./Layout.css";
import CategoryList from "../CategoryList/CategoryList";
import HeaderSection from "../HeaderSection/HeaderSection";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  return (
    <div className="Layout">

      <header>
        <Nav />
        <HeaderSection />
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>{props.children}</main>
        <Footer />
        
    </div>
  )
}