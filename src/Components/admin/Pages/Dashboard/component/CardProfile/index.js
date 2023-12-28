import classNames from "classnames/bind";
import styles from "./CardProfile.module.scss";
import Button from "~/Components/Button";
import Image from "~/Components/Image";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function CardProfile(usename, role) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("profile-bg")}>
          <div className={cx("profie-avatar-gr")}>
            <Image className={cx("profile-avatar")} src={images.avatar2} />
          </div>
        </div>
        <div className={cx("profile-group")}>
          <h4 className={cx("profile-name")}>Trinh Vinh Du</h4>
          <p>Admin</p>
          <Button primary to={"/addcourse"} className={cx("go-new-course")}>
            Create new course
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardProfile;
