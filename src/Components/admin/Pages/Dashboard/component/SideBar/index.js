import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";
import Button from "~/Components/Button";
import Image from "~/Components/Image";
import images from "~/assets/images";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faBook, faHouse, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBarAdmin from "./SideBarAdmin";

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faHouse} />,
    title: "My Dashboard",
    to: "/",
  },
  {
    icon: <FontAwesomeIcon icon={faBook} />,
    title: "Courses",
    to: "/students",
  },
  {
    icon: <FontAwesomeIcon icon={faUsers} />,
    title: "Student",
    to: "/",
    separate: true,
  },
];

const cx = classNames.bind(styles);

function SideBar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <SideBarAdmin items={[MENU_ITEMS]} />
      </div>
    </div>
  );
}

export default SideBar;
