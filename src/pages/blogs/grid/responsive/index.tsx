import { Divider } from "antd";
import Style from "./style.module.css";
import Author from "../author";
import two from "../ph.png";
import Footer from "../../../../components/Footer";
import { Link } from "react-router-dom";

const Responsive = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.title}>
          A New Image Enhancing Technique Based on Overexposed and Underexposed
          Photos
        </div>
        <Divider className={Style.divider} />
        <Author time="12 APR 2022 · 5 MIN READ" />
        <div className={Style.whoImageContainer}>
          <img src={two} alt="" className={Style.whoImage} />
        </div>
        <div className={Style.textContainer}>
          <div className={Style.h1}>
            A New Image Enhancing Technique Based on Overexposed and
            Underexposed Photos
          </div>
          <p className={Style.p}>
            Have you ever taken a great photo only to find it was overexposed or
            too dark to use online?
            <br /> The picture enhancer allows you to modify and download your
            photographs with only a few clicks. So you can put your pictures to
            work without sacrificing quality.
            <br /> So, yeah! We will be looking into the image upscaling and
            enhancing concept in this blog.
          </p>
          <div className={Style.h1}>Image Enhancing – A Sneak Peek</div>
          <p className={Style.p}>
            When it was dark, I hurriedly took a set of pictures, but found that
            many of the pictures were too dark, and my heart was distressed.{" "}
            <br />
            All of a sudden the photo is all bright and retains a lot of detail,
            how is that possible?
            <br /> Enhancement involves transforming a poorly exposed picture to
            what it would look like under normal conditions. Nothing is more
            important than photo attractiveness in an age when modern
            communications are at the center of communication and modern
            society. <br />
            The new standard and how we portray ourselves in the virtual
            environment is to post photographs online and on social sites. The
            demand is to enhance your images now that intelligent mobile and web
            technologies are more accessible than ever. It's nearly unthinkable
            these days to share a photo without some manipulation or filter
            added!
          </p>
          <div className={Style.h1}>
            What Exactly does Image-enhancing Mean?
          </div>
          <p className={Style.p}>
            Using app likes <Link to="/">img50</Link>, you can enhance your
            image in various ways. For example, you may change your shot's
            lighting and color characteristics using the most popular photo
            editing software.
            <br /> Using these essential tools, you may modify the contrast,
            clarity, brightness, and vibrancy. In addition, other more complex
            tools, including picture filters, effects, and editing, can improve
            your image.
            <br /> Updating a photo can differ from a primary crop and shadow
            correction to a complicated makeover employing cutting-edge
            retouching tools and effects, depending on your source photo and
            your final aim.
          </p>
          <div className={Style.h1}>Need to Upscale & Enhance the Images?</div>
          <p className={Style.p}>
            You can use UpScalePicsfor for upscaling and enhancing the image.
            Our technology employs cutting-edge artificial intelligence, also
            called super-resolution, to improve photographs.
            <br /> By the way, we're now concentrating on two things. First,
            they are the text and eyeballs, easily recognized by the human eye.
            We securely keep your uploaded photographs so you may review your
            history and download the images again.
          </p>
        </div>
      </div>
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <Footer />
      </div>
    </>
  );
};

export default Responsive;
