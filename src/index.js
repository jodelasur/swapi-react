import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {createGlobalStyle} from 'styled-components';

const users = [{
  id: "1",
  name: "name1",
  height: "height1",
  mass: "mass1",
  gender: "gender1",
  edited: "edited1",
}, {
  id: "2",
  name: "name2",
  height: "height2",
  mass: "mass2",
  gender: "gender2",
  edited: "edited2",
}];

const GlobalStyle = createGlobalStyle`
  body {
    color: #222;
    background: #f4f4f4;
    font: 400 14px CoreSans, Arial, Sans-serif;
  }
`;

ReactDOM.render(
    <React.Fragment>
      <GlobalStyle/>
      <App users={users}/>
    </React.Fragment>,
    document.getElementById("root")
);
