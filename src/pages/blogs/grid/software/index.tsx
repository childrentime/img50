import { Divider } from "antd";
import Style from "./style.module.css";
import Author from "../author";
import two from "../software.png";
import Footer from "../../../../components/Footer";
import before from "./before.png";
import after from "./after.png";
import transform from "./transform.png";
import upgrade from "./upgrade.png";
const Software = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.title}>
          What software can be used to enhance pictures
        </div>
        <Divider className={Style.divider} />
        <Author />
        <div className={Style.whoImageContainer}>
          <img src={two} alt="" className={Style.whoImage} />
        </div>
        <div className={Style.textContainer}>
          <div className={Style.h1}>What Software Can Enhance Photo Fast?</div>
          <p className={Style.p}>
            <div>
              <div style={{ textDecoration: "underline", fontWeight: "bold" }}>
                1. Img50%
              </div>
              <br /> By using an AI to upscale your images, Img50% performs
              next-level enchantment to your photos with a faster, reliable, and
              safer process.
            </div>
            <br />
            <br />
            <div>
              1.1 How Does Img50% work? <br /> Step 1: Go to the official
              website of img50%: https://img50.vercel.app/.
              <br /> Step 2: Drag or Drop images to the space provided.
              <br /> Step 3: Click Start All and wait until your batch of photos
              becomes upscaled.
              <br /> Step 4: Press the Download button to preview the results on
              a new page.
              <br /> Step 5: Right-click the mouse, click “Download” to download
              the image on your desktop.
            </div>
            <br />
            <div>
              1.2 Features of Img50%
              <br /> AI Super Resolution Technology enhances your photo to the
              highest quality.
              <br /> Enhance image in batches, so you don't have to wait longer.
              Safe and secure for you to use anytime you want.
              <br /> Free for use: you don’t need to pay for the upscaling or
              downloading.
            </div>
            <br />
          </p>
          <div className={Style.images}>
            <img alt="" src={before} className={Style.whoImage} />
            <img alt="" src={after} className={Style.whoImage} />
          </div>
          <p className={Style.p}>
            <div>
              <div style={{ textDecoration: "underline", fontWeight: "bold" }}>
                2. GIMP
              </div>
              An open-source editor that supports multiple plug-ins, GIMP allows
              you to choose how you want your photos to look after manipulation
              and editing.
              <br />
              <br />
              2.1 How Does GIMP work?
              <br />
              Step 1: Go to the website and download the GIMP program first.
              <br />
              Step 2: Install the GIMP on your computer correctly.
              <br />
              <div>
                {
                  "Step 3: Once installed, open GIMP. Go to File >Open and select an image from the computer."
                }
              </div>
              <div>
                {"Step 4: Click Image > Scale Image to open a dialog box."}
              </div>
              <br />
              Step 5: Input the new value for Width and Height pixels.
              <br />
              Step 6: Select the interpolation algorithm.
              <br />
              Step 7: Apply the changes by clicking the “Scale” button.
              <br />
              <br />
              2.2 Features of
              <br />
              The open-source editor lets you manipulate your photo your way.
              <br />
              A variety of plug-ins gives more options to design and in
              operating GIMP.
              <br />
              Different elements that support logos, icons, graphic design, and
              elements are available
            </div>
          </p>
          <img alt="" src={transform} className={Style.whoImage} />
          <p className={Style.p}>
            <div>
              <div style={{ textDecoration: "underline", fontWeight: "bold" }}>
                3. Icons8
              </div>
              <br /> Through automation and AI, icons8 lets you fully customize
              your photo with numerous features that would certainly make your
              image attention-grabbing.
              <br />
              <br /> 3.1 How Does Icons8 Work?
              <br /> Step 1: Visit the Icons8’s image upscaler by clicking
              https://icons8.com/upscaler.
              <br /> Step 2: Click the “Browse” button to upload the images you
              want to upscale.
              <br /> Step 3: Wait 10 seconds for the automatic upscaling
              process.
              <br />
              Step 4: The system default is to enlarge the image by 2x. You can
              choose to zoom in 4x.
              <br /> Step 5: Preview the details and save the final results by
              clicking the “Download” button.
              <br /> PS: You may get an API Key for more customization and
              options, but it's a paid plan.
              <br />
              <br /> 3.2 Features of icons8
              <br /> Full automated AI and processes enlarge and upscale your
              photo to its highest quality.
              <br /> Different art designs are compatible with their software.
              <br /> You can create your photo design with their built-in
              creative tool.
              <br /> Free to upscale 3 images. For more upscaling requirements,
              you need to upgrade your account.
            </div>
          </p>

          <img alt="" src={upgrade} className={Style.whoImage} />
        </div>
      </div>
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <Footer />
      </div>
    </>
  );
};

export default Software;
