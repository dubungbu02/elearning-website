import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function SideBarHeader({ title, onBack }) {
  return (
    <header className={cx("header")}>
      <h4 className={cx("header-title")}>{title}</h4>
    </header>
  );
}

export default SideBarHeader;
