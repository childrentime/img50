import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Contact from "./contact";
import Style from "./style.module.css";
import Title from "./title";
import Touch from "./touch";
import Visit from "./visit";
const About = () => {
  const [visible, setVisibe] = useState(false);
  return (
    <div className={Style.page}>
      <Header visible={visible} setVisibe={setVisibe} />
      <div style={visible ? { display: "none" } : {}}>
        <Title />
        <Touch />
        <Contact />
        <Visit />
        <Footer />
      </div>
    </div>
  );
};

export default About;
