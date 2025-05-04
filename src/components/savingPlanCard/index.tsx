import { SavingPlan } from "../../@types/types";
import styles from "../../styles/components/savingPlanCard.module.scss";

const SavingPlanCard = ({ plan }: { plan: SavingPlan }) => {
  // Determine progress color based on percentage
  let progressColor = "";
  if (plan.percentage >= 70) {
    progressColor = "yellow"; // e.g., green
  } else if (plan.percentage >= 40) {
    progressColor = "green"; // e.g., yellow/orange
  } else {
    progressColor = "purple";
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
          className={` ${styles.progressValue} ${progressColor}`}
          style={{ width: `${plan.percentage}%` }}
        />
      </div>
    </article>
  );
};

export default SavingPlanCard;
