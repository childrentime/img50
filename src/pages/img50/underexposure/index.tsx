import Style from "./style.module.css";
import compare from "../../../assets/images/compare.png";
import { Image, Button } from "antd";
const Underexposure = () => {
  return (
    <div className={Style.container}>
      <div className={Style.left}>
        <div className={Style.title}>Underexposure image enhancer</div>
        <p className={Style.p}>
          Img50% Free Image Enhancement offers brand new image enhancement tools
          to help further enhance your photos. It uses artificial intelligence
          technology to analyze and convert your images into high-quality
          photos. Recover images that had exposure problems at the time of
          shooting and reproduce them as you see them.
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
      <div className={Style.right}>
        <Image src={compare} preview={false} />
      </div>
    </div>
  );
};

export default Underexposure;
