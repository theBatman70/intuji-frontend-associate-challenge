import { Transaction } from "../../@types/types";
import styles from "../../styles/components/transactions.module.scss";

export default function TransactionItem({
  transaction,
}: {
  transaction: Transaction;
}) {
  return (
    <article className={styles.item}>
      <div className={styles.labelBox}>
        <div className={styles.transactionIcon}>
          <img src="/assets/icons/logo.svg" alt="gallery" />
        </div>
        <div className={styles.titleBox}>
          <h2>{transaction.name}</h2>
          <span>{transaction.date}</span>
        </div>
      </div>
      <div className={styles.amountBox}>
        <p>${transaction.amount}</p>
        <span className={styles.transactionStatus}>{transaction.status}</span>
      </div>
    </article>
  );
}
