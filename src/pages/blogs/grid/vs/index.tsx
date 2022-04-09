import { Divider } from "antd";
import Style from "./style.module.css";
import Author from "../author";
import two from "../vs.png";
import Footer from "../../../../components/Footer";

const VS = () => {
  return (
    <>
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
          <div style={{ textDecoration: "underline", fontWeight: "bold" }}>
            1. Support platform:
          </div>
          GIMP As stated before, GIMP has multiple plug-ins that you can use to
          customize your photo. This shows that they allow freedom and variety
          to make your image unique, making GIMP an excellent support platform
          for artists and hobbyists.
        </p>
        <p className={Style.p}>
          <div style={{ textDecoration: "underline", fontWeight: "bold" }}>
            2. Easy to Access:
          </div>
          Img50% Imgupscaler has a simple UI, with no downloads needed, and a
          batch feature where you can upscale batches of photos immediately.
          Also, once you go to their website, the upscaling button is already
          visible on the top of their page. And the website is responsive, you
          can use it quickly from multiple devices.
        </p>
        <p className={Style.p}>
          <div style={{ textDecoration: "underline", fontWeight: "bold" }}>
            3. Price:
          </div>
          Img50% & GIMP These photo enhancing software are both free to download
          and use. No more, no less. Icons8 requires you to pay extra for every
          picture after your 3rd one, which may become a nuisance.
        </p>
        <p className={Style.p}>
          <div style={{ textDecoration: "underline", fontWeight: "bold" }}>
            4. Image upscaling numbers:
          </div>
          GIMP We picked GIMP because of the freedom it gives to users when
          editing their photos. There's no limit when it comes to upscaling size
          and numbers.
        </p>
        <p className={Style.p}>
          <div style={{ textDecoration: "underline", fontWeight: "bold" }}>
            5. Free account permissions:
          </div>
          GIMP & Img50% icons8 only lets you upscale up to 3 images for free;
          you need to pay additional for future pictures. GIMP & Imgupscaler are
          free to use. You can upscale up to 10 images at once in imgupscaler
          with the free account. And GIMP has no limitations for the number of
          photo upscaling.
        </p>
        <p className={Style.p}>
          <div style={{ textDecoration: "underline", fontWeight: "bold" }}>
            6. Uploading file types & downloading file types:
          </div>
          ALL All three software supports both file types while accepting pretty
          large photos up to 10MB.
        </p>
        <p className={Style.p}>
          <div style={{ textDecoration: "underline", fontWeight: "bold" }}>
            7. Speed ​​of processing:
          </div>
          Icons8 Icons8 supports both JPEG and PNG file types with a maximum of
          5MB per batch. Compared to Imgupscaler and GIMP, Icons8 is faster to
          produce the results of your photo enhancement.
        </p>
        <p className={Style.p}>
          <div style={{ textDecoration: "underline", fontWeight: "bold" }}>
            8. Quality of the generated image:
          </div>
          Img50% Just from our website and examples, you can see the difference
          before and after photo manipulation. The rest of the software has a
          limited number of times or needs to download programs, so we think
          img50% is more suitable for processing pictures.
        </p>
        <p className={Style.p}>
          <div style={{ textDecoration: "underline", fontWeight: "bold" }}>
            9. UI interface and layout for users:
          </div>
          Img50% In addition to the quick
        </p>
        <p className={Style.p}>
          Conclusion What we have here are our recommendations for photo
          upscalers on the web. Ultimately, your choice will depend on your
          personal preferences. There are open-source editors, like GIMP, that
          are open to advanced users and graphic design-focused upscalers that
          focus on logos, icons, photo quality, and more.
        </p>
        <p className={Style.p}>
          However, if you need fast editing, manipulation, and enhancement, we
          recommend Imgupscaler because, well, out of the three, it's the most
          simple and effective photo enlarger software.
        </p>
      </div>
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <Footer />
      </div>
    </>
  );
};

export default VS;
