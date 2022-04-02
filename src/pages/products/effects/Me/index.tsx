import Style from "./style.module.css";
import a1 from "./图片17.jpg";
import a1C from "./图片17（1）.jpg";
import a2 from "./paishe27.jpg";
import a2C from "./paishe27（1）.jpg";
import a3 from "./paishe28.jpg";
import a3C from "./paishe28（1）.jpg";
import a4 from "./paishe29.jpg";
import a4C from "./paishe29（1）.jpg";
import a5 from "./paishe34.jpg";
import a5C from "./paishe34（1）.jpg";
import a6 from "./paishe35.jpg";
import a6C from "./paishe35（1）.jpg";
import { Button } from "antd";
import Like from "../Like";
import DragImage from "../DragImage";

const download = (url: string) => {
  const element = document.createElement("a");
  element.target = "_blank";
  element.href = url;
  element.click();
};
const Me = () => {
  return (
    <div>
      <div className={Style.images}>
        <div className={Style.image}>
          <div className={Style.imageC}>
            <DragImage url={a1} urlC={a1C} />
            <div className={Style.imageD}>
              <Like />
              <Button
                className={Style.button}
                shape="round"
                size="small"
                onClick={() => {
                  download(a1);
                }}
              >
                download
              </Button>
            </div>
          </div>
          <div className={Style.imageC}>
            <DragImage url={a2} urlC={a2C} />
            <div className={Style.imageD}>
              <Like />
              <Button
                className={Style.button}
                shape="round"
                size="small"
                onClick={() => {
                  download(a2);
                }}
              >
                download
              </Button>
            </div>
          </div>
        </div>

        <div className={Style.image}>
          <div className={Style.imageC}>
            <DragImage url={a3} urlC={a3C} />
            <div className={Style.imageD}>
              <Like />
              <Button
                className={Style.button}
                shape="round"
                size="small"
                onClick={() => {
                  download(a3);
                }}
              >
                download
              </Button>
            </div>
          </div>
          <div className={Style.imageC}>
            <DragImage url={a4} urlC={a4C} />
            <div className={Style.imageD}>
              <Like />
              <Button
                className={Style.button}
                shape="round"
                size="small"
                onClick={() => {
                  download(a4);
                }}
              >
                download
              </Button>
            </div>
          </div>
        </div>

        <div className={Style.image}>
          <div className={Style.imageC}>
            <DragImage url={a5} urlC={a5C} />
            <div className={Style.imageD}>
              <Like />
              <Button
                className={Style.button}
                shape="round"
                size="small"
                onClick={() => {
                  download(a5);
                }}
              >
                download
              </Button>
            </div>
          </div>
          <div className={Style.imageC}>
            <DragImage url={a6} urlC={a6C} />
            <div className={Style.imageD}>
              <Like />
              <Button
                className={Style.button}
                shape="round"
                size="small"
                onClick={() => {
                  download(a6);
                }}
              >
                download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
