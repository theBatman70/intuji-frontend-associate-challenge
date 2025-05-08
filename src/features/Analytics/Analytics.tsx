import styles from "./Analytics.module.scss";
import AnalyticsChart from "../../components/AnalyticsChart/AnalyticsChart";
import { labelColors } from "../../data/chart";
import ChartLegend from "../../components/AnalyticsChart/ChartLegend";

const Analytics = () => {
  return (
    <section className={styles.analyticsContainer}>
      <div className={styles.titleBox}>
        <h3>Analytics</h3>
        <ChartLegend labelColors={labelColors} />
        {/* <Legend /> */}
      </div>
      <AnalyticsChart dataLabels={labelColors} />
    </section>
  );
};

export default Analytics;
