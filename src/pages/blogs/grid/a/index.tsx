import { Divider } from "antd";
import Style from "./style.module.css";
import Author from "../author";
import two from "../a.png";
import Footer from "../../../../components/Footer";
import before from "./before.png";
import after from "./after.png";

const A = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.title}>What Makes a Good Photo Enhancer?</div>
        <Divider className={Style.divider} />
        <Author time="01 MAR 2022 · 4 MIN READ" />
        <div className={Style.whoImageContainer}>
          <img src={two} alt="" className={Style.whoImage} />
        </div>
        <div className={Style.textContainer}>
          <p className={Style.p}>
            What do you see when you open your social media accounts? It's
            mostly photos. Your friend's picture for the day, variety of memes,
            and social media posts containing loads of information. Images are
            what we see the majority of the time in our use of our phones and
            computers, and they are one of the mediums of communication we
            depend on. If you're wondering how a high-quality picture makes a
            difference compared to a low-quality image? Well, here we discuss
            the importance of high-quality photos and how you can transform your
            own by using photo-enhancing software found across the web.
          </p>
          <div className={Style.images}>
            <img alt="" src={before} className={Style.whoImage} />
            <img alt="" src={after} className={Style.whoImage} />
          </div>
          <p className={Style.p}>
            A high-definition photo is better than a low-quality one? How? Well,
            imagine you're viewing a low-quality picture, then you suddenly see
            one that is of a higher quality. Wouldnt you be attracted to the
            latter? A higher-quality photo attracts more attention and gives the
            reader a better viewing experience.
            <br />
            <br /> A good photo more upscale should be able to provide you with
            the following things:
            <br />
            <br />
            <div style={{ textDecoration: "underline", fontWeight: "bold" }}>
              1.options in photo enhancement
            </div>
            If you need a photo upscaler, we recommend that you find one that
            enlarges your photo without sacrificing quality as most photos-when
            stretched-will change their resolution automatically.
            <div style={{ textDecoration: "underline", fontWeight: "bold" }}>
              2. Budget-friendly
            </div>
            Not everything comes free, but if you do find a photo upscaler
            that's free, good for you! If not, try and look for the
            budget-friendly option while still having essential features that
            you can use.
            <div style={{ textDecoration: "underline", fontWeight: "bold" }}>
              3. Easy to use
            </div>
            UI is important to all websites. A good photo upscaleer software
            will have a simple UI where all you need to do is click and drag,
            then voila. You got yourself a high-definition photo.
          </p>
        </div>
      </div>
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <Footer />
      </div>
    </>
  );
};

export default A;
