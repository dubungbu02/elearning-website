import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "~/Components/admin/Popper/Menu";
import Image from "~/Components/Image";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import Button from "~/Components/Button";
import {
  faAppStore,
  faFacebook,
  faGooglePlay,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-4", "brand-dec")}>
            <Image className={cx("brand-logo")} src={images.Logo}></Image>
            <div className={cx("logo-content")}>
              <p>
                To find out, we've delved through the spec sheets to unearth the
                12 electric cars with the longest range, according to official
                test results or manufacturer claims. For this list, we've only
                included cars that are on sale or that are coming soon but have
                had their specifications confirmed (that means no one-off
                concepts). And this is a global list, so cars might not be
                offered in every market.
              </p>
            </div>
          </div>
          <div className={cx("col-2", "brand-app")}>
            <h2>Tải ứng dụng</h2>
            <div className={cx("app")}>
              <FontAwesomeIcon className={cx("appstore")} icon={faAppStore} />
              <FontAwesomeIcon
                className={cx("googleplay")}
                icon={faGooglePlay}
              />
            </div>
          </div>
          <div className={cx("col-2", "brand-social")}>
            <h2>Kết nối</h2>
            <div className={cx("social")}>
              <FontAwesomeIcon className={cx("app-social")} icon={faFacebook} />
              <FontAwesomeIcon className={cx("app-social")} icon={faYoutube} />
            </div>
          </div>
          <div className={cx("contact", "col-4")}>
            <h2>Liên hệ</h2>
            <div className={cx("address", "contact-inf")}>
              <FontAwesomeIcon className={cx("icon")} icon={faLocationDot} />
              <p>
                HCMC University of Industry and Trade, 140 Lê Trọng Tấn, Tây
                Thạnh, Tân Phú, Thành phố Hồ Chí Minh
              </p>
            </div>
            <div className={cx("email", "contact-inf")}>
              <FontAwesomeIcon className={cx("icon")} icon={faEnvelope} />
              <p>trinhvinhdu0209@gmail.com</p>
            </div>
            <div className={cx("phone", "contact-inf")}>
              <FontAwesomeIcon className={cx("icon")} icon={faPhone} />
              <p>0989253882</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
