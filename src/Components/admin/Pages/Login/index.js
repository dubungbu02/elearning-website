import classNames from "classnames/bind";
import styles from "./Login.module.scss";
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
        className={cx("login-image")}
        src={images.LoginBackgound}
        alt="Background"
      />
      <div className={cx("login-wrapper")}>
        <div className={cx("login-none")}></div>
        <div className={cx("login-form")}>
          <div className={cx("login-title")}>Log in</div>
          <input className={cx("login-input")} placeholder="usename" />
          <input
            className={cx("login-input")}
            type="password"
            placeholder="password"
          />
          <Button className={cx("login-btn")} to={"/"}>
            Login
          </Button>
          <div></div>
          <Button className={cx("login-google")}>
            <FontAwesomeIcon className={cx("google-icon")} icon={faGoogle} />
            Google
          </Button>
          <div className={cx("login-add")}>
            <span>Do you already have account?</span>
            <Button className={cx("register-btn")} to={"/register"}>
              Create account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
