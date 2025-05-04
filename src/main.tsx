import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import "./styles/global.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
