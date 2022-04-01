import Style from "./style.module.css";
const Description = () => {
  return (
    <div className={Style.container}>
      <h1 className={Style.h1}>Image50% Enhancer</h1>
      <p className={Style.p}>
        Image50% Enhancer can adjust the brightness of the picture to improve
        overexposed and underexposed pictures. View image enhancement tools and
        examples provided by artificial intelligence here for free.
      </p>
    </div>
  );
};

export default Description;
