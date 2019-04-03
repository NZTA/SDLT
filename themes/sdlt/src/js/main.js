import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import MainApp from "./components/App/MainApp";
import BusinessOwnerApp from "./components/App/BusinessOwnerApp";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";

window.addEventListener("load", () => {
  const mainContainer = document.getElementById("main-app");
  if (mainContainer) {
    ReactDOM.render((
      <HashRouter>
        <Provider store={store}>
          <MainApp/>
        </Provider>
      </HashRouter>
    ), mainContainer);
  }

  const businessOwnerContainer = document.getElementById("business-owner-app");
  if (businessOwnerContainer) {
    ReactDOM.render((<BusinessOwnerApp/>), businessOwnerContainer);
  }
});


