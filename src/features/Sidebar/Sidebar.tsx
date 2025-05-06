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

const Sidebar = ({ menuItems, onClose }: SidebarProps) => {
  return (
    <div className={styles.sidebar}>
      <div className={`${styles.sidebarHeader}`}>
        <div className={styles.logo}>
          <img src="/assets/icons/logo.svg" alt="Logo" />
        </div>
        <div className={styles.closeIcon} onClick={onClose}>
          <img src="/assets/icons/close.svg" alt="close" />
        </div>
      </div>
      <div className={styles.sidebarMenu}>
        <ul>
          {menuItems.itemsTop?.map((item, index) => (
            <li key={index} className={styles.menuItem}>
              <a href={item.link}>
                <img src={item.icon} alt={item.label} />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.sidebarDivider}></div>
        <div className={styles.lastMenu}>
          <div>
            <ul>
              {menuItems.itemsMid?.map((item, index) => (
                <li key={index} className={styles.menuItem}>
                  <a href={item.link}>
                    <img src={item.icon} alt={item.label} />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.sidebarFooter}>
            <ul>
              {menuItems.itemsBottom?.map((item, index) => (
                <li key={index} className={styles.menuItem}>
                  <a href={item.link}>
                    <img src={item.icon} alt={item.label} />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
