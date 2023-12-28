import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import {
  faBell,
  faCircleUser,
  faComment,
  faLifeRing,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "~/Components/admin/Popper/Menu";
import Image from "~/Components/Image";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import Button from "~/Components/Button";
import { useEffect } from "react";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faCircleUser} />,
    title: "Profile",
    to: "/dashboard",
  },
  {
    icon: <FontAwesomeIcon icon={faLifeRing} />,
    title: "Help",
    to: "/students",
  },
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: "Log out",
    to: "file:///C:/F8/Dreams%20LMS.html",
    separate: true,
  },
];

function Header() {
  const currentUser = true;

  useEffect(() => {
    window.addEventListener("scroll", scrollF);
    return () => {
      window.removeEventListener("scroll", scrollF);
    };
  }, []);

  function scrollF() {
    const header = document.getElementById("head");

    if (document.documentElement.scrollTop > 80) {
      header.classList.add(cx("scrollHeader"));
    } else {
      header.classList.remove(cx("scrollHeader"));
    }
  }
  return (
    <header id="head" className={cx("header")}>
      <nav className={cx("navbar")}>
        <div className={cx("container")}>
          <div className={cx("nav-logo")}>
            <a href="/" className={cx("nav-logo-link")}>
              <Image src={images.Logo} className={cx("logo")} />
            </a>
          </div>
          <div className={cx("nav-main")}>
            <ul className={cx("nav-menu")}>
              <li className={cx("nav_submenu")}>
                <Button className={cx("btn-header")} to={"/"}>
                  Trang chủ
                </Button>
              </li>

              <li className={cx("nav_submenu")}>
                <Button className={cx("btn-header")} to={"/courses"}>
                  Khóa học
                </Button>
              </li>
              <li className={cx("nav_submenu")}>
                <Button className={cx("btn-header")} to={"/courses"}>
                  Liên hệ
                </Button>
              </li>
            </ul>
          </div>
          <div className={cx("nav-right")}>
            {currentUser ? (
              <>
                <ul className={cx("nav-list")}>
                  {/* <li className={cx("nav-item", "nav-item-user")}>
                    <div className={cx("nav_link")}>
                      <FontAwesomeIcon icon={faComment} />
                    </div>
                  </li>
                  <li className={cx("nav-item", "nav-item-user")}>
                    <Menu className={cx("nav-notify")}>
                      <div className={cx("nav_link")}>
                        <FontAwesomeIcon icon={faBell} />
                      </div>
                    </Menu>
                  </li> */}
                  <li className={cx("nav-item", "nav-item-user")}>
                    <Menu items={[MENU_ITEMS]}>
                      <div className={cx("nav_link", "nav-border")}>
                        <Image
                          className={cx("nav-avatar")}
                          src={images.avatar2}
                        />
                      </div>
                    </Menu>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul className={cx("nav-list")}>
                  <li className={cx("nav-item")}>
                    <Button register to={"/register"}>
                      Register
                    </Button>
                  </li>
                  <li className={cx("nav-item")}>
                    <Button
                      className={cx("nav-button")}
                      login
                      to={
                        "https://dreamslms.dreamstechnologies.com/html/instructor-dashboard.html?"
                      }
                    >
                      Login
                    </Button>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );

  // <Menu items={[MENU_ITEMS]}>
  //   <div className={cx("nav_link")}>
  //     <Image
  //       className={cx("nav_avatar")}
  //       src={images.avatar2}
  //       alt={"avatar"}
  //       fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
  //     />
  //   </div>
  // </Menu>
}

export default Header;
