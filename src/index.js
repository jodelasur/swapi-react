import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {createGlobalStyle} from 'styled-components';
import {Provider} from "react-redux";
import store from "./store";

const GlobalStyle = createGlobalStyle`
  body {
    color: #222;
    background: #f4f4f4;
    font: 400 14px CoreSans, Arial, Sans-serif;
  }
`;

ReactDOM.render(
    <Provider store={store}>
      <GlobalStyle/>
      <App/>
    </Provider>,
    document.getElementById("root")
);
