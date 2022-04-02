import Style from "./style.module.css";
import a1 from "./paishe5.jpg";
import a1C from "./paishe5（1）.jpg";
import a2 from "./paishe6.jpg";
import a2C from "./paishe6（1）.jpg";
import a3 from "./paishe7.jpg";
import a3C from "./paishe7（1）.jpg";
import a4 from "./paishe15.jpg";
import a4C from "./paishe15（1）.jpg";
import a5 from "./paishe16.jpg";
import a5C from "./paishe16（1）.jpg";
import a6 from "./paishe17.jpg";
import a6C from "./paishe17（1）.jpg";
import { Button } from "antd";
import Like from "../Like";
import DragImage from "../DragImage";

const download = (url: string) => {
  const element = document.createElement("a");
  element.target = "_blank";
  element.href = url;
  element.click();
};
const StillLife = () => {
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

export default StillLife;
