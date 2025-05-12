import styles from "./Confirm.module.css";
function Confirm({ children, onClick }) {
  return (
    <div onClick={onClick} className={styles.confirm}>
      {children}
    </div>
  );
}

export default Confirm;
