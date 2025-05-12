import styles from "./Carbon.module.css";
function Carbon() {
  return (
    <div className={styles.carbon}>
      <img
        className={styles.carbonImg}
        src="./assets/images/icon-carbon-neutral.svg"
      />
      <p>
        This is a <b>carbon-neutral</b> delivery
      </p>
    </div>
  );
}

export default Carbon;
