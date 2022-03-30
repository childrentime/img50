import { Link, useLocation } from "react-router-dom";
const Menu = () => {
  const location = useLocation();
  return (
    <>
      <Link
        to="/"
        style={location.pathname === "/" ? { color: "#224279" } : {}}
      >
        Overview
      </Link>
      <Link
        to="/products"
        style={location.pathname === "/products" ? { color: "#224279" } : {}}
      >
        Products
      </Link>
      <Link
        to="/blog"
        style={location.pathname === "/blog" ? { color: "#224279" } : {}}
      >
        Blog
      </Link>
      <Link
        to="/about"
        style={location.pathname === "/about" ? { color: "#224279" } : {}}
      >
        About
      </Link>
    </>
  );
};

export default Menu;
