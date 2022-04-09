import Style from "./style.module.css";
import compare from "../../../assets/images/compare.png";
import { Button } from "antd";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const Underexposure = () => {
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
        textRef.current!.style.animationName = `${Style.leftSlidein}`;
      }
    });
    intersectionImageObserver.observe(imageRef.current!);
    intersectionTextObserver.observe(textRef.current!);
  }, []);
  return (
    <div className={Style.container}>
      <div className={Style.left} ref={textRef}>
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
            onClick={() => {
              navigation("/products");
            }}
          >
            Enhance Photos Now
          </Button>
        </div>
      </div>
      <div className={Style.right}>
        <img src={compare} alt="" className={Style.image} ref={imageRef} />
      </div>
    </div>
  );
};

export default Underexposure;
