import { useState } from "react";
import Header from "../../components/Header";
import Description from "./description";
import Style from "./style.module.css";
import UploadImage from "./uploadImage";

const Product = () => {
  const [visible, setVisibe] = useState(false);
  return (
    <div className={Style.page}>
      <Header visible={visible} setVisibe={setVisibe} />
      <div style={visible ? { display: "none" } : {}}>
        <Description />
        <UploadImage />
      </div>
    </div>
  );
};

export default Product;
