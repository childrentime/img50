import Style from "./style.module.css";
import ph from "./ph.png";
const Responsive = () => {
  return (
    <div className={Style.container}>
      <div className={Style.top}>
        <img src={ph} alt="" className={Style.img} />
      </div>
      <div className={Style.bottom}>
        <p className={Style.p}>
          A new image enhancing technique based on overexposed and underexposed
          photos
        </p>
      </div>
    </div>
  );
};

export default Responsive;
