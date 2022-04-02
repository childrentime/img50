import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Description from "./description";
import Style from "./style.module.css";
import UploadImage from "./uploadImage";
import Effect from "./effects";

const Product = () => {
  const [visible, setVisibe] = useState(false);
  return (
    <div className={Style.page}>
      <Header visible={visible} setVisibe={setVisibe} />
      <div style={visible ? { display: "none" } : {}}>
        <Description />
        <UploadImage />
        <Effect />
        <Footer />
      </div>
    </div>
  );
};

export default Product;
