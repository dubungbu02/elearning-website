import classNames from "classnames/bind";
import styles from "./Listcourse.module.scss";
import Card from "~/Components/Card";
import React, { useState, useEffect } from "react";

const cx = classNames.bind(styles);

function ListCourse() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:7152/api/Course");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-7")}>
            <div className={cx("section-header")}>
              <div className={cx("section-sub-header")}>
                <span>What’s New</span>
                <h2>Featured Courses</h2>
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
          </div>
          <div className={cx("row")}>
            {data.map((item) => (
              <div key={item.courseID} className={cx("col-4")}>
                <Card
                  courseId={item.courseID}
                  title={item.courseName}
                  image={item.courseImageURL}
                  price={item.coursePrice}
                  discountedPrice={item.courseDisCount}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCourse;
