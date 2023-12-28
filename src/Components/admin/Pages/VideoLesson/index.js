import styles from "./VideoLesson.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function VideoLesson({ lessonData }) {
  const videoLink = lessonData?.lessonURLVideo || ""; // Sử dụng toán tử optional chaining và mặc định cho videoLink là chuỗi rỗng nếu không tồn tại
  const LessonName = lessonData?.lessonName;

  const isValidVideoLink = (link) => {
    return (
      link &&
      typeof link === "string" &&
      (link.includes("http://") || link.includes("https://"))
    );
  };

  // Kiểm tra link video
  const isVideoValid = isValidVideoLink(videoLink);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        {isVideoValid ? (
          <iframe
            width="100%"
            height="550px"
            src={videoLink}
            title="Video Lesson"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Không có video hoặc link video không hợp lệ.</p>
        )}
        <h2>Bài: {LessonName}</h2>
      </div>
    </div>
  );
}

export default VideoLesson;
