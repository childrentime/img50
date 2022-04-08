import Style from "./style.module.css";
import who from "./who.png";
import png2022 from "./2022.png";
import tools from "./tools.png";
import a from "./a.png";
import dev from "./dev.png";
import img50 from "./img50.png";
import situation from "./situation.png";
import vs from "./vs.png";
import software from "./software.png";
import { useNavigate } from "react-router-dom";
const Grid = () => {
  const navigation = useNavigate();
  return (
    <div className={Style.container}>
      <div
        className={Style.row}
        onClick={() => {
          navigation("/blog/who");
        }}
      >
        <div className={Style.card}>
          <div className={Style.imageWrapper}>
            <img
              src={who}
              alt=""
              className={Style.img}
              width={255}
              height={170}
            />
          </div>
          <div className={Style.details}>
            <time className={Style.date}>April 10 , 2022</time>
            <div className={Style.detail}>WHO Uses img50% Enhancer?</div>
          </div>
        </div>
      </div>
      <div className={Style.row}>
        <div className={Style.card}>
          <div className={Style.imageWrapper}>
            <img
              src={png2022}
              alt=""
              className={Style.img}
              width={255}
              height={170}
            />
          </div>
          <div className={Style.details}>
            <time className={Style.date}>April 10 , 2022</time>
            <div className={Style.detail}>What is the Img50% Platform?</div>
          </div>
        </div>
      </div>
      <div className={Style.row}>
        <div className={Style.card}>
          <div className={Style.imageWrapper}>
            <img
              src={tools}
              alt=""
              className={Style.img}
              width={255}
              height={170}
            />
          </div>
          <div className={Style.details}>
            <time className={Style.date}>April 10 , 2022</time>
            <div className={Style.detail}>
              Choose the right tools for web design and production
            </div>
          </div>
        </div>
      </div>
      <div className={Style.row}>
        <div className={Style.card}>
          <div className={Style.imageWrapper}>
            <img
              src={dev}
              alt=""
              className={Style.img}
              width={255}
              height={170}
            />
          </div>
          <div className={Style.details}>
            <time className={Style.date}>April 10 , 2022</time>
            <div className={Style.detail}>
              Five steps to building an image-enhanced website
            </div>
          </div>
        </div>
      </div>
      <div className={Style.row}>
        <div className={Style.card}>
          <div className={Style.imageWrapper}>
            <img
              src={img50}
              alt=""
              className={Style.img}
              width={255}
              height={170}
            />
          </div>
          <div className={Style.details}>
            <time className={Style.date}>April 10 , 2022</time>
            <div className={Style.detail}>
              How Images are Being Enhanced: Superpower of Img50% enhancer
            </div>
          </div>
        </div>
      </div>
      <div className={Style.row}>
        <div className={Style.card}>
          <div className={Style.imageWrapper}>
            <img
              src={situation}
              alt=""
              className={Style.img}
              width={255}
              height={170}
            />
          </div>
          <div className={Style.details}>
            <time className={Style.date}>April 10 , 2022</time>
            <div className={Style.detail}>
              Situation Appraisal Based on Existing Image Intelligent Processing
              Platform
            </div>
          </div>
        </div>
      </div>
      <div className={Style.row}>
        <div className={Style.card}>
          <div className={Style.imageWrapper}>
            <img
              src={vs}
              alt=""
              className={Style.img}
              width={255}
              height={170}
            />
          </div>
          <div className={Style.details}>
            <time className={Style.date}>April 10 , 2022</time>
            <div className={Style.detail}>
              Which is the Best Image Enhancer: Img50% vs. Icons8 vs. Gimp
            </div>
          </div>
        </div>
      </div>
      <div className={Style.row}>
        <div className={Style.card}>
          <div className={Style.imageWrapper}>
            <img
              src={software}
              alt=""
              className={Style.img}
              width={255}
              height={170}
            />
          </div>
          <div className={Style.details}>
            <time className={Style.date}>April 10 , 2022</time>
            <div className={Style.detail}>
              What software can be used to enhance pictures
            </div>
          </div>
        </div>
      </div>
      <div className={Style.row}>
        <div className={Style.card}>
          <div className={Style.imageWrapper}>
            <img
              src={a}
              alt=""
              className={Style.img}
              width={255}
              height={170}
            />
          </div>
          <div className={Style.details}>
            <time className={Style.date}>April 10 , 2022</time>
            <div className={Style.detail}>What Makes a Good Photo Enhancer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
