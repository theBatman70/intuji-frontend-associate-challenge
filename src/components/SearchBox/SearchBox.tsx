import styles from "./SearchBox.module.scss";

const SearchBox = () => {
  return (
    <form className={styles.searchBox}>
      <img src="/assets/icons/search.svg" alt="search" />
      <input
        type="text"
        placeholder="Search here..."
        className={styles.searchInput}
      />
    </form>
  );
};

export default SearchBox;
