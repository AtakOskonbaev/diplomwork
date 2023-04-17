import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { createContext, useEffect, useState } from "react";
import { categoryCollection, productsCollection } from "./firebase";
import { getDocs } from "firebase/firestore/lite";
import Product from "./pages/Product";
import { Cart } from "./pages/Cart";

export const AppContext = createContext({
  categories: [],
  products: [],
  cart: {},
  setCart: () => { },
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    getDocs(categoryCollection)
      .then(({ docs }) => {
        setCategories(
          docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          }))
        )
      })
  }, []);

  useEffect(() => {
    getDocs(productsCollection)
      .then(({ docs }) => {
        setProducts(
          docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          }))
        )
      })
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products, cart, setCart }} >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="/products/:slug" element={<Product />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;
