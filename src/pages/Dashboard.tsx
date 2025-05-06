import { savingPlans } from "../data/savingPlans";
// import AnalyticsChart from "../graph";
// import { labelColors } from "../data/chart";
import { transactions } from "../data/transactions";
import Briefings from "../layout/Briefings/Briefings";
import BriefList from "../layout/Briefings/BriefList";
import SavingPlanCard from "../components/SavingPlanCard/SavingPlanCard";
import TransactionItem from "../components/TransactionItem/TransactionItem";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <div></div>
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
