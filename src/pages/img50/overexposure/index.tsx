import Style from "./style.module.css";
import { Image, Button } from "antd";
import over from "../../../assets/images/over.png";
const Overexposure = () => {
  return (
    <div className={Style.container}>
      <div className={Style.left}>
        <Image src={over} preview={false} />
      </div>
      <div className={Style.right}>
        <div className={Style.title}>Overexposure image enhancer</div>
        <p className={Style.p}>
          Have no photo editing skills? You don't need to. Img50%'s powerful
          image enhancer can help you to enhance the picture quality with just
          one click. Just upload an image and click a button, and Img50% will
          automatically detect and correct exposure issues in the photo, improve
          details, and transmit it in real time. Enhance images easily with
          Img50%.
        </p>
        <div className={Style.containerButton}>
          <Button
            shape="round"
            style={{ color: "white", backgroundColor: "#224279" }}
          >
            Enhance Photos Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Overexposure;
