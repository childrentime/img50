import { useState, useRef, useEffect } from "react";
import Style from "./style.module.css";
const DragImage = (props: { url: string; urlC: string }) => {
  const { url, urlC } = props;
  const [width, setWidth] = useState(0);
  const compareRef = useRef<HTMLDivElement>(null);
  const divideRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const init = Math.round(compareRef.current!.getBoundingClientRect().left);
    compareRef.current!.onmousemove = (event: MouseEvent) => {
      setWidth(event.clientX - init);
    };
    compareRef.current!.ontouchmove = (event: TouchEvent) => {
      setWidth(event.touches[0].clientX - init);
    };
  }, []);
  return (
    <div className={Style.comparator} ref={compareRef}>
      <div
        className={Style.divider}
        style={{ left: `${width}px` }}
        ref={divideRef}
      />
      <div
        className={`${Style.before} ${Style.content}`}
        style={{ width: `${width}px` }}
      >
        <img src={urlC} alt="" />
      </div>

      <div className={`${Style.after} ${Style.content}`}>
        <img src={url} alt="" style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
};

export default DragImage;
