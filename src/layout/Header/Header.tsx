import AccountActivityTab from "../../components/AccountActivityTab/AccountActivityTab";
import SearchBox from "../../components/SearchBox/SearchBox";
import styles from "./Header.module.scss";
import { Dispatch, SetStateAction } from "react";

const Header = ({
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
}: {
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <header className={styles.header}>
      <SearchBox />
      <div className={styles.menu}>
        <button
          className={styles.menuButton}
          onClick={() => setIsMobileSidebarOpen(true)}
        >
          <img src="/assets/icons/menu.svg" alt="Menu Button" />
        </button>
        <AccountActivityTab />
      </div>
      {isMobileSidebarOpen && (
        <div
          className="overlay"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
