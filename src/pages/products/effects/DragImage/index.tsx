import { useState, useRef, useEffect } from "react";
import Style from "./style.module.css";
const DragImage = (props: { url: string; urlC: string }) => {
  const { url, urlC } = props;
  const [width, setWidth] = useState(0);
  const [max, setMax] = useState(0);
  const compareRef = useRef<HTMLDivElement>(null);
  const divideRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const init = Math.round(compareRef.current!.getBoundingClientRect().left);
    const width = compareRef.current!.getBoundingClientRect().width;
    compareRef.current!.onmousemove = (event: MouseEvent) => {
      setWidth(event.pageX - init);
    };
    compareRef.current!.ontouchmove = (event: TouchEvent) => {
      const v = event.touches[0].pageX - init;
      if (v > width) {
        setWidth(width);
      } else {
        setWidth(v);
      }
    };
    setMax(width);
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
        <img src={urlC} alt="" style={{ width: `${max}px` }} />
      </div>

      <div className={`${Style.after} ${Style.content}`}>
        <img src={url} alt="" style={{ width: `${max}px` }} />
      </div>
    </div>
  );
};

export default DragImage;
