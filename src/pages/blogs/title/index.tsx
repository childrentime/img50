import Style from "./style.module.css";
import search from "./search.svg";
import close from "./close.svg";
import { useRef, useState } from "react";
const Title = () => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className={Style.titleWrapper}>
      <h1
        className={Style.title}
        style={
          !open
            ? { transform: "translateX(0%)" }
            : { transform: "translateX(-30%)" }
        }
      >
        Image50% Blog
      </h1>
      <div className={Style.searchContainer}>
        <div className={Style.searchForm}>
          <div className={Style.col11}>
            <div className={Style.search}>
              <input
                className={Style.searchInput}
                ref={inputRef}
                // style={{ width: "100%", opacity: "1" }}
              />
            </div>
          </div>
          <div className={Style.col1}>
            <div
              className={Style.open}
              onClick={() => {
                setOpen(true);
                inputRef.current!.style.animationName = `${Style.inputin}`;
              }}
              style={open ? { display: "none" } : { display: "unset" }}
            >
              <img
                alt=""
                src={search}
                className={Style.icon}
                width={30}
                height={30}
              />
            </div>
            <div
              className={Style.close}
              onClick={() => {
                setOpen(false);
                inputRef.current!.style.animationName = "";
              }}
            >
              <img
                alt=""
                src={close}
                className={Style.icon}
                style={!open ? { display: "none" } : { display: "unset" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
