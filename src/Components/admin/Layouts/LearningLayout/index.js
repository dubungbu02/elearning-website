import classNames from "classnames/bind";
import styles from "./LearningLayout.module.scss";
import LearningHeader from "~/Components/admin/Layouts/components/LearningHeader";

const cx = classNames.bind(styles);
function LearningLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <LearningHeader />
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default LearningLayout;
