import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Question.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Question({ questions }) {
  const [questionData, setQuestionData] = useState([]);

  useEffect(() => {
    fetchQuestionData();
  }, [questions]);

  const fetchQuestionData = async () => {
    try {
      const promises = questions.map((question) => {
        return axios.get(
          `https://localhost:7152/api/Question/${question.questionID}`
        );
      });

      const responses = await Promise.all(promises);
      const questionData = responses.map((response) => response.data);
      setQuestionData(questionData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {questionData.map((question, index) => (
        <div key={index}>
          <p>Câu hỏi: {question.questionText}</p>
        </div>
      ))}
    </div>
  );
}

export default Question;
