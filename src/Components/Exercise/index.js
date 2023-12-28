import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Exercise.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Exercise({
  lessonId,
  isShowExercise,
  useClickEx,
  onSelectLessonID,
  handleSelectExercise,
}) {
  const [exercises, setExercises] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isExerciseAvailable, setIsExerciseAvailable] = useState(false); // Thêm biến boolean để kiểm soát việc hiển thị

  const handelLessonID = () => {
    if (useClickEx) {
      onSelectLessonID(lessonId);
      handleSelectExercise();
    }
  };

  useEffect(() => {
    if (isShowExercise) {
      // Gọi API để lấy danh sách bài tập dựa trên lessonId từ bảng Exercise
      axios
        .get(`https://localhost:7152/api/Exercises/lesson/${lessonId}`)
        .then((response) => {
          setExercises(response.data);
          setIsLoading(false);
          setIsExerciseAvailable(response.data.length > 0); // Kiểm tra xem có bài tập hay không
        });
    }
  }, [lessonId, isShowExercise]);

  useEffect(() => {
    if (exercises.length > 0) {
      // Gọi API để lấy thông tin chi tiết về câu hỏi từ bảng Question dựa trên questionID từ bảng Exercise
      const questionIds = exercises.map((exercise) => exercise.questionID);
      axios
        .get(`https://localhost:7152/api/Question/${questionIds}`)
        .then((response) => {
          const questionData = response.data;
          // Kết hợp thông tin về bài tập và câu hỏi
          const combinedData = exercises.map((exercise) => {
            let questionContent = "";
            if (Array.isArray(questionData)) {
              const question = questionData.find(
                (question) => question.questionID === exercise.questionID
              );
              if (question) {
                questionContent = question.questionText;
              }
            } else if (
              questionData &&
              questionData.questionID === exercise.questionID
            ) {
              questionContent = questionData.questionText;
            }
            return {
              ...exercise,
              questionContent,
            };
          });
          setExercises(combinedData);
        });
    }
  }, [exercises]);

  if (!isShowExercise || isLoading || !isExerciseAvailable) {
    // Kiểm tra biến isExerciseAvailable để hiển thị hoặc ẩn component
    return null;
  }

  return (
    <div className={cx("wrapper")} onClick={handelLessonID}>
      <div className="container">
        {exercises.map((exercise) => (
          <div key={exercise.exerciseID}>
            <h3>{exercise.questionContent}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exercise;
