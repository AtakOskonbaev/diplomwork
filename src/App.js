import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">

      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<h2>about</h2>} />
          <Route path="/contacts" element={<h2>contacts</h2>} />
          <Route path="/delivery" element={<h2>delivery</h2>} />
        </Routes>
      </Layout>

    </div>
  );
}

export default App;
