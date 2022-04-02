import Style from "./style.module.css";
import a1 from "./l1.jpg";
import a1C from "./l1（1）.jpg";
import a2 from "./l2.jpg";
import a2C from "./l2(1).jpg";
import a3 from "./l3.jpg";
import a3C from "./l3(1).jpg";
import a4 from "./l4.jpg";
import a4C from "./l4(1).jpg";
import a5 from "./l5.jpg";
import a5C from "./l5（1）.jpg";
import a6 from "./l6(1).jpg";
import a6C from "./l7.jpg";
import a7 from "./l8.jpg";
import a7C from "./l8(1).jpg";
import { Button } from "antd";
import Like from "../Like";
import DragImage from "../DragImage";

const download = (url: string) => {
  const element = document.createElement("a");
  element.target = "_blank";
  element.href = url;
  element.click();
};
const Landscape = () => {
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
          <div className={Style.imageC}>
            <DragImage url={a7} urlC={a7C} />
            <div className={Style.imageD}>
              <Like />
              <Button
                className={Style.button}
                shape="round"
                size="small"
                onClick={() => {
                  download(a7);
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

export default Landscape;
