import { useState } from "react";
import Header from "../../components/Header";
import ContainerText from "./containerText";
import Footer from "./footer";
import Overexposure from "./overexposure";
import Style from "./style.module.css";
import Underexposure from "./underexposure";
import Wrapper from "./wrapper";

const Img50 = () => {
  const [visible, setVisibe] = useState(false);
  return (
    <div className={Style.page}>
      <Header visible={visible} setVisibe={setVisibe} />
      <div style={visible ? { display: "none" } : {}}>
        <ContainerText />
        <Wrapper />
        <Underexposure />
        <Overexposure />
        <Footer />
      </div>
    </div>
  );
};

export default Img50;
