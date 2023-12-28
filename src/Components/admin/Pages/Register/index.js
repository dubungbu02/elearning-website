import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import Button from "~/Components/Button";
import Image from "~/Components/Image";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);

function Login() {
  return (
    <div className={cx("wrapper")}>
      <Image
        className={cx("register-image")}
        src={images.LoginBackgound}
        alt="Background"
      />
      <div className={cx("register-wrapper")}>
        <div className={cx("register-form")}>
          <div className={cx("register-title")}>Register</div>
          <input className={cx("register-input")} placeholder="usename" />
          <input
            className={cx("register-input")}
            type="password"
            placeholder="password"
          />
          <input
            className={cx("register-input")}
            type="password"
            placeholder="confirm password"
          />
          <Button className={cx("register-btn")}>Register</Button>
          <div></div>
          <Button className={cx("register-google")}>
            <FontAwesomeIcon className={cx("google-icon")} icon={faGoogle} />
            Google
          </Button>
          <div className={cx("register-add")}>
            <span>Do you already have account?</span>
            <Button className={cx("login-btn")} to={"/login"}>
              Log in
            </Button>
          </div>
        </div>
        <div className={cx("register-none")}></div>
      </div>
    </div>
  );
}

export default Login;
