import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "~/Components/Image";
import images from "~/assets/images";
import Skill from "./Skill";
import ListCourse from "./Liscourse";
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <Image className={cx("background")} src={images.BackgoundHome2} />
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-7")}>
            <div className={cx("home-slide")}>
              <div className={cx("home-slide-text")}>
                <h5>The Leader in Online Learning</h5>
                <h1>Engaging & Accessible Online Courses For All</h1>
                <p>Own your future learning new skills online</p>
              </div>
              <div className={cx("home-trust-user")}>
                <p>
                  Trusted by over 15K Users
                  <br />
                  worldwide since 2023
                </p>
                <div className={cx("home-trust-rating")}>
                  <div className={cx("rate-heart")}>
                    <h2>
                      <span>0</span>+
                    </h2>
                  </div>
                  <div className={cx("rating")}>
                    <h2>4.4</h2>
                    <FontAwesomeIcon className={cx("filled")} icon={faStar} />
                    <FontAwesomeIcon className={cx("filled")} icon={faStar} />
                    <FontAwesomeIcon className={cx("filled")} icon={faStar} />
                    <FontAwesomeIcon className={cx("filled")} icon={faStar} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("col-5")}>
            <div className={cx("girl-slide")}>
              <Image src={images.HomeImage}></Image>
            </div>
          </div>
        </div>
      </div>
      <ListCourse />
      <Skill />
    </div>
  );
}

export default Home;
