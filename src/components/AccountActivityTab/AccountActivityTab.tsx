import styles from "./AccountActivityTab.module.scss";

const AccountActivityTab = () => {
  return (
    <section className={styles.accountActivityTab}>
      <button className={styles.btn}>
        <img src="/assets/icons/bell.svg" alt="Notification Bell Button" />
      </button>
      <button className={styles.btn}>
        <img src="/assets/icons/sms.svg" alt="Chat Button" />
      </button>
      <figure className={styles.userPhotoContainer}>
        <img
          src="/assets/icons/logo.svg"
          alt="User Photo"
          className={styles.userPhoto}
        />
      </figure>
      <button className={styles.userBtn}>
        <p className={styles.userName}>Mirie Kiritani</p>
        <img
          src="/assets/icons/arrow-down.svg"
          alt="Drop Down Arrow"
          className={styles.dropDown}
        />
      </button>
    </section>
  );
};

export default AccountActivityTab;
