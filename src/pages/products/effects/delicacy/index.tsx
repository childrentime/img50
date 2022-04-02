import Style from "./style.module.css";
import a1 from "./paishe8.jpg";
import a1C from "./paishe8（1）.jpg";
import a2 from "./paishe9.jpg";
import a2C from "./paishe9（1）.jpg";
import a3 from "./paishe10.jpg";
import a3C from "./paishe10（1）.jpg";
import { Button } from "antd";
import Like from "../Like";
import DragImage from "../DragImage";

const download = (url: string) => {
  const element = document.createElement("a");
  element.target = "_blank";
  element.href = url;
  element.click();
};
const Delicacy = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Delicacy;
