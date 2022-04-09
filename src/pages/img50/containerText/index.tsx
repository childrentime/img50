import { useEffect, useRef } from "react";
import { Button } from "antd";
import Style from "./style.module.css";
import { useNavigate } from "react-router-dom";
const ContainerText = () => {
  const navigation = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      containerRef.current!.classList.add(`${Style.ready}`);
    }, 500);
  }, []);
  return (
    <div className={`${Style.containerText}`} ref={containerRef}>
      <h1 className={Style.h1}>Super Photo Browser</h1>
      <p className={Style.text}>
        Img50% is a network platform that provides precise algorithm functions
        for image processing enthusiasts. Thrive digitally as we improve your
        pictures with super image manipulation tools.
      </p>
      <div className={Style.containerButton}>
        <Button
          shape="round"
          style={{ color: "white", backgroundColor: "#224279" }}
          onClick={() => {
            navigation("/products");
          }}
        >
          Try now for free
        </Button>
      </div>
    </div>
  );
};

export default ContainerText;
