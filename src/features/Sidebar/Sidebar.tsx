import { NavLink } from "react-router-dom";
import { sidebarNavItems } from "../../data/sidebarItems";
import styles from "./Sidebar.module.scss";

interface MenuItem {
  label: string;
  icon: string;
  link: string;
}
interface SidebarProps {
  menuItems: {
    itemsTop?: MenuItem[];
    itemsMid?: MenuItem[];
    itemsBottom?: MenuItem[];
  };
  onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  return (
    <div className={styles.sidebar}>
      <div className={`${styles.sidebarHeader}`}>
        <div className={styles.logoWrap}>
          <img src="/assets/icons/logo.svg" alt="Logo" />
        </div>
        <div className={styles.closeIcon} onClick={onClose}>
          <img src="/assets/icons/close.svg" alt="close" />
        </div>
      </div>
      <nav className={styles.nav}>
        {sidebarNavItems.itemsTop?.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) =>
              isActive
                ? `${styles.navButton} ${styles.active}`
                : styles.navButton
            }
          >
            <img src={item.icon} alt={item.label} />
            <span className={styles.buttonName}>{item.label}</span>
          </NavLink>
        ))}

        <div className={styles.sidebarDivider}></div>
        <div className={styles.bottomMenu}>
          <div>
            {sidebarNavItems.itemsMid?.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navButton} ${styles.active}`
                    : styles.navButton
                }
              >
                <img src={item.icon} alt={item.label} />
                <span className={styles.buttonName}>{item.label}</span>
              </NavLink>
            ))}
          </div>
          <div className={styles.sidebarFooter}>
            {sidebarNavItems.itemsBottom?.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navButton} ${styles.active}`
                    : styles.navButton
                }
              >
                <img src={item.icon} alt={item.label} />
                <span className={styles.buttonName}>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
