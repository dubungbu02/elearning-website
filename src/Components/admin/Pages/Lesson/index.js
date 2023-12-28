import styles from "./Lesson.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Lesson({
  lessonId,
  onSelectLesson,
  useClick,
  handleSelectLessonVideo,
}) {
  // const [saveLessonId, setLessonId] = useState(1);

  const handelLesson = () => {
    if (useClick) {
      onSelectLesson(lessonId);
      handleSelectLessonVideo();
    }
  };

  return (
    <div className={cx("wrapper")} onClick={handelLesson}>
      <div className={cx("container")}>
        <h3>Bài: {lessonId}</h3>
      </div>
    </div>
  );
}

export default Lesson;
