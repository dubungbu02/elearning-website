import React, { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question";
import Options from "./Options";
import styles from "./Quiz.module.scss";
import classNames from "classnames/bind";
import Button from "~/Components/Button";

const cx = classNames.bind(styles);

const Quiz = ({ apiUrl }) => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitActive, setIsSubmitActive] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (isActive) => {
    setIsSubmitActive(isActive);
  };

  const questionData = questions;

  const questionId = questionData.map((question) => question.questionID);

  useEffect(() => {
    // Gọi API để lấy thông tin về câu hỏi dựa trên URL API được truyền từ props
    axios.get(apiUrl).then((response) => {
      setQuestions(response.data);
    });
  }, [apiUrl]);

  const handleSubmit = () => {
    let newScore = 0;
    for (let i = 0; i < questionData.length; i++) {
      const question = questionData[i];
      const selectedAnswer = selectedAnswers[question.questionID];
      if (selectedAnswer === question.correctAnswer) {
        newScore++;
      }
    }
    setScore(newScore);
    setShowResult(true);
  };

  return (
    <div className={cx("wrapper")}>
      <Question questions={questionData} />
      <Options
        onOptionSelect={handleOptionSelect}
        questionId={questionId}
        selectedAnswers={selectedAnswers}
        setSelectedAnswers={setSelectedAnswers}
        showResult={showResult}
        questionData={questionData}
      />
      <div className={cx("submit-btn")}>
        <Button login disabled={!isSubmitActive} onClick={handleSubmit}>
          Nộp
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
