import { SavingPlan } from "../../@types/types";
import styles from "./SavingPlanCard.module.scss";

const SavingPlanCard = ({ plan }: { plan: SavingPlan }) => {
  // Determine progress color based on percentage
  let progressColor = "";
  let progressBgColor = "";
  if (plan.percentage >= 70) {
    progressColor = "yellow";
    progressBgColor = "bgYellow";
  } else if (plan.percentage >= 40) {
    progressColor = "green";
    progressBgColor = "bgGreen";
  } else {
    progressColor = "purple";
    progressBgColor = "bgPurple";
  }

  return (
    <article className={styles.item}>
      <div className={styles.title}>
        <h4>{plan.title}</h4>
        <span>Target: {plan.targetDate}</span>
      </div>

      <div className={styles.amountDetails}>
        <p>
          ${plan.currentAmount}
          <span> / ${plan.targetAmount}</span>
        </p>
        <p className={progressColor}>{plan.percentage}%</p>
      </div>

      <div className={styles.progressBar}>
        <div
          className={` ${styles.progressValue} ${progressBgColor}`}
          style={{ width: `${plan.percentage}%` }}
        />
      </div>
    </article>
  );
};

export default SavingPlanCard;
