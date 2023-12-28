import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import Image from "~/Components/Image";
import Button from "~/Components/Button";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function Card({ courseId, title, image, price, discountedPrice }) {
  const finalPrice =
    price === 0 ? "FREE" : price * (1 - discountedPrice / 100) + "VND";
  return (
    <div className={cx("wrapper")}>
      <div className={cx("product")}>
        <div className={cx("product-imgage")}>
          <Button className={cx("card-img")} to={""}>
            <Image src={images.Course1} alt={title} />
          </Button>
          <div className={cx("price")}>
            <h3>{finalPrice}</h3>
            <span>{price === 0 ? "" : price}</span>
          </div>
        </div>
        <div className={cx("product-content")}>
          <div className={cx("title-group")}>
            <h2>{title}</h2>
            <div className={cx("heart-icon")}>
              <FontAwesomeIcon icon={regularHeart} />
            </div>
          </div>
          <div className={cx("course-info")}>
            <div className={cx("info-group")}>
              <FontAwesomeIcon className={cx("icon")} icon={faBookOpen} />
              <p>12+ Lessons</p>
            </div>
            <div className={cx("course-view")}>
              <FontAwesomeIcon className={cx("icon")} icon={faClock} />
              <p>9hr 30min</p>
            </div>
          </div>
          <div className={cx("course-rating")}>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <span>4.4</span>
          </div>
          <div className={cx("btn-buy")}>
            <Button to={`/coursedetail/${courseId}`} login>
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
