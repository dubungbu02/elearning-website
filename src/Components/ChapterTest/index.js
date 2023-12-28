import React, { useState, useEffect } from "react";
import axios from "axios";
import Quiz from "~/Components/Quiz";
import classNames from "classnames/bind";
import styles from "./ChapterTest.module.scss";

const cx = classNames.bind(styles);

const ChapterTest = ({ chapterId }) => {
  const [chapterTests, setChapterTests] = useState([]);

  useEffect(() => {
    // Gọi API để lấy thông tin về các bài kiểm tra dựa trên chapterID
    axios
      .get(`https://localhost:7152/api/Tests/chapter/${chapterId}`)
      .then((response) => {
        setChapterTests(response.data);
      });
  }, [chapterId]);

  if (chapterTests.length === 0) {
    return null; // Trả về null để ẩn component
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        {chapterTests.map((test) => (
          <div key={test.testID}>
            <p>Kiểm tra chương: {test.chapterID}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterTest;
