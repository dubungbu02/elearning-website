import React from "react";
import Quiz from "~/Components/Quiz";
import styles from "./LessonTestCp.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LessonTestCp = ({ lessonId, onShowExercise }) => {
  const apiUrl = `https://localhost:7152/api/Exercises/lesson/${lessonId}`;

  const handleShowExercise = () => {
    onShowExercise();
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <h2>Bài kiểm tra {lessonId}</h2>
        <Quiz apiUrl={apiUrl} />
      </div>
    </div>
  );
};

export default LessonTestCp;
