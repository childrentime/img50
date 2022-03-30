import { Link, useLocation } from "react-router-dom";
import { Image } from "antd";
import Style from "./style.module.css";
import logo from "../../assets/images/logo.png";
const Header = () => {
  const location = useLocation();
  return (
    <div className={Style.header}>
      <div className={Style.center}>
        <div className={Style.logo}>
          <Image src={logo} alt="logo" width={100} />
        </div>
      </div>
      <div className={Style.center}>
        <div className={Style.nav}>
          <Link
            to="/"
            className={location.pathname === "/" ? `${Style.active}` : ""}
          >
            Overview
          </Link>
          <Link
            to="/products"
            className={
              location.pathname === "/products" ? `${Style.active}` : ""
            }
          >
            Products
          </Link>
          <Link
            to="/blog"
            className={location.pathname === "/blog" ? `${Style.active}` : ""}
          >
            Blog
          </Link>
          <Link
            to="/blog"
            className={location.pathname === "/blog" ? `${Style.active}` : ""}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
