import classNames from "classnames/bind";
import styles from "./AddCourse.module.scss";
import Button from "~/Components/Button";
import CourseTable from "~/Components/CourseTable";
import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdateCourse from "./UpdateCourse";

const cx = classNames.bind(styles);

function AddCourse() {
  const [courses, setCourses] = useState([]);
  const [description, setDescription] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isTableLoading, setIsTableLoading] = useState(false);
  const [isAddingCourse, setIsAddingCourse] = useState(false);
  const [newCourse, setNewCourse] = useState({
    courseID: 0,
    courseName: "",
    courseImageURL: "",
    courseType: 0,
    coursePrice: 0,
    courseDiscount: 0,
  });

  const handleAddCourse = () => {
    setIsAddingCourse(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCourse((prevNewCourse) => ({
      ...prevNewCourse,
      [name]: value,
    }));
  };

  const handleSaveCourse = () => {
    axios
      .post("https://localhost:7152/api/Course", newCourse)
      .then((response) => {
        console.log("Added new course");
        const addedCourse = {
          ...response.data,
          key: response.data.courseID,
        };

        const updatedCourses = [...courses, addedCourse];
        setCourses(updatedCourses);
        setIsAddingCourse(false);
        setNewCourse({
          courseID: 0,
          courseName: "",
          courseImageURL: "",
          courseType: "",
          coursePrice: 0,
          courseDiscount: 0,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // Gọi API và lấy dữ liệu
    axios
      .get("https://localhost:7152/api/Course")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleUpdate = (courseID) => {
    // Tìm khóa học được chọn từ danh sách courses
    const courseToUpdate = courses.find(
      (course) => course.courseID === courseID
    );
    setSelectedCourse(courseToUpdate);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedCourse((prevSelectedCourse) => ({
      ...prevSelectedCourse,
      [name]: value,
    }));
  };
  const handleSave = () => {
    // Gọi API update khóa học
    setIsTableLoading(false);

    // Tạo một bản sao của selectedCourse để thay đổi giá trị
    const updatedSelectedCourse = { ...selectedCourse };

    // Kiểm tra nếu courseType là "Free", gán giá trị 0 cho coursePrice và courseDiscount
    if (selectedCourse.courseType === "0") {
      updatedSelectedCourse.coursePrice = 0;
      updatedSelectedCourse.courseDiscount = 0;
    }

    axios
      .put(
        `https://localhost:7152/api/Course/${updatedSelectedCourse.courseID}`,
        updatedSelectedCourse
      )
      .then((response) => {
        console.log(`Updated course with ID ${updatedSelectedCourse.courseID}`);
        // Cập nhật lại danh sách khóa học sau khi update thành công
        const updatedCourses = courses.map((course) => {
          if (course.courseID === updatedSelectedCourse.courseID) {
            return updatedSelectedCourse;
          }
          return course;
        });
        setCourses(updatedCourses);
        setSelectedCourse(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancel = () => {
    setSelectedCourse(null);
  };
  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleDelete = (courseID) => {
    confirmDelete(courseID);
  };

  const confirmDelete = (courseID) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      axios
        .delete(`https://localhost:7152/api/Course/${courseID}`)
        .then((response) => {
          console.log(`Deleted course with ID ${courseID}`);
          const updatedCourses = courses.filter(
            (course) => course.courseID !== courseID
          );
          setCourses(updatedCourses);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("row", "headList")}>
          <h2>Thêm khóa học mới</h2>
          <div className="add-btn">
            <Button primary onClick={handleAddCourse}>
              Thêm khóa học
            </Button>
            <Button
              className={cx("btn-add-chapter")}
              primary
              to={"/addchapter"}
            >
              Thêm chương học
            </Button>
          </div>
        </div>
        <div className={cx("row")}>
          <div className={cx("col-3")}></div>
          <div className={cx("col-9")}>
            <CourseTable
              courses={courses}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              isLoading={isTableLoading}
            />
            {isAddingCourse && (
              <div className={cx("popup")}>
                <div className={cx("popup-content")}>
                  <h2>Thêm khóa học mới</h2>
                  <input
                    type="text"
                    name="courseName"
                    value={newCourse.courseName}
                    onChange={handleInputChange}
                    placeholder="Course Name"
                  />
                  <input
                    type="text"
                    name="courseImageURL"
                    value={newCourse.courseImageURL}
                    onChange={handleInputChange}
                    placeholder="Course Image URL"
                  />
                  <select
                    value={newCourse.courseType}
                    onChange={(e) => {
                      setNewCourse({
                        ...newCourse,
                        courseType: e.target.value,
                      });
                    }}
                  >
                    <option value="0">Free</option>
                    <option value="1">Pay</option>
                  </select>
                  <input
                    type="number"
                    name="coursePrice"
                    value={newCourse.coursePrice}
                    onChange={handleInputChange}
                    placeholder="Course Price"
                  />
                  <input
                    type="number"
                    name="courseDiscount"
                    value={newCourse.courseDiscount}
                    onChange={handleInputChange}
                    placeholder="Course Discount"
                  />
                  {/* Thêm các input khác tương ứng với các trường dữ liệu khác */}
                  <button onClick={handleSaveCourse}>Lưu</button>
                  <button onClick={() => setIsAddingCourse(false)}>Hủy</button>
                </div>
              </div>
            )}
            {/* ... */}
            {selectedCourse && (
              <UpdateCourse
                selectedCourse={selectedCourse}
                handleChange={handleChange}
                handleDescriptionChange={handleDescriptionChange}
                handleSave={handleSave}
                handleCancel={handleCancel}
                description={description}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
