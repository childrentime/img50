import { Button } from "antd";
import { useState } from "react";
import Architecture from "./architecture";
import Delicacy from "./delicacy";
import Landscape from "./landscape";
import Me from "./Me";
import Portrait from "./portrait";
import Scenes from "./Scenes";
import StillLife from "./still life";
import Style from "./style.module.css";

const Effect = () => {
  const [type, setType] = useState("arch");
  return (
    <div className={Style.container}>
      <div className={Style.text}>The demonstration of effects</div>
      <div className={Style.buttons}>
        <Button
          className={Style.button}
          onClick={() => {
            setType("arch");
          }}
        >
          Architecture
        </Button>
        <Button
          className={Style.button}
          onClick={() => {
            setType("deli");
          }}
        >
          Delicay
        </Button>
        <Button
          className={Style.button}
          onClick={() => {
            setType("land");
          }}
        >
          Landscape
        </Button>
        <Button
          className={Style.button}
          onClick={() => {
            setType("me");
          }}
        >
          Me
        </Button>
        <Button
          className={Style.button}
          onClick={() => {
            setType("port");
          }}
        >
          Portrait
        </Button>
        <Button
          className={Style.button}
          onClick={() => {
            setType("scne");
          }}
        >
          Scenes
        </Button>
        <Button
          className={Style.button}
          onClick={() => {
            setType("stil");
          }}
        >
          Still life
        </Button>
      </div>
      {type === "arch" && <Architecture />}
      {type === "deli" && <Delicacy />}
      {type === "land" && <Landscape />}
      {type === "me" && <Me />}
      {type === "port" && <Portrait />}
      {type === "scne" && <Scenes />}
      {type === "stil" && <StillLife />}
    </div>
  );
};

export default Effect;
