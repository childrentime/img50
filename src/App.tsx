import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Two from "./pages/blogs/grid/2022";
import Dev from "./pages/blogs/grid/dev";
import Responsive from "./pages/blogs/grid/responsive";
import Situation from "./pages/blogs/grid/situation";
import Tools from "./pages/blogs/grid/tools";
import VS from "./pages/blogs/grid/vs";
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
        <Route path="/blog/who" element={<Who />} />
        <Route path="/blog/2022" element={<Two />} />
        <Route path="/blog/tools" element={<Tools />} />
        <Route path="/blog/vs" element={<VS />} />
        <Route path="/blog/responsive" element={<Responsive />} />
        <Route path="/blog/dev" element={<Dev />} />
        <Route path="/blog/situation" element={<Situation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
