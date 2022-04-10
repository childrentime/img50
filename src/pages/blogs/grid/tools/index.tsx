import { Divider } from "antd";
import Style from "./style.module.css";
import Author from "../author";
import two from "../tools.png";
import Footer from "../../../../components/Footer";

const Tools = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.title}>
          Choose the Right Tools for Web Design and Production
        </div>
        <Divider className={Style.divider} />
        <Author time="03 APR 2022 · 4 MIN READ" />
        <div className={Style.whoImageContainer}>
          <img src={two} alt="" className={Style.whoImage} />
        </div>
        <div className={Style.textContainer}>
          <div className={Style.h1}>1. Web Design Tool Selection: Adobe Xd</div>
          <div className={Style.compare}>
            <div className={Style.h3}>Visio</div>
            <p className={Style.p}>
              Draw a business process diagram of the product.
            </p>
          </div>
          <div className={Style.compare}>
            <div className={Style.h3}>
              Photoshop <br />
              or Sketch
            </div>
            <p className={Style.p}>
              Drawing, representing the visual layer of the product, including
              fillets, projections, and Boolean operations.
            </p>
          </div>
          <div className={Style.compare}>
            <div className={Style.h3}>
              Mindmanager <br />
              or Xmind
            </div>
            <p className={Style.p}>
              Represent the information architecture of the product
            </p>
          </div>
          <div className={Style.compare}>
            <div className={Style.h3}>Adobe XD</div>
            <p className={Style.p}>
              You can use Adobe XD to open other Adobe tools (Photoshop and
              Illustrator) as well as files in Sketch. Responsive layouts can be
              laid out, and Fireblde can be used to generate code for static
              pages with one click, which is more intuitive. It can create
              various dynamic effects, realize switching and jumping, and
              supports a wide range of plug-ins.
            </p>
          </div>
          <div className={Style.compare}>
            <div className={Style.h3}>Axure PR</div>
            <p className={Style.p}>
              Represent the product's page graphic layout and page jump
              relationship Have a full set of web control library, automatic
              output site prototype, automatic output word format specification
              file;
            </p>
          </div>
          <div className={Style.h1}>
            2. Web front-end tool selection: Vscode
          </div>
          <div className={Style.compare}>
            <div className={Style.h3}>Vscode</div>
            <p className={Style.p}>
              Using group: Developer Resource environment: MacOS、Windows、Linux
              Programming language:Supports the development of multiple
              programming languages such as JavaScript, C, Java, and Python
              Platform:Microsoft's software development platform supports all
              .net programming in languages such as C, C, VB, F, J, HTML, XML,
              javascript, and more. Compatibility:Compatible with other things
              related to .net development, such as crystal reports, ajax,
              JQuery, and so on. Resource usage:Free open source modern
              lightweight code editor.
            </p>
          </div>
          <div className={Style.compare}>
            <div className={Style.h3}>Dreamweaver</div>
            <p className={Style.p}>
              Using group: Designer Resource environment: Linux is not supported
              Programming language: HTML, css, JavaScript only Platform: Web
              editor dedicated to creating web pages and managing websites,
              supporting HTML, javascript, CSS, etc. Compatibility:Features are
              more single-minded and are mainly used for static web design PS.
              Resource usage: Resources are over-occupied
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <Footer />
      </div>
    </>
  );
};

export default Tools;
