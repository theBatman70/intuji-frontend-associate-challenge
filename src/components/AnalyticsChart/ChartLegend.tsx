import { Label } from "../../@types/chart";
import styles from "../../features/Analytics/Analytics.module.scss";

const ChartLegend = ({ labelColors }: { labelColors: Label[] }) => {
  return (
    <div className={styles.legend}>
      {labelColors.map((label, index) => (
        <div key={index} className={styles.labelItem}>
          <div
            className={styles.labelColor}
            style={{ backgroundColor: label.color }}
          ></div>
          {label.labelName}
        </div>
      ))}

      <button className={styles.timeframeSwitch}>
        Weekly
        <img src="/assets/icons/chevron-down.svg" alt="chevron-down" />
      </button>
    </div>
  );
};

export default ChartLegend;
