import { useShopping } from "../../../context/ShoppingContext";
import styles from "./CartButton.module.css";

function CartButton({ detailsId }) {
  const { toggleItem } = useShopping();

  return (
    <div
      className={styles.cartButton}
      onClick={() => console.log(toggleItem(detailsId))}
    >
      <img
        className={styles.cartImage}
        src="assets/images/icon-add-to-cart.svg"
        alt="Add to cart"
      />
      <span>Add to cart</span>
    </div>
  );
}

export default CartButton;
