import styles from "./Learning.module.scss";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoLesson from "~/Components/admin/Pages/VideoLesson";
import Chapter from "~/Components/admin/Pages/Chapter";
import ChapterTest from "~/Components/ChapterTest";
import LessonTestCp from "~/Components/LessonTestCp";

const cx = classNames.bind(styles);

function Learning() {
  const [chapters, setChapters] = useState([]);
  const { courseId } = useParams();
  const [lessonData, setLessonData] = useState([]);
  const [selectedLessonId, setSelectedLessonId] = useState(1);
  const [videoVisible, setVideoVisible] = useState(true);
  const [selectedChapterId, setSelectedChapterId] = useState(null);
  const [showLessonTest, setShowLessonTest] = useState(true);

  const handleSelectLesson = (lessonId) => {
    setSelectedLessonId(lessonId);
  };

  const handleSelectExercise = () => {
    setVideoVisible(false);
    setShowLessonTest(true);
  };
  const handleSelectLessonVideo = () => {
    setVideoVisible(true);
    setShowLessonTest(false);
  };

  const handleSelectChapter = (chapterId) => {
    setSelectedChapterId(chapterId);
  };

  useEffect(() => {
    setShowLessonTest(false);

    const fetchLessonData = async () => {
      try {
        const response = await fetch(
          `https://localhost:7152/api/Lesson/${selectedLessonId}`
        );
        const data = await response.json();
        setLessonData(data);
      } catch (error) {
        console.error("Error fetching lesson data:", error);
      }
    };

    fetchLessonData();
  }, [selectedLessonId]);

  useEffect(() => {
    fetch(`https://localhost:7152/api/Chapter/${courseId}/chapters`)
      .then((response) => response.json())
      .then((data) => setChapters(data.result))
      .catch((error) => console.error(error));
  }, [courseId]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-9", "component-container")}>
            <div className={cx("lesson_container")}>
              <div className={cx("video-container")}>
                {" "}
                {videoVisible && <VideoLesson lessonData={lessonData} />}
              </div>
              <div className={cx("quiz-container")}>
                {showLessonTest && <LessonTestCp lessonId={selectedLessonId} />}
              </div>
            </div>
          </div>
          <div className={cx("col-3", "cb_container", "component-container")}>
            <h1>Nội dung khóa học</h1>
            <ul>
              {chapters.map((chapter) => (
                <div className={cx("")} key={chapter.chapterID}>
                  <Chapter
                    chapterId={chapter.chapterID}
                    chapterName={chapter.chapterName}
                    onSelectLesson={handleSelectLesson}
                    onSelectLessonID={handleSelectLesson}
                    onSelectChapter={handleSelectChapter}
                    useClick={true}
                    isShowExercise={true}
                    handleSelectExercise={handleSelectExercise}
                    handleSelectLessonVideo={handleSelectLessonVideo}
                  />
                  <ChapterTest chapterId={chapter.chapterID} />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Learning;
