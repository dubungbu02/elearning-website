import classNames from "classnames/bind";
import styles from "./skill.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faEarth,
  faMedal,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Image from "~/Components/Image";
import images from "~/assets/images";

const cx = classNames.bind(styles);
function Skill() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-7")}>
            <div className={cx("section-header")}>
              <div className={cx("section-sub-header")}>
                <span>What’s New</span>
                <h2>Master the skills to drive your career</h2>
              </div>
            </div>
            <div className={cx("section-text")}>
              <p>
                Get certified, master modern tech skills, and level up your
                career — whether you’re starting out or a seasoned pro. 95% of
                eLearning learners report our hands-on content directly helped
                their careers.
              </p>
            </div>
            <div className={cx("section-group")}>
              <div className={cx("row")}>
                <div className={cx("col-6")}>
                  <div className={cx("table-item")}>
                    <div className={cx("table-item-info")}>
                      <div className={cx("table-icon")}>
                        <FontAwesomeIcon icon={faBook} />
                      </div>
                      <p>Stay motivated with engaging instructors</p>
                    </div>
                  </div>
                </div>
                <div className={cx("col-6")}>
                  <div className={cx("table-item")}>
                    <div className={cx("table-item-info")}>
                      <div className={cx("table-icon")}>
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                      <p>Keep up with in the latest in cloud</p>
                    </div>
                  </div>
                </div>
                <div className={cx("col-6")}>
                  <div className={cx("table-item")}>
                    <div className={cx("table-item-info")}>
                      <div className={cx("table-icon")}>
                        <FontAwesomeIcon icon={faEarth} />
                      </div>
                      <p>Get certified with 100+ certification courses</p>
                    </div>
                  </div>
                </div>
                <div className={cx("col-6")}>
                  <div className={cx("table-item")}>
                    <div className={cx("table-item-info")}>
                      <div className={cx("table-icon")}>
                        <FontAwesomeIcon icon={faMedal} />
                      </div>
                      <p>Build skills your way, from labs to courses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("col-5")}>
            <div className={cx("section-image")}>
              <Image src={images.HomeImage2}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
