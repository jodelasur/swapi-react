import React from "react";
import Users from "./Users";
import styled from "styled-components";

const Div = styled.div`
  margin: 20px;
`;

const App = ({users}) =>
    <Div>
      <Users users={users}/>
    </Div>;

export default App;