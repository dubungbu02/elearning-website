import styles from "./CourseDetail.module.scss";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardCourseDetail from "~/Components/CardCourseDetail";
import Chapter from "~/Components/admin/Pages/Chapter";

const cx = classNames.bind(styles);

function CourseDetail() {
  const [course, setCourse] = useState(null);
  const [chapters, setChapters] = useState([]);
  const { courseId } = useParams();

  useEffect(() => {
    fetch(`https://localhost:7152/api/Course/${courseId}`)
      .then((response) => response.json())
      .then((data) => {
        setCourse(data); // Lưu thông tin khóa học vào state
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    fetch(`https://localhost:7152/api/Chapter/${courseId}/chapters`)
      .then((response) => response.json())
      .then((data) => setChapters(data.result))
      .catch((error) => console.error(error));
  }, [courseId]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-8")}>
            <h1>Nội dung khóa học</h1>
            <ul>
              {chapters.map((chapter) => (
                <Chapter
                  key={chapter.chapterID}
                  chapterId={chapter.chapterID}
                  chapterName={chapter.chapterName}
                  useClick={false}
                />
              ))}
            </ul>
          </div>
          <div className={cx("col-4")}>
            <CardCourseDetail
              courseId={course.courseID}
              price={course.coursePrice}
              discountedPrice={course.courseDisCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CourseDetail;
