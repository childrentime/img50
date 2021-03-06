import Style from "./style.module.css";
import logo from "../../../assets/images/logo.png";
import { Image, Input, Button } from "antd";
import facebook from "./fackbook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";
import youtube from "./youtube.svg";
import { RightOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

const Information = () => {
  const navigation = useNavigate();
  const location = useLocation();
  return (
    <div className={Style.container}>
      <div className={Style.left}>
        <Image src={logo} preview={false} width={100} className={Style.logo} />
        <p className={Style.p}>
          Our products are carefully currated and designed to suit your Web and
          Mobile UI/UX frameworks. Mobile, tablet, computer and other devices
          can be used online to help you improve the image quality of
          overexposure and underexposure by establishing more accurate
          algorithms.
        </p>
      </div>
      <div className={Style.leftM}>
        {location.pathname !== "/" && (
          <div
            style={{ marginBottom: 20 }}
            onClick={() => {
              navigation("/");
            }}
          >
            Overview
          </div>
        )}

        {location.pathname !== "/products" && (
          <div
            style={{ marginBottom: 20 }}
            onClick={() => {
              navigation("/products");
            }}
          >
            Products
          </div>
        )}

        {location.pathname !== "/blog" && (
          <div
            style={{ marginBottom: 20 }}
            onClick={() => {
              navigation("/blog");
            }}
          >
            Blog
          </div>
        )}

        {location.pathname !== "/about" && (
          <div
            onClick={() => {
              navigation("/about");
            }}
          >
            Contact
          </div>
        )}
      </div>
      <div className={Style.rightM}>
        <div style={{ marginBottom: 20 }}>
          <Image src={facebook} preview={false} width={20} />
          Facebook
        </div>
        <div style={{ marginBottom: 20 }}>
          <Image src={twitter} preview={false} width={20} />
          Twitter
        </div>
        <div style={{ marginBottom: 20 }}>
          <Image src={instagram} preview={false} width={20} />
          Instagram
        </div>
        <div>
          <Image src={youtube} preview={false} width={20} />
          Youtube
        </div>
      </div>
      <div className={Style.right}>
        <div style={{ marginBottom: 20 }}>Newsletter</div>
        <div style={{ marginBottom: 20 }}>
          <Input.Group compact>
            <Input
              style={{ width: "calc(100% - 200px)" }}
              placeholder="E-mail"
            />
            <Button style={{ backgroundColor: "#224279 " }}>
              <RightOutlined style={{ color: "white" }} />
            </Button>
          </Input.Group>
        </div>
        <p className={Style.p}>
          No spam, notifications only about new products, updates and freebies
        </p>
      </div>
    </div>
  );
};

export default Information;
