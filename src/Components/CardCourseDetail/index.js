import classNames from "classnames/bind";
import styles from "./CardCourseDetail.module.scss";
import Image from "~/Components/Image";
import Button from "~/Components/Button";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function CardCourseDetail({ courseId, title, image, price, discountedPrice }) {
  const finalPrice =
    price === 0 ? "FREE" : price * (1 - discountedPrice / 100) + "VND";

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Image src={images.Course1} />
        <div className={cx("courseDetail")}>
          <div className={cx("courseTitle")}>
            <h2>{finalPrice}</h2>
            <p>
              <span className={cx("price")}>{price === 0 ? "" : price}</span>
              <span>{discountedPrice}% off</span>
            </p>
          </div>
          <Button to={`/learning/${courseId}`} login large>
            Đăng kí ngay
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardCourseDetail;
