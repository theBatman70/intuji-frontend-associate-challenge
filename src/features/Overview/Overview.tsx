import OverviewCard from "../../components/OverviewCard/OverviewCard";
import { overviewBoxData } from "../../data/overview.ts";

const Overview = () => {
  return (
    <section>
      <header>
        <h2>Overview</h2>
      </header>
      <div className="overviewGallery">
        {overviewBoxData.map((card) => (
          <OverviewCard overviewCard={card} />
        ))}
      </div>
    </section>
  );
};

export default Overview;
