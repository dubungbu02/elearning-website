import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Option.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Option = ({
  onOptionSelect,
  questionId,
  selectedAnswers,
  setSelectedAnswers,
  showResult,
  questionData,
}) => {
  const [options, setOptions] = useState([]);
  const [activeOption, setActiveOption] = useState(null);

  const handleClick = (optionID) => {
    setActiveOption(optionID);
    onOptionSelect(optionID !== null);
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionId]: optionID,
    }));
  };

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7152/api/Option/question/${questionId}/options`
        );
        const data = response.data.result;
        setOptions(data);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();
  }, [questionId]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        {options.map((option) => {
          const isOptionSelected = option.optionID === activeOption;
          const isOptionCorrect = option.isCorrect;
          const isSelectedOptionCorrect =
            selectedAnswers[questionId] === option.optionID && isOptionCorrect;

          return (
            <div
              key={option.optionID}
              className={cx("option-item", {
                active: isOptionSelected,
                correct: showResult && isSelectedOptionCorrect,
                incorrect:
                  showResult && isOptionSelected && !isSelectedOptionCorrect,
                hidden: showResult && !isOptionSelected,
              })}
              onClick={() => handleClick(option.optionID)}
            >
              {option.optionText}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Option;
