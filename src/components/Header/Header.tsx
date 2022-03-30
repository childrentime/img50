import { Image } from "antd";
import Style from "./style.module.css";
import logo from "../../assets/images/logo.png";
import menu from "./menu.svg";
import fork from "./fork.svg";
import Menu from "./menu";
const Header = (props: {
  visible: boolean;
  setVisibe: (visible: boolean) => void;
}) => {
  const { visible, setVisibe } = props;
  return (
    <>
      <div className={Style.header}>
        <div className={Style.center}>
          <div className={Style.logo}>
            <Image src={logo} alt="logo" width={100} preview={false} />
          </div>
        </div>
        <div className={Style.center}>
          <div
            className={Style.mobile}
            style={visible ? { display: "none" } : {}}
          >
            <Image
              src={menu}
              alt="menu"
              width={40}
              preview={false}
              onClick={() => setVisibe(true)}
            />
          </div>
          <div style={!visible ? { display: "none" } : {}}>
            <Image
              src={fork}
              alt="fork"
              width={30}
              preview={false}
              onClick={() => setVisibe(false)}
            />
          </div>
          <div className={`${Style.nav} ${Style.pc}`}>
            <Menu />
          </div>
        </div>
      </div>
      <div className={Style.mobile}>
        <div className={Style.menu} style={!visible ? { display: "none" } : {}}>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Header;
