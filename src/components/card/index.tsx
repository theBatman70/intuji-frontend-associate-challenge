import styles from "../../styles/components/card.module.scss";

interface CardProps {
  title: string;
  balance: string;
  percentage: string;
  icon: string;
  exportIcon: string;
  highlightCard?: boolean;
}

const Card = ({
  title,
  balance,
  percentage,
  icon,
  exportIcon,
  highlightCard,
}: CardProps) => {
  return (
    <div className={`${styles.card} ${highlightCard ? styles.bgColor : ""} `}>
      <div className={styles.cardContainer}>
        <div className={styles.imgWrapper}>
          <img src={icon} alt={title} />
        </div>
        <div>
          <h4>{title}</h4>
          <div className={styles.compareWrapper}>
            <img src={exportIcon} alt="export" />
            <span>{percentage} compared with last month</span>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <h2>{balance}</h2>
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

export default Card;
