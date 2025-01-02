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
import { RouterProvider } from "react-router-dom";
import { router } from "./route.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </StrictMode>
  </Provider>
);
