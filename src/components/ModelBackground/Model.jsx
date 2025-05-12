import { useShopping } from "../../../context/ShoppingContext";
import Confirm from "../Carbon/Confirm";
import styles from "./Model.module.css";

function Model() {
  const { confirmedCart, confirmedTotal, getItemCount, reset } = useShopping();
  console.log(confirmedCart, "cart", confirmedTotal);
  return (
    <div className={styles.confirm}>
      <div className={styles.confirmBackground}>
        <img src="./assets/images/icon-order-confirmed.svg" alt="Confirmed" />
        <h1>Order Confirmed</h1>
        <p className={styles.firstP}>We hope you enjoy your food!</p>

        <div className={styles.orderedProducts}>
          {confirmedCart.map((item) => (
            <div className={styles.productOrderedSummary} key={item.id}>
              <img
                className={styles.summaryImg}
                src={item.image.desktop} // Assuming you have image path in each item
                alt={item.name}
              />
              <div>
                <p className={styles.nameOrderedProduct}>{item.name}</p>
                <div>
                  <span className={styles.pickedAmount}>
                    {getItemCount(item.id)}x
                  </span>
                  <span className={styles.pickedPrice}>
                    @ ${item.price.toFixed(2)}
                  </span>
                </div>
              </div>
              <p className={styles.total}>
                ${(item.price * getItemCount(item.id)).toFixed(2)}
              </p>
            </div>
          ))}
          <hr />
          <div className={styles.orderTotal}>
            <p>Order Total</p>
            <p>${confirmedTotal.toFixed(2)}</p>
          </div>
        </div>

        <Confirm onClick={() => reset()}>Start new Order</Confirm>
      </div>
    </div>
  );
}

export default Model;
