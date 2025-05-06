import AccountActivityTab from "../../components/AccountActivityTab/AccountActivityTab";
import SearchBox from "../../components/SearchBox/SearchBox";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <SearchBox />

      <AccountActivityTab />
    </header>
  );
};

export default Header;
