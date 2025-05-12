import { useShopping } from "../../../context/ShoppingContext";
import styles from "./Cart.module.css";
function CartItem({ item }) {
  const { getItemCount, handleDelete } = useShopping();
  return (
    <div>
      <div className={styles.cartPick}>
        <div>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.cartP}>
            <span className={styles.amount}>{getItemCount(item.id)}x</span>
            <span className={styles.price}>@${item.price}</span>
            <span className={styles.totalPrice}>
              @${item.price * getItemCount(item.id)}
            </span>
          </p>
        </div>
        <button onClick={() => handleDelete(item.id)}>&times;</button>
      </div>
      <hr className={styles.cartLine} />
    </div>
  );
}

export default CartItem;
