import React from "react";
import Users from "./Users";
import styled from "styled-components";
import Search from "./Search";

const Div = styled.div`
  margin: 20px;
`;

const App = () =>
    <Div>
      <Search/>
      <Users/>
    </Div>;

export default App;