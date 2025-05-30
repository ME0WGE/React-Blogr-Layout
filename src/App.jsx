import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Product from "./pages/Product";
import Company from "./pages/Company";
import Connect from "./pages/Connect";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        {/* HOMEPAGE */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="company" element={<Company />} />
          <Route path="connect" element={<Connect />} />
        </Route>

        {/* Page de Product par défaut */}
        <Route path="/product" element={<Layout />}>
          <Route index element={<Product />} />
          <Route path="product" element={<Product />} />
          <Route path="company" element={<Company />} />
          <Route path="connect" element={<Connect />} />
        </Route>

        {/* Page de Company par défaut */}
        <Route path="/company" element={<Layout />}>
          <Route index element={<Company />} />
          <Route path="product" element={<Product />} />
          <Route path="company" element={<Company />} />
          <Route path="connect" element={<Connect />} />
        </Route>

        {/* Page de Connect par défaut */}
        <Route path="/connect" element={<Layout />}>
          <Route index element={<Connect />} />
          <Route path="product" element={<Product />} />
          <Route path="company" element={<Company />} />
          <Route path="connect" element={<Connect />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
