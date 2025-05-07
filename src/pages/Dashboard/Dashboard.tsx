import { savingPlans } from "../../data/savingPlans";
import { transactions } from "../../data/transactions";
import Briefings from "../../layout/Briefings/Briefings";
import BriefBox from "../../layout/Briefings/BriefBox";
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
          <BriefBox title="Saving Plan" viewMoreLink="#">
            {savingPlans.map((plan) => (
              <SavingPlanCard key={plan.title} plan={plan} />
            ))}
          </BriefBox>
          <BriefBox title="Recent Transcations" viewMoreLink="#">
            {transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </BriefBox>
        </Briefings>
      </div>
    </>
  );
};

export default Dashboard;
