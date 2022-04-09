import Style from "./style.module.css";
import ph from "./ph.png";
import { useNavigate } from "react-router-dom";
const Responsive = () => {
  const navigation = useNavigate();
  return (
    <div
      className={Style.container}
      onClick={() => {
        navigation("/blog/responsive");
      }}
    >
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
