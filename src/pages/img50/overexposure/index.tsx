import Style from "./style.module.css";
import { Button } from "antd";
import over from "../../../assets/images/over.png";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const Overexposure = () => {
  const navigation = useNavigate();
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const intersectionImageObserver = new IntersectionObserver(function (
      entries
    ) {
      if (entries[0].isIntersecting === true) {
        imageRef.current!.style.animationName = `${Style.rightSlidein}`;
      }
    });
    const intersectionTextObserver = new IntersectionObserver(function (
      entries
    ) {
      if (entries[0].isIntersecting === true) {
        textRef.current!.style.animationName = `${Style.textSlidein}`;
      }
    });
    intersectionImageObserver.observe(imageRef.current!);
    intersectionTextObserver.observe(textRef.current!);
  }, []);
  return (
    <div className={Style.container}>
      <div className={Style.right}>
        <img src={over} className={Style.image} alt="" ref={imageRef} />
      </div>
      <div className={Style.left} ref={textRef}>
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
            onClick={() => {
              navigation("/products");
            }}
          >
            Enhance Photos Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Overexposure;
