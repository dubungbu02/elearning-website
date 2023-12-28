import styles from "./LearningHeader.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "~/Components/Image";
import images from "~/assets/images";
import Button from "~/Components/Button";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const cx = classNames.bind(styles);

function LearningHeader() {
  const { courseId } = useParams();
  const [courseInfo, setCourseInfo] = useState(null);

  useEffect(() => {
    // Gọi API để lấy thông tin khóa học đã được chọn dựa trên id
    axios
      .get(`https://localhost:7152/api/Course/${courseId}`)
      .then((response) => {
        const selectedCourse = response.data;
        setCourseInfo(selectedCourse);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [courseId]);

  if (!courseInfo) {
    return <h1>Loading...</h1>;
  }

  return (
    <header className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className="header-back">
          <Button className={cx("header-icon")} to={"/courses"}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
        </div>
        <div className={cx("header-logo")}>
          <a href="/" className={cx("")}>
            <Image className={cx("logo")} src={images.Logo} />
          </a>
        </div>
        <div className={cx("header-title")}>{courseInfo.courseName}</div>
      </div>
    </header>
  );
}

export default LearningHeader;
