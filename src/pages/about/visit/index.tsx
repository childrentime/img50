import Style from "./style.module.css";
const Visit = () => {
  return (
    <div className={Style.container}>
      <div className={Style.title}>Visit us</div>
      <div className={Style.text}>
        No.1 Textile Road, Minzu Avenue, Hongshan District, Wuhan City, Hubei
        Province
      </div>
      <div className={Style.mapContainer}>
        <div className={Style.map}>
          <div className={Style.point}>
            <div title="Australia" className={Style.tip}></div>
          </div>
          <div className={Style.point}>
            <div title="Belarus" className={Style.tip}></div>
          </div>
          <div className={`${Style.point} ${Style.pointM}`}>
            <div title="Bosnia" className={Style.tip}></div>
          </div>
          <div className={`${Style.point} ${Style.pointXL}`}>
            <div title="United States" className={Style.tip}></div>
          </div>
          <div className={`${Style.point} ${Style.pointL}`}>
            <div title="Poland" className={Style.tip}></div>
          </div>
          <div className={`${Style.point} ${Style.pointM}`}>
            <div title="Brazil" className={Style.tip}></div>
          </div>
          <div className={`${Style.point} ${Style.pointM}`}>
            <div title="Wuhan" className={Style.tip}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visit;
