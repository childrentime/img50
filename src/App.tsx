import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Who from "./pages/blogs/grid/who";
import Img50 from "./pages/img50";
import Product from "./pages/products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Img50 />} />
        <Route path="/products" element={<Product />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/who" element={<Who />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
