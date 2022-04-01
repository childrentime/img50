import Style from "./style.module.css";
import footer from "../../assets/images/footer.png";
import { Image } from "antd";
import Information from "./information";
import Copyright from "./copyright";
const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.container}>
        <div className={Style.left}>
          <div>Do it all with Image 50%</div>
        </div>
        <div className={Style.right}>
          <div>
            <Image src={footer} preview={false} />
          </div>
        </div>
      </div>
      <Information />
      <Copyright />
    </div>
  );
};

export default Footer;
