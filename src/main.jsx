import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ShoppingProvider } from "../context/ShoppingContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShoppingProvider>
      <App />
    </ShoppingProvider>
  </StrictMode>
);
