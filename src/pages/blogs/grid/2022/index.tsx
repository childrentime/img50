import { Divider } from "antd";
import Style from "./style.module.css";
import Author from "../author";
import two from "../2022.png";

const Two = () => {
  return (
    <div className={Style.container}>
      <div className={Style.title}>What is the Img50% Platform?</div>
      <Divider className={Style.divider} />
      <Author />
      <div className={Style.whoImageContainer}>
        <img src={two} alt="" className={Style.whoImage} />
      </div>
      <div className={Style.textContainer}>
        <div className={Style.h1}>1. Background</div>
        <p className={Style.p}>
          The development of mobile electronic photographic equipment has made
          it possible for anyone to take photographs with their own mobile
          phone. Without good photography skills, it is easy to end up with poor
          quality photos that are not in focus or exposed correctly. Research
          has shown that image editing software such as Photoshop can usually
          improve image quality. Some studies have shown that image editing
          software such as Photoshop can usually improve image quality, but
          professional image editing programs are very expensive and the use of
          these complex programs requires a certain level of basic expertise and
          time-consuming work. Therefore, we have developed an image correction
          tool based on Deep Learning to improve image quality.
        </p>
        <div className={Style.h1}>2. Theme</div>
        <p className={Style.p}>
          Develop a web platform aimed at Image processing enthusiasts that
          provide them with accurate algorithm functions.
        </p>
        <div className={Style.h1}>3. Definition</div>
        <p className={Style.p}>
          AI Image Enlarger" company due to the lack of core competitiveness,
          the recent decrease in website traffic, so the design of an
          intelligent Image enhancement platform equipped with improved
          algorithm, to help the company to rebuild competitiveness.
        </p>
      </div>
    </div>
  );
};

export default Two;
