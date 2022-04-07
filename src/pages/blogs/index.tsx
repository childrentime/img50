import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Responsive from "./responsive";
import Style from "./style.module.css";
import Title from "./title";
import Grid from "./grid";
const Blogs = () => {
  const [visible, setVisibe] = useState(false);
  return (
    <div className={Style.page}>
      <Header visible={visible} setVisibe={setVisibe} />
      <div style={visible ? { display: "none" } : {}}>
        <div className={Style.container}>
          <Title />
        </div>
        <Responsive />
        <Grid />
        <Footer />
      </div>
    </div>
  );
};

export default Blogs;
