import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";
import SideBarHeader from "./SideBarHeader";
import SideBarItem from "./SideBarItem";

const cx = classNames.bind(styles);

function SideBarAdmin({ children, items = [] }) {
  console.log(items);
  const renderItems = () => {
    return items.map((item, index) => <SideBarItem key={index} data={item} />);
  };
  return (
    <div className={cx("")}>
      <SideBarHeader title="DashBoard" />
      <div className={cx("")}>{renderItems()}</div>
    </div>
  );
}

export default SideBarAdmin;
