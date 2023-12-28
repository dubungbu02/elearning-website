import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
import CardProfile from "./component/CardProfile";
import SideBar from "./component/SideBar";

const cx = classNames.bind(styles);

function Dashboard() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-3")}>
            <CardProfile />
            <SideBar />
          </div>
          <div className={cx("col-9")}></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
