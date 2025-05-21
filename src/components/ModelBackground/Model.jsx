import { cloneElement, createContext, useContext, useState } from "react";
import Confirm from "../Carbon/Confirm";
import styles from "./Model.module.css";

const ModelContext = createContext();
function Model({ children }) {
  const [isOpen, setIsOpen] = useState("");
  const Open = setIsOpen;
  const Close = () => setIsOpen("");

  return (
    <ModelContext.Provider value={{ isOpen, Open, Close }}>
      {children}
    </ModelContext.Provider>
  );
}

function Header({ children, opens, onClick }) {
  const { Open } = useContext(ModelContext);

  return (
    <div>
      {cloneElement(children, {
        onClick: () => {
          if (onClick) onClick();
          Open(opens);
        },
      })}
    </div>
  );
}

function Window({ children, name }) {
  const { isOpen, Close } = useContext(ModelContext);
  if (isOpen !== name) return null;
  return (
    <div className={styles.confirm} onClick={() => Close()}>
      <div
        className={styles.confirmBackground}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

(Model.Header = Header), (Model.Window = Window);

export default Model;
