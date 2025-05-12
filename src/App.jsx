import { useShopping } from "../context/ShoppingContext";
import Carbon from "./components/Carbon/Carbon";
import Main from "./components/main/main";
import Model from "./components/ModelBackground/Model";

function App() {
  const { isOpenModel } = useShopping();
  return (
    <div style={{ position: "relative" }}>
      <Main />
      {isOpenModel && <Model />}
    </div>
  );
}

export default App;
