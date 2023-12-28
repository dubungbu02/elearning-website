import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/Components/admin/Popper";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.scss";
import Header from "./Header";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };
  return (
    <Tippy
      // visible
      trigger="click"
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("nav_menu")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            <Header title="Wellcome Anna" />
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
