import Button from "~/Components/Button";
import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";

const cx = classNames.bind(styles);

function SideBarItem({ data }) {
  return data.map((item, index) => (
    <div key={index} className={cx("sideBar-item")}>
      <Button
        className={cx("dashboard-item", { separate: item.separate })}
        key={index}
        leftIcon={item.icon}
        to={item.to}
      >
        <span> {item.title}</span>
      </Button>
    </div>
  ));
}

export default SideBarItem;
