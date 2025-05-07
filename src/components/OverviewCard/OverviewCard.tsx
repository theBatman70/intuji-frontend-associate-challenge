import { OverviewCardType } from "../../@types/types";
import { growthIconUrls } from "../../data/overview";
import { formatAmountUSD } from "../../utils/formatAmountUSD";
import styles from "./OverviewCard.module.scss";

const OverviewCard = ({ overviewCard }: { overviewCard: OverviewCardType }) => {
  const { id, title, amount, percentage, iconUrl } = overviewCard;

  let highlightCard = false;

  // Highlight the first card
  highlightCard = id === 1;
  let statusIconUrl = "";

  // Set the upgrade or downgrade status icon based on the percentage
  statusIconUrl =
    percentage > 0
      ? (statusIconUrl = growthIconUrls[id - 1])
      : (statusIconUrl = "/assets/icons/downgrade.png");

  const formattedAmount = formatAmountUSD(amount);

  return (
    <div
      className={`${styles.card} ${highlightCard ? styles.highlighted : ""}`}
    >
      <div className={styles.cardHeader}>
        <div className={styles.imgWrapper}>
          <img src={iconUrl} alt={title} />
        </div>
        <div>
          <h3>{title}</h3>
          <div className={styles.comparisionWrapper}>
            <img src={statusIconUrl} alt="export" />
            <span>{percentage} compared with last month</span>
          </div>
        </div>
      </div>
      <div className={styles.amountBox}>
        <strong>{formattedAmount}</strong>
        <div>
          {highlightCard ? (
            <img src="/assets/icons/arrow-light.svg" alt="arrow-light" />
          ) : (
            <img src="/assets/icons/arrow-dark.svg" alt="arrow-dark" />
          )}
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
