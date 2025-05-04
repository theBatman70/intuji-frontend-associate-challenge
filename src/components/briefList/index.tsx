export default function BriefList({
  title,
  viewMoreLink,
  children,
}: {
  title: string;
  viewMoreLink: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <header>
        <h3>{title}</h3>
        <a href={viewMoreLink}>See all</a>
      </header>
      <div className="briefingList">{children}</div>
    </section>
  );
}
