import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/Catalog/ProductList";
import Home from "./components/Home";
import "./styles.css";

function App() {
  return (
    <BrowserRouter basename="/herbalife-marketing-site">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-list" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
