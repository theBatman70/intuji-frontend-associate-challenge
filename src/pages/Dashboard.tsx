import { savingPlans } from "../data/savingPlans";
// import AnalyticsChart from "../graph";
// import { labelColors } from "../data/chart";
import { transactions } from "../data/transactions";
import Briefings from "../layout/briefings";
import BriefList from "../components/briefList";
import SavingPlanCard from "../components/savingPlanCard";
import TransactionItem from "../components/transactionItem";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <div>
          {/* <section className={styles.overviewBox}>
            <h3>Overview</h3>
            <div className="row custom-gap">
              {overviewBoxData.map((card) => (
                <div key={card.title} className={`col-md-6 ${styles.cardBox}`}>
                  <Card {...card} />
                </div>
              ))}
            </div>
          </section> */}

          {/* <section>
            <AnalyticsChart colors={labelColors} />
          </section> */}
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
