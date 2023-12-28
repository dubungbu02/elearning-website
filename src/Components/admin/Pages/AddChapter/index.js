import classNames from "classnames/bind";
import styles from "./AddChapter.module.scss";
import Button from "~/Components/Button";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AddChapter() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenLesson, setIsModalOpenLesson] = useState(false);
  const [chapterName, setChapterName] = useState("");
  const [lessons, setLessons] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [lessonToUpdate, setLessonToUpdate] = useState({});
  const [newLesson, setNewLesson] = useState({
    lessonName: "",
    lessonContent: "",
    lessonURLVideo: "",
    lessonDecription: "",
  });

  const handleOpenEditModal = (lesson) => {
    setLessonToUpdate(lesson);
    setIsEditModalOpen(true);
  };
  const handleSaveUpdatedLesson = () => {
    const updatedLesson = { ...lessonToUpdate };

    // Gửi yêu cầu cập nhật bài học lên API
    fetch(`https://localhost:7152/api/Lesson/${updatedLesson.lessonID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedLesson),
    })
      .then((response) => response.json())
      .then((data) => {
        // Xử lý kết quả trả về từ API
        console.log(data);
        // Đóng modal chỉnh sửa
        setIsEditModalOpen(false);
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error(error);
      });
  };

  const handleDeleteLesson = (lessonID) => {
    // Gọi API để xóa bài học với lessonID tương ứng
    axios
      .delete(`https://localhost:7152/api/Lesson/${lessonID}`)
      .then((response) => {
        // Xử lý response từ API (nếu cần)
        console.log("Bài học đã được xóa thành công");
        // Cập nhật danh sách bài học sau khi xóa
        const updatedLessons = lessons.filter(
          (lesson) => lesson.lessonID !== lessonID
        );
        setLessons(updatedLessons);
      })
      .catch((error) => {
        // Xử lý lỗi (nếu có)
        console.error("Lỗi xóa bài học:", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewLesson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleQuillChange = (value) => {
    setNewLesson((prevLesson) => ({
      ...prevLesson,
      lessonContent: value,
    }));
  };

  const handleQuillDecriptionChange = (value) => {
    setNewLesson((prevLesson) => ({
      ...prevLesson,
      lessonDecription: value,
    }));
  };

  const openModalLesson = () => {
    setIsModalOpenLesson(true);
  };

  const closeModalLesson = () => {
    setIsModalOpenLesson(false);
    setNewLesson({
      lessonName: "",
      lessonContent: "",
      lessonURLVideo: "",
      lessonDecription: "",
    });
  };
  const addLesson = async (chapterID) => {
    const lessonData = {
      ...newLesson,
      chapterID: chapterID,
    };
    try {
      const response = await axios.post(
        "https://localhost:7152/api/Lesson",
        lessonData
      );

      if (response.status === 201) {
        const data = response.data;
        setLessons([...lessons, data]);
        closeModalLesson();
      } else {
        console.log("Thêm bài học không thành công.");
      }
    } catch (error) {
      console.error("Lỗi khi thêm bài học:", error);
    }
  };

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        if (selectedChapter) {
          const response = await axios.get(
            `https://localhost:7152/api/Lesson/${selectedChapter}/lessons`
          );
          const data = response.data.result;
          setLessons(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchLessons();
  }, [selectedChapter]);

  const handleChapterSelect = (chapterID) => {
    if (chapterID === selectedChapter) {
      setSelectedChapter("");
    } else {
      setSelectedChapter(chapterID);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const addChapter = () => {
    const newChapter = {
      chapterID: 0,
      chapterName: chapterName,
      courseID: selectedCourse,
    };

    axios
      .post("https://localhost:7152/api/Chapter", newChapter)
      .then((response) => {
        setChapters([...chapters, response.data]);
        setIsModalOpen(false);
        setChapterName("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("https://localhost:7152/api/Course")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (selectedCourse) {
      axios
        .get(`https://localhost:7152/api/Chapter/${selectedCourse}/chapters`)
        .then((response) => {
          setChapters(response.data.result);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setChapters([]);
    }
  }, [selectedCourse]);

  const handleCourseSelect = (selectedOption) => {
    console.log(selectedOption);
    setSelectedCourse(selectedOption);
  };

  const handleCourseChange = (e) => {
    handleCourseSelect(e.target.value);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("section")}>
          <h2>Chọn khóa học</h2>
          <select
            className={cx("select")}
            value={selectedCourse || ""}
            onChange={handleCourseChange}
          >
            <option value="">-- Chọn khóa học --</option>
            {courses.map((course) => (
              <option key={course.courseID} value={course.courseID}>
                {course.courseName}
              </option>
            ))}
          </select>
        </div>

        {isModalOpen && (
          <div className={cx("modal")}>
            <div className={cx("modal-content")}>
              <h2>Thêm chương</h2>
              <input
                type="text"
                placeholder="Nhập tên chương"
                value={chapterName}
                onChange={(e) => setChapterName(e.target.value)}
              />
              <Button onClick={() => setIsModalOpen(false)}>Đóng</Button>
              <Button primary onClick={addChapter}>
                Thêm
              </Button>
            </div>
          </div>
        )}

        {selectedCourse && (
          <div className={cx("section")}>
            <h2>Danh sách chương</h2>
            <Button primary onClick={openModal}>
              Thêm chương
            </Button>
            {chapters.map((chapter) => (
              <div key={chapter.chapterID} className={cx("chapter-item")}>
                <div>
                  <div className={cx("chapter-gr")}>
                    <div
                      className={cx("chapter-name")}
                      onClick={() => handleChapterSelect(chapter.chapterID)}
                    >
                      Chương: {chapter.chapterName}
                    </div>
                    <Button primary onClick={openModalLesson}>
                      Thêm bài học
                    </Button>
                  </div>
                </div>
                {selectedChapter === chapter.chapterID && (
                  <div className={cx("lesson-list")}>
                    {lessons.map((lesson) => (
                      <div key={lesson.lessonID} className={cx("lesson-item")}>
                        <h2>
                          Bài{lesson.lessonID}: {lesson.lessonName}
                        </h2>
                        <div className={cx("btn-edit-lesson")}>
                          <Button onClick={handleOpenEditModal}>
                            <FontAwesomeIcon
                              className={cx("btn-icon")}
                              icon={faPenToSquare}
                            />
                          </Button>
                          <Button
                            onClick={() => handleDeleteLesson(lesson.lessonID)}
                          >
                            <FontAwesomeIcon
                              className={cx("btn-icon")}
                              icon={faTrashCan}
                            />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {isEditModalOpen && (
          <div className={cx("edit-modal")}>
            <h2>Cập nhật bài học</h2>
            <div>
              <h3>Tên bài học</h3>
              <input
                className={cx("edit-input")}
                type="text"
                value={lessonToUpdate.lessonName}
                onChange={(e) => {
                  const updatedLesson = {
                    ...lessonToUpdate,
                    lessonName: e.target.value,
                  };
                  setLessonToUpdate(updatedLesson);
                }}
              />
            </div>
            <div>
              <h3>Nội dung bài học</h3>
              <ReactQuill
                className={cx("edit-input")}
                type="text"
                value={lessonToUpdate.lessonContent}
                onChange={(e) => {
                  const updatedLesson = {
                    ...lessonToUpdate,
                    lessonContent: e.target.value,
                  };
                  setLessonToUpdate(updatedLesson);
                }}
              />
            </div>
            <div>
              <h3>URL Video bài học</h3>
              <input
                className={cx("edit-input")}
                type="text"
                value={lessonToUpdate.lessonURLVideo}
                onChange={(e) => {
                  const updatedLesson = {
                    ...lessonToUpdate,
                    lessonURLVideo: e.target.value,
                  };
                  setLessonToUpdate(updatedLesson);
                }}
              />
            </div>
            <div>
              <h3>Mô tả bài học</h3>
              <ReactQuill
                className={cx("edit-input")}
                type="text"
                value={lessonToUpdate.lessonDecription}
                onChange={(e) => {
                  const updatedLesson = {
                    ...lessonToUpdate,
                    lessonDecription: e.target.value,
                  };
                  setLessonToUpdate(updatedLesson);
                }}
              />
            </div>
            <div>
              <Button
                primary
                className={cx("save-button")}
                onClick={handleSaveUpdatedLesson}
              >
                Lưu
              </Button>
              <Button
                className={cx("cancel-button")}
                onClick={() => setIsEditModalOpen(false)}
              >
                Hủy
              </Button>
            </div>
          </div>
        )}
        {isModalOpenLesson && (
          <div
            className={cx("modal", "modal-lesson")}
            closeModal={closeModalLesson}
          >
            <div className={cx("modal-lesson-content")}>
              <h2>Thêm bài học</h2>
              <form>
                <label>
                  Tên bài học:
                  <input
                    type="text"
                    name="lessonName"
                    value={newLesson.lessonName}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Nội dung bài học:
                  <ReactQuill
                    className={cx("text-ReactQuill")}
                    name="lessonContent"
                    value={newLesson.lessonContent}
                    onChange={handleQuillChange}
                  />
                </label>
                <label>
                  URL video:
                  <input
                    type="text"
                    name="lessonURLVideo"
                    value={newLesson.lessonURLVideo}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Mô tả bài học:
                  <ReactQuill
                    className={cx("text-ReactQuill")}
                    name="lessonDecription"
                    value={newLesson.lessonDecription}
                    onChange={handleQuillDecriptionChange}
                  />
                </label>
                <div className={cx("btn-gr")}>
                  <Button
                    primary
                    type="submit"
                    className={cx("modal-button-submit")}
                    onClick={() => addLesson(selectedChapter)}
                  >
                    Thêm
                  </Button>
                  <Button
                    primary
                    type="button"
                    className={cx("modal-button-cancel")}
                    onClick={closeModalLesson}
                  >
                    Hủy
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddChapter;
