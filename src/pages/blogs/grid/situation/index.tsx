import { Divider } from "antd";
import Style from "./style.module.css";
import Author from "../author";
import two from "../situation.png";
import Footer from "../../../../components/Footer";
import update from "./update.png";
import review from "./review.png";
import company from "./company.png";

const Situation = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.title}>
          Situation Appraisal Based on Existing Image Intelligent Processing
          Platform
        </div>
        <Divider className={Style.divider} />
        <Author />
        <div className={Style.whoImageContainer}>
          <img src={two} alt="" className={Style.whoImage} />
        </div>
        <div className={Style.textContainer}>
          <div className={Style.h1}>1. Client</div>
          <p className={Style.p}>
            "AI Image Enlarger" company due to the lack of core competitiveness,
            the recent decrease in website traffic, so the design of an
            intelligent Image enhancement platform equipped with improved
            algorithm, to help the company to rebuild competitiveness.
            http://imagelarger.com/
          </p>
          <div className={Style.h1}>2. Analysis of existing problems</div>
          <p className={Style.p}>
            In the past 3 months, website traffic has declined. At the same
            time, I also got to know the evaluation of the users who bought the
            software. This software can use some functions for free, most of
            which are charged. Almost all evaluations are suggest
          </p>
          <img alt="" src={update} className={Style.whoImage} />
          <img alt="" src={review} className={Style.whoImage} />

          <p className={Style.p}>
            <div style={{ textAlign: "center" }}>
              Consumer reviews of the product
            </div>
            However there are many platforms similar to AI Image Enlarger, and
            the company lacks unique competitiveness. Comparing this software
            with other products of the same type, you will find that it does not
            support Linux systems and does not provide tutorials.
          </p>
          <img alt="" src={company} className={Style.whoImage} />
          <div className={Style.h1}>3. Porter's Five Forces analysis</div>
          <p className={Style.p}>
            Buyers: He has a lot of negative comments, which has been mentioned
            in the above weakness; Suppliers: This site charges fees through the
            Amazon platform Entry: The intervention of new capital has an impact
            on the platform. Substitutes: The new algori
          </p>
          <div className={Style.h1}>4. Product Lifecycle</div>
          <p className={Style.p}>
            This product has entered a mature period. The biggest problem in the
            mature period is to make corresponding changes, otherwise it is easy
            to enter the recession period. Therefore, technological innovation
            is required, such as algorithm innovation and
          </p>
          <div className={Style.h1}>5. Quality vs. Price</div>
          <p className={Style.p}>
            The company is currently owned by Medium Quality, High Price.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Situation;
