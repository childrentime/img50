import { Divider } from "antd";
import Style from "./style.module.css";
import Author from "../author";
import two from "../dev.png";
import Footer from "../../../../components/Footer";
import task from "./task.png";
import pro from "./pro.png";

const Dev = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.title}>
          Five steps to building an image-enhanced website
        </div>
        <Divider className={Style.divider} />
        <Author />
        <div className={Style.whoImageContainer}>
          <img src={two} alt="" className={Style.whoImage} />
        </div>
        <div className={Style.textContainer}>
          <div className={Style.h1}>
            Five steps to building an image-enhanced website
          </div>
          <img alt="" src={task} className={Style.whoImage} />
          <div className={Style.h1}>Stage 1: Research</div>
          <p className={Style.p}>
            The project is divided into five phases, in which the preliminary
            survey has been completed. In the webpage design stage, should have
            design ability and preliminary development ability, can skillfully
            use HTML, CSS and javasript, and can use VUE framework to build
            webpage, realize the connection between front-end and back-end.
            Therefore, in this phase, I acted as a front-end application
            development engineer and UI designer.
          </p>
          <div className={Style.h1}>Stage 3: Software Development</div>
          <p className={Style.p}>
            In this stage, I first designed the initial wireframes, and then
            planned the flow chart of the whole website, which helped to
            understand what needed to be done in each step and the solutions
            when problems were encountered.
          </p>
          <img alt="" src={pro} className={Style.whoImage} />
          <div className={Style.h1}>Stage 4: Hardware Development</div>
          <p className={Style.p}>
            In the stage of hardware development, it is mainly
            post-construction. Requiring Python skills and deep learning
            techniques, data structure design can be done using this framework.
            Therefore, I am like a senior engineer of system platform
            development at this stage. I also drew a working flow chart for the
            general process of this stage.
          </p>
          <div className={Style.h1}>Stage 5: Publicity</div>
          <p className={Style.p}>
            In the later stage of publicity, conduct overall operation planning
            and assist in promotion on multiple platforms. In addition, I have
            made an annual operation plan for the next year. These plans may not
            be completed within the limited time of this semester, but it is
            necessary to look into the sustainable development of the product in
            the future and enhance the vitality of the product.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dev;
