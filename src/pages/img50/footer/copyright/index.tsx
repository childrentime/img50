import { Divider } from "antd";
import Style from "./style.module.css";
const Copyright = () => {
  return (
    <>
      <Divider style={{ backgroundColor: "#878787 " }} />
      <div className={Style.container}>
        <div className={Style.left}>
          Copyright © 2022 Image50%. All rights reserved
        </div>
        <div className={Style.right}>
          Cookie Settings, Anti - Span, Privacy, User agreement, Leagl Notice
          and Responsible Disclosure
        </div>
      </div>
      <div className={Style.white} />
    </>
  );
};

export default Copyright;
