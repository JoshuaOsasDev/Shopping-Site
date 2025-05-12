import { useShopping } from "../../../context/ShoppingContext";
import Carbon from "../Carbon/Carbon";
import Confirm from "../Carbon/Confirm";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart() {
  const {
    toggledItems,
    shoppingDetails,
    getItemCount,
    setIsOpenModel,
    setConfirmedCart,
    setConfirmedTotal,
  } = useShopping();

  // Calculate count: number of items where toggledItems[id] === true
  const cartCount = Object.values(toggledItems)?.filter(Boolean).length;

  const cartItem = shoppingDetails.filter((items) => toggledItems[items?.id]);

  // const handleDelete = function (id) {
  //   // console.log(id);

  //   toggleItem(id);
  // };
  const totalOrder = cartItem.reduce((total, item) => {
    return total + item.price * getItemCount(item.id);
  }, 0);

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
          <Confirm
            onClick={() => {
              setConfirmedCart(cartItem);
              setConfirmedTotal(totalOrder);
              setIsOpenModel(true);
            }}
          >
            Confirm Price
          </Confirm>
        </>
      )}
    </div>
  );
}

export default Cart;
