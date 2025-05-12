import styles from "./CartButtonClick.module.css";
import CartButton from "../CartButton/CartButton";

import { useShopping } from "../../../context/ShoppingContext";

function CartButtonClick({ id }) {
  const { getItemCount, setItemCount, toggleItem } = useShopping();
  const count = getItemCount(id);

  const handleDecrement = () => {
    if (count > 1) {
      setItemCount(id, count - 1);
    } else {
      toggleItem(id);
    }
  };

  return (
    <div className={styles.cartButtonClick}>
      <button onClick={(() => setItemCount(id, count - 1), handleDecrement)}>
        <div className={styles.iconWrapper}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="2"
            fill="none"
            viewBox="0 0 10 2"
            onClick={() => handleDecrement}
          >
            <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
          </svg>
        </div>
      </button>
      <span>{count}</span>
      <button onClick={() => setItemCount(id, count + 1)}>
        <div className={styles.iconWrapper}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path
              fill="#fff"
              d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}

export default CartButtonClick;
