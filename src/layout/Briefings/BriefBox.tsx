import styles from "./BriefBox.module.scss";

const BriefBox: React.FC<{
  title: string;
  viewMoreLink: string;
  children: React.ReactNode;
}> = ({ title, viewMoreLink, children }) => {
  return (
    <section className={styles.briefBox} id="savingPlan">
      <header className={styles.briefHeader}>
        <h2>{title}</h2>
        <a href={viewMoreLink}>See All</a>
      </header>
      <div className={styles.briefingList}>{children}</div>
    </section>
  );
};

export default BriefBox;
