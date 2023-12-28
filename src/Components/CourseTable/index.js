import React from "react";
import classNames from "classnames/bind";
import styles from "./CourseTable.module.scss";
import Button from "../Button";

const cx = classNames.bind(styles);

function CourseTable({ courses, handleUpdate, handleDelete, isLoading }) {
  return (
    <div className={cx("course-table")}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Tên khóa học</th>
              <th>Loại</th>
              <th>Giá</th>
              <th>Giảm giá</th>
              <th>Chỉnh sửa</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.courseID}>
                <td>{course.courseName}</td>
                <td>{course.courseType === 0 ? "Free" : "Pay"}</td>
                <td>{course.coursePrice}</td>
                <td>{course.courseDiscount}</td>
                <td>
                  <Button primary onClick={() => handleUpdate(course.courseID)}>
                    Sửa
                  </Button>
                </td>
                <td>
                  <Button primary onClick={() => handleDelete(course.courseID)}>
                    Xóa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CourseTable;
