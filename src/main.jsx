// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Other libraries
import { Provider } from "react-redux";
import store from "./redux/store.js";

// Components
import App from "./App.jsx";

// Styles
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
