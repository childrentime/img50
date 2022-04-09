import { Divider } from "antd";
import Style from "./style.module.css";
import Author from "../author";
import two from "../img50.png";
import Footer from "../../../../components/Footer";

const Img50 = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.title}>
          How Images are Being Enhanced: Superpower of Img50% enhancer
        </div>
        <Divider className={Style.divider} />
        <Author />
        <div className={Style.whoImageContainer}>
          <img src={two} alt="" className={Style.whoImage} />
        </div>
        <div className={Style.textContainer}>
          <p className={Style.p}>
            People are used to thinking about machine learning as some kind of
            sorcery. Especially when it gives an awesome result "out of
            nothing". The truth is that it's not really magic but technology.
            And background work makes it not as easy as with Hermione's wand
            flick.
            <br /> When it comes to the technology driven by engineering and
            science, magic wand starts to behave not always and not entirely
            "magic" (in our case - smart and universal) to the demanding eye.
          </p>
          <p className={Style.p}>
            Having significant "memorization" and generalization ability, a
            neural network trained on hundreds of thousands of of
            high-resolution and downscaled different real-world images. It
            brings an understanding of the underlying texture and objects to the
            image upscaling process. The neural networks can "hallucinate"
            completely new pixels on the enlarged image based on the examples of
            similar objects learned during the training. Images enriched with
            new detail thus look more realistic and plausible.
          </p>
          <p className={Style.p}>
            What's under our hood? <br />
            We are a Deep Learning based photo processing product running on the
            cloud. In our upscaling process, we rely on a new powerful type of
            neural networks called GANs. It can create new realistically looking
            images out of thin air. <br />
            The same type of algorithm can be used to generate faces of people
            that never existed. <br />
            Such network “learns” what a good quality image is and applies this
            knowledge to generate upscaled versions of the images you upload.
            <br />
            However, the way it works implies the original image and the
            downloaded one to be not 100% the same. They can be slightly
            different since GAN network uses some frequent patterns to generate
            missing features. It not only makes the image more detailed and
            clear , clean and ready to download on your device.
            <br /> GAN solves the above problem and successfully
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Img50;
