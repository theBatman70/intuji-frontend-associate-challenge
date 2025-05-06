import { savingPlans } from "../../data/savingPlans";
import { transactions } from "../../data/transactions";
import Briefings from "../../layout/Briefings/Briefings";
import BriefList from "../../layout/Briefings/BriefList";
import SavingPlanCard from "../../components/SavingPlanCard/SavingPlanCard";
import TransactionItem from "../../components/TransactionItem/TransactionItem";
import Overview from "../../features/Overview/Overview";

import "./Dashboard.module.scss";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <>
      <div className={styles.dashboardContainer}>
        <div className={styles.midBox}>
          <Overview />
        </div>
        <Briefings>
          <BriefList title="Saving Plan" viewMoreLink="#">
            {savingPlans.map((plan) => (
              <SavingPlanCard key={plan.title} plan={plan} />
            ))}
          </BriefList>
          <BriefList title="Recent Transcations" viewMoreLink="#">
            {transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </BriefList>
        </Briefings>
      </div>
    </>
  );
};

export default Dashboard;
