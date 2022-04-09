import Style from "./style.module.css";
import { Image } from "antd";
import avatar from "./avatar.png";
const Author = () => {
  return (
    <div className={Style.author}>
      <div className={Style.imageContainer}>
        <Image
          src={avatar}
          preview={false}
          height={60}
          className={Style.image}
        />
      </div>
      <div>
        <div className={Style.name}>Zhangqi</div>
        <div className={Style.date}>10 APR 2022 · 3 MIN READ</div>
      </div>
    </div>
  );
};

export default Author;
