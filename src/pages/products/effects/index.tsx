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
  const [type, setType] = useState("me");
  return (
    <div className={Style.container}>
      <div className={Style.text}>The demonstration of effects</div>
      <div className={Style.slider}>
        <div className={Style.buttonContainer}>
          <div></div>
          <div className={Style.buttonFlex}>
            <div className={Style.buttons}>
              <div className={Style.button}>
                <div
                  className={Style.base}
                  style={type === "arch" ? { borderColor: " #1890ff" } : {}}
                >
                  <div
                    className={Style.a}
                    style={type === "arch" ? { color: " #1890ff" } : {}}
                    onClick={() => {
                      setType("arch");
                    }}
                  >
                    Architecture
                  </div>
                </div>
              </div>
              <div className={Style.button}>
                <div
                  className={Style.base}
                  style={type === "deli" ? { borderColor: " #1890ff" } : {}}
                >
                  <div
                    className={Style.a}
                    style={type === "deli" ? { color: " #1890ff" } : {}}
                    onClick={() => {
                      setType("deli");
                    }}
                  >
                    Delicacy
                  </div>
                </div>
              </div>
              <div className={Style.button}>
                <div
                  className={Style.base}
                  style={type === "land" ? { borderColor: " #1890ff" } : {}}
                >
                  <div
                    className={Style.a}
                    style={type === "land" ? { color: " #1890ff" } : {}}
                    onClick={() => {
                      setType("land");
                    }}
                  >
                    Landscape
                  </div>
                </div>
              </div>
              <div className={Style.button}>
                <div
                  className={Style.base}
                  style={type === "me" ? { borderColor: " #1890ff" } : {}}
                >
                  <div
                    className={Style.a}
                    style={type === "me" ? { color: " #1890ff" } : {}}
                    onClick={() => {
                      setType("me");
                    }}
                  >
                    Me
                  </div>
                </div>
              </div>
              <div className={Style.button}>
                <div
                  className={Style.base}
                  style={type === "port" ? { borderColor: " #1890ff" } : {}}
                >
                  <div
                    style={type === "port" ? { color: " #1890ff" } : {}}
                    className={Style.a}
                    onClick={() => {
                      setType("port");
                    }}
                  >
                    Portrait
                  </div>
                </div>
              </div>
              <div className={Style.button}>
                <div
                  className={Style.base}
                  style={type === "scen" ? { borderColor: " #1890ff" } : {}}
                >
                  <div
                    style={type === "scen" ? { color: " #1890ff" } : {}}
                    className={Style.a}
                    onClick={() => {
                      setType("scen");
                    }}
                  >
                    Scenes
                  </div>
                </div>
              </div>
              <div className={Style.button}>
                <div
                  className={Style.base}
                  style={type === "stil" ? { borderColor: " #1890ff" } : {}}
                >
                  <div
                    style={type === "stil" ? { color: " #1890ff" } : {}}
                    className={Style.a}
                    onClick={() => {
                      setType("stil");
                    }}
                  >
                    Still Life
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      {type === "arch" && <Architecture />}
      {type === "deli" && <Delicacy />}
      {type === "land" && <Landscape />}
      {type === "me" && <Me />}
      {type === "port" && <Portrait />}
      {type === "scen" && <Scenes />}
      {type === "stil" && <StillLife />}
    </div>
  );
};

export default Effect;
