import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reduser from "./components/Reducer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import App from "./App";

// create store
const store = createStore(reduser);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
