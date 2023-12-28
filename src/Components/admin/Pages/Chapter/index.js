import classNames from "classnames/bind";
import styles from "./Chapter.module.scss";
import { useState, useEffect } from "react";
import Lesson from "~/Components/admin/Pages/Lesson";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Exercise from "~/Components/Exercise";

const cx = classNames.bind(styles);

function Chapter({
  chapterId,
  chapterName,
  onSelectLesson,
  onSelectLessonID,
  useClick,
  useClickEx,
  isShowExercise,
  onSelectChapter,
  onSelectExercise,
  handleSelectExercise,
  handleSelectLessonVideo,
}) {
  const [chapterLessons, setChapterLessons] = useState([]);
  const [showChapter, setShowChapter] = useState(false);

  const toggleChapter = () => {
    setShowChapter(!showChapter);
  };

  const handleSelectChapter = () => {
    onSelectChapter(chapterId);
  };

  useEffect(() => {
    if (chapterId) {
      fetch(`https://localhost:7152/api/Lesson/${chapterId}/lessons`)
        .then((response) => response.json())
        .then((data) => setChapterLessons(data.result))
        .catch((error) => console.error(error));
    }
  }, [chapterId]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("chapter")} onClick={toggleChapter}>
          <h4>
            Chương {chapterId}: {chapterName}
          </h4>
        </div>
        <div
          className={cx("lesson-container", { "chapter-active": showChapter })}
        >
          {chapterLessons.map((lesson) => (
            <div key={lesson.lessonID} className={cx("")}>
              <Lesson
                lessonId={lesson.lessonID}
                onSelectLesson={onSelectLesson}
                useClick={useClick}
                handleSelectLessonVideo={handleSelectLessonVideo}
              />
              <Exercise
                lessonId={lesson.lessonID}
                isShowExercise={isShowExercise}
                onSelectLessonID={onSelectLessonID}
                useClickEx={true}
                handleSelectExercise={handleSelectExercise}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chapter;
