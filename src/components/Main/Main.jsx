import CartContainer from "../CartContainer/CartContainer";
import ShoppingDetails from "../ShoppingDetails/ShoppingDetails";
import styles from "./Main.module.css";
function Main() {
  return (
    <div className={styles.main}>
      <ShoppingDetails />
      <CartContainer />
    </div>
  );
}

export default Main;
