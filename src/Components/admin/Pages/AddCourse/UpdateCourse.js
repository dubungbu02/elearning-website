import React from "react";
import classNames from "classnames/bind";
import styles from "./AddCourse.module.scss";
import Button from "~/Components/Button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const cx = classNames.bind(styles);

const UpdateCourse = ({
  selectedCourse,
  handleChange,
  handleDescriptionChange,
  handleSave,
  handleCancel,
  description,
}) => {
  return (
    <div className={cx("modal")}>
      <h2>Edit Course</h2>
      <form>
        <label>Course Name:</label>
        <input
          type="text"
          name="courseName"
          value={selectedCourse.courseName}
          onChange={handleChange}
        />

        <label>Course Description:</label>
        <ReactQuill
          className={cx("react-quill")}
          value={description}
          onChange={handleDescriptionChange}
        />

        <label>Course Type:</label>
        <select
          name="courseType"
          value={selectedCourse.courseType}
          onChange={handleChange}
        >
          <option value="0">Free</option>
          <option value="1">Pay</option>
        </select>

        <label>Course Price:</label>
        <input
          type="number"
          name="coursePrice"
          value={
            selectedCourse.courseType === "0" ? 0 : selectedCourse.coursePrice
          }
          onChange={handleChange}
        />

        <label>Course Discount:</label>
        <input
          type="number"
          name="courseDiscount"
          value={selectedCourse.courseDiscount}
          onChange={handleChange}
        />

        {/* Các nút Submit và Cancel */}
        <div className={cx("form-btn")}>
          <Button type="button" onClick={handleSave}>
            Save
          </Button>
          <Button type="button" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCourse;
