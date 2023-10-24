import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGear,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("nav_header")}>
        <div className={cx("brand_logo")}>
          <div className={cx("logo")}>
            <img src={images.Logo} alt="Logo" />
          </div>
          <div className={cx("brand_title")}>
            <img src={images.brand_name} alt="Brand Name" />
          </div>
        </div>
        <div className={cx("nav_controll")}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className={cx("header_content")}>
        <nav className={cx("navbar")}>
          <div className={cx("navbar_header")}>
            <div className={cx("header_left")}>Student</div>
            <div>
              <ul className={cx("header_right")}>
                <li className={cx("nav_item")}>
                  <button className={cx("nav_link")}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </li>
                <li className={cx("nav_item")}>
                  <button className={cx("nav_link")}>
                    <FontAwesomeIcon icon={faBell} />
                  </button>
                </li>
                <li className={cx("nav_item")}>
                  <button className={cx("nav_link")}>
                    <FontAwesomeIcon icon={faGear} />
                  </button>
                </li>
                <li className={cx("nav_item")}>
                  <div className={cx("nav_link")}>
                    <img
                      className={cx("nav_avatar")}
                      src={images.avatar2}
                      alt={"avatar"}
                    ></img>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
