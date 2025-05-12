import styles from "./Choices.module.css";
import CartButton from "../CartButton/CartButton";
import CartButtonClick from "../CartButton/CartButtonClick";

import { useShopping } from "../../../context/ShoppingContext";
import Spinner from "../Spinner/Spinner";
import { memo, useMemo } from "react";
const Choices = memo(function Choices() {
  const { toggledItems, getShoppingDetails, isLoading } = useShopping();
  // console.log(getItemCount, "toogle");

  const items = useMemo(() => getShoppingDetails(), [getShoppingDetails]);

  if (isLoading) return <Spinner />;
  return (
    <>
      <h1>Desserts</h1>
      {/* {isLoading && <Spinner />} */}
      <div className={styles.choices}>
        {items.map((item) => (
          <div className={styles.menuOption} key={item.id}>
            <img
              className={toggledItems[item.id] ? styles.imgBorder : ""}
              src={item.image}
              alt="images"
            />
            {toggledItems[item.id] ? (
              <CartButtonClick id={item.id} />
            ) : (
              <CartButton detailsId={item.id} />
            )}
            <p className={styles.category}>{item.category}</p>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.price}>${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </>
  );
});

export default Choices;
