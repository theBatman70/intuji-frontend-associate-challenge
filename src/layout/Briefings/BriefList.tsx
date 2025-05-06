import styles from "./BriefList.module.scss";

const BriefList: React.FC<{
  title: string;
  viewMoreLink: string;
  children: React.ReactNode;
}> = ({ title, viewMoreLink, children }) => {
  return (
    <section className={styles.briefBox}>
      <header className={styles.briefHeader}>
        <h2>{title}</h2>
        <a href={viewMoreLink}>See all</a>
      </header>
      <div className={styles.briefingList}>{children}</div>
    </section>
  );
};

export default BriefList;
