import { HeartOutlined } from "@ant-design/icons";
import { useState } from "react";
import Style from "./style.module.css";
const Like = () => {
  const [active, setActive] = useState(false);
  return (
    <HeartOutlined
      className={Style.heart}
      style={active ? { color: "red" } : {}}
      onClick={() => setActive(!active)}
    />
  );
};

export default Like;
