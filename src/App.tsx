import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./pages/blogs";
import Img50 from "./pages/img50";
import Product from "./pages/products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Img50 />} />
        <Route path="/products" element={<Product />} />
        <Route path="/blog" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
