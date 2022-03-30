import Style from "./style.module.css";
import icn1 from "./icn-ftr-1b.svg";
import icn2 from "./icn-ftr-2b.svg";
import icn3 from "./icn-ftr-3b.svg";
const Wrapper = () => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.container}>
        <div className={Style.element}>
          <div className={Style.icon}>
            <img className={Style.lazyLoaded} alt="" src={icn1} />
          </div>
          <div className={Style.text}>
            <h3 className={Style.h3}>Pick your tools </h3>
            <p className={Style.p}>
              We'll help you build the right tool and output the right image.
            </p>
          </div>
        </div>
        <div className={Style.element}>
          <div className={Style.icon}>
            <img className={Style.lazyLoaded} alt="" src={icn2} />
          </div>
          <div className={Style.text}>
            <h3 className={Style.h3}>Diverse Blog</h3>
            <p className={Style.p}>
              Focus on the field of image enhancement to provide you with the
              latest information
            </p>
          </div>
        </div>
        <div className={Style.element}>
          <div className={Style.icon}>
            <img className={Style.lazyLoaded} alt="" src={icn3} />
          </div>
          <div className={Style.text}>
            <h3 className={Style.h3}>We've got your back </h3>
            <p className={Style.p}>
              We'll be here round - the - clock to support you with any
              questions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
