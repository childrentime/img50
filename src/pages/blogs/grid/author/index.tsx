import Style from "./style.module.css";
import { Avatar } from "antd";
import avatar from "./avatar.png";
const Author = (props: { time: string }) => {
  const { time } = props;
  return (
    <div className={Style.author}>
      <div className={Style.imageContainer}>
        <Avatar src={avatar} className={Style.image} size="large" />
      </div>
      <div>
        <div className={Style.name}>Zhangqi</div>
        <div className={Style.date}>{time}</div>
      </div>
    </div>
  );
};

export default Author;
