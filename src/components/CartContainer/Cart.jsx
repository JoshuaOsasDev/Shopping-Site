
import { useShopping } from "../../../context/ShoppingContext";
import Carbon from "../Carbon/Carbon";
import Confirm from "../Carbon/Confirm";
import Model from "../ModelBackground/Model";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart() {
  const {
    toggledItems,
    shoppingDetails,
    getItemCount,

    setConfirmedCart,
    setConfirmedTotal,
    confirmedCart,
    confirmedTotal,

    reset,
  } = useShopping();

  // Calculate count: number of items where toggledItems[id] === true
  const cartCount = Object.values(toggledItems)?.filter(Boolean).length;

  const cartItem = shoppingDetails.filter((items) => toggledItems[items?.id]);
  // setConfirmedCart(cartItem);

  // const handleDelete = function (id) {
  //   // console.log(id);

  //   toggleItem(id);
  // };

  const totalOrder = cartItem.reduce((total, item) => {
    return total + item.price * getItemCount(item.id);
  }, 0);

  function handleConfirm() {
    setConfirmedCart(cartItem);
    setConfirmedTotal(totalOrder);
    // console.log("click");
  }
  console.log(confirmedCart);

  console.log(totalOrder);
  return (
    <div className={styles.cart}>
      <h2>Your cart ({cartCount})</h2>
      {cartCount === 0 ? (
        <>
          <img
            className={styles.cartImg}
            src="assets/images/illustration-empty-cart.svg"
            alt="Empty cart"
          />
          <p>Your added items will appear here</p>
        </>
      ) : (
        <>
          {cartItem.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
          <div className={styles.totalOrder}>
            <p>Total Order</p>
            <p className={styles.inPrice}>${totalOrder.toFixed(2)}</p>
          </div>
          <Carbon />

          <Model>
            <Model.Header opens="shopping-model" onClick={handleConfirm}>
              <Confirm>Confirm Price</Confirm>
            </Model.Header>

            <Model.Window name="shopping-model">
              <img
                src="./assets/images/icon-order-confirmed.svg"
                alt="Confirmed"
              />
              <h1>Order Confirmed</h1>
              <p className={styles.firstP}>We hope you enjoy your food!</p>{" "}
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
            </Model.Window>
          </Model>
        </>
      )}
    </div>
  );
}

export default Cart;
