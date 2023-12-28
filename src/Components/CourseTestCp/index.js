import React from "react";
import Quiz from "~/Components/Quiz";

const CourseTest = ({ courseId }) => {
  const apiUrl = `https://localhost:7152/api/Questions/course/${courseId}`;

  return (
    <div>
      <h2>Course Test</h2>
      <Quiz apiUrl={apiUrl} />
    </div>
  );
};

export default CourseTest;
