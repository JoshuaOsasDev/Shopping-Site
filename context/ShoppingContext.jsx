import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const URL = "http://localhost:8000/";
const ShoppingContext = createContext();

const ShoppingProvider = function ({ children }) {
  const [shoppingDetails, setShoppingDetails] = useState([]);
  const [toggledItems, setToggledItems] = useState({});
  const [itemCounts, setItemCounts] = useState({});
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [confirmedCart, setConfirmedCart] = useState([]);
  const [confirmedTotal, setConfirmedTotal] = useState(0);

  const [isLoading, setIsloading] = useState(false);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    try {
      setIsloading(true);
      async function fetchDetails() {
        const res = await fetch(URL + "shopping");
        const data = await res.json();
        setShoppingDetails(data);
      }

      fetchDetails();
    } catch (error) {
      console.log(error.messsage);
      setErrors(error.message);
    } finally {
      setIsloading(false);
    }
  }, []);

  const toggleItem = useCallback((id) => {
    setToggledItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }, []);

  const handleDelete = useCallback(
    (id) => {
      toggleItem(id);
    },
    [toggleItem]
  );

  const removeItemCompletely = (id) => {
    setShoppingDetails((prev) => prev.filter((item) => item.id !== id));
    setToggledItems((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const getItemCount = useCallback((id) => itemCounts[id] || 1, [itemCounts]);

  const setItemCount = (id, count) => {
    setItemCounts((prev) => ({
      ...prev,
      [id]: count,
    }));
  };

  const getShoppingDetails = useCallback(() => {
    return shoppingDetails.map((details) => ({
      id: details.id,
      image: details.image.desktop,
      name: details.name,
      category: details.category,
      price: details.price,
    }));
  }, [shoppingDetails]);
  const reset = useCallback(() => {
    setItemCounts({});
    setToggledItems({});
    setIsOpenModel(null);
  }, []);
  const value = useMemo(() => {
    return {
      shoppingDetails,
      toggleItem,
      toggledItems,
      getShoppingDetails,
      getItemCount,
      setItemCount,
      handleDelete,
      removeItemCompletely,
      isLoading,
      errors,
      isOpenModel,
      setIsOpenModel,
      confirmedCart,
      setConfirmedCart,
      confirmedTotal,
      setConfirmedTotal,
      reset,
    };
  }, [
    confirmedCart,
    confirmedTotal,
    errors,
    getShoppingDetails,
    getItemCount,
    handleDelete,
    isLoading,
    isOpenModel,
    shoppingDetails,
    toggledItems,
    reset,
    toggleItem,
  ]);
  return (
    <ShoppingContext.Provider value={value}>
      {children}
    </ShoppingContext.Provider>
  );
};

const useShopping = function () {
  const context = useContext(ShoppingContext);
  return context;
};

export { ShoppingProvider, useShopping };
