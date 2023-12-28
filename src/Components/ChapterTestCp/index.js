import React from "react";
import Quiz from "~/Components/Quiz";

const ChapterTest = ({ chapterId }) => {
  const apiUrl = `https://localhost:7152/api/Tests/chapter/1${chapterId}`;

  return (
    <div>
      <h2>Chapter Test</h2>
      <Quiz apiUrl={apiUrl} />
    </div>
  );
};

export default ChapterTest;
