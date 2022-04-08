import { Divider } from "antd";
import Style from "./style.module.css";
import Author from "../author";
import two from "../vs.png";

const VS = () => {
  return (
    <div className={Style.container}>
      <div className={Style.title}>
        Which is the Best Image Enhancer: Img50% vs. Icons8 vs. Gimp
      </div>
      <Divider className={Style.divider} />
      <Author />
      <div className={Style.whoImageContainer}>
        <img src={two} alt="" className={Style.whoImage} />
      </div>
      <p className={Style.p}>
        1. Support platform: GIMP As stated before, GIMP has multiple plug-ins
        that you can use to customize your photo. This shows that they allow
        freedom and variety to make your image unique, making GIMP an excellent
        support platform for artists and hobbyists. 2. Easy to Access: Img50%
        Imgupscaler has a simple UI, with no downloads needed, and a batch
        feature where you can upscale batches of photos immediately. Also, once
        you go to their website, the upscaling button is already visible on the
        top of their page. And the website is responsive, you can use it quickly
        from multiple devices. 3. Price: Img50% & GIMP These photo enhancing
        software are both free to download and use. No more, no less. Icons8
        requires you to pay extra for every picture after your 3rd one, which
        may become a nuisance. 4. Image upscaling numbers: G
      </p>
    </div>
  );
};

export default VS;
