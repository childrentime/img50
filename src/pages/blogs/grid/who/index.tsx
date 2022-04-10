import { Divider } from "antd";
import Style from "./style.module.css";
import Author from "../author";
import who from "../who.png";
import first from "./first.png";
import second from "./second.png";
import Footer from "../../../../components/Footer";
const Who = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.title}>WHO Uses Img50% Enhancer?</div>
        <Divider className={Style.divider} />
        <Author time="11 APR 2022 · 9 MIN READ" />
        <div className={Style.whoImageContainer}>
          <img src={who} alt="" className={Style.whoImage} />
        </div>
        <div className={Style.textContainer}>
          <p className={Style.p}>
            To know the purpose of what you're doing is a MUST to stay on track.
            <br />
            We regularly ask our customers for the feedbacks. This health check
            is an absolute must for every product. <br />
            We are sincerely curious: HOW do people use our product, WHY do they
            appreciate img50% Enhancer and WHAT we can improve.
            <br /> And we want to share with you some stories.
          </p>
          <p className={Style.p}>
            User portraits:
            <br /> Kaven, I'm a designer. My trouble is: the image results
            output by the smart platform are very single. So I want: Multiple
            output options; The platform to learn and communicate; Preview
            output styles. Therefore, Img50% enhancer can help me choose a
            suitable output image, and there is also a comment area, where I can
            directly feedback and interact on the web page, and the reply and
            improvement are more timely, which helps to prolong the vitality of
            the product.
          </p>
          <img src={first} alt="" className={Style.whoImage} />
          <p className={Style.p}>
            Lilian Fernando, I am a female student. I don't think there is a
            personalization platform out there at the moment, I know more about
            image processing. Therefore, the Blog platform equipped by Img50%
            enhancer will provide several articles in the fairy control room,
            which is convenient for Lilian Fernando to learn. ...
          </p>
          <img src={second} alt="" className={Style.whoImage} />
          <p className={Style.p}>
            Why Img Enhancer is important for you? <br />
            Charley: I use it to export bad photos to normal brightness, and I
            love the platform and the examples it provides. <br />
            Steven: I think your service is wonderful! It makes it easy for
            people to save improved pictures so that their visual strength is
            preserved. I do like the fact that you can improve photos, and I
            have to say that I was pretty blown away by the results I've seen.{" "}
            <br />
            Iris: The quality of the program I use is cumbersome to download and
            the size is limited, so img50% enhancer is almost a life saver,
            especially since I prefer open source platforms. I like this blog
            the most! ! <br />
            We are extremely pleased to have such customers. <br />
            Want to share your story? Drop us here: Qi.Zhang7@mail.bcu.ac.uk
          </p>
        </div>
      </div>
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <Footer />
      </div>
    </>
  );
};

export default Who;
