import Style from "./style.module.css";
import logo from "../../../../assets/images/logo.png";
import { Image, Input, Button } from "antd";
import facebook from "./fackbook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";
import youtube from "./youtube.svg";
import { RightOutlined } from "@ant-design/icons";

const Information = () => {
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
        <div style={{ marginBottom: 20 }}>Products</div>
        <div style={{ marginBottom: 20 }}>Blog</div>
        <div>Contact</div>
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
            <Button style={{ backgroundColor: "#2E7CD9 " }}>
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
