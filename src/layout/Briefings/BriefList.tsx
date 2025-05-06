const BriefList: React.FC<{
  title: string;
  viewMoreLink: string;
  children: React.ReactNode;
}> = ({ title, viewMoreLink, children }) => {
  return (
    <section>
      <header>
        <h3>{title}</h3>
        <a href={viewMoreLink}>See all</a>
      </header>
      <div className="briefingList">{children}</div>
    </section>
  );
};

export default BriefList;
