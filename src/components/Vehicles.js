import React from "react";
import styled from "styled-components";
import Vehicle from "./Vehicle";
import Header from "./Header";

const Div = styled.div`
  margin: 10px 20px 0;
  padding: 10px;
  border: 1px solid #e3e3e3;
  background: #f4f4f4;
`;

const COLUMNS = {
  name: {
    label: "Name",
    width: "25%",
  },
  model: {
    label: "Model",
    width: "25%",
  },
  manufacturer: {
    label: "Manufacturer",
    width: "25%",
  },
  vehicleClass: {
    label: "Vehicle Class",
    width: "25%",
  },
};



const Vehicles = ({vehicles}) =>
    <Div>
      <Header columns={COLUMNS}/>
      {vehicles.map(vehicle =>
        <Vehicle
          key={vehicle.url}
          vehicle={vehicle}
          columns={COLUMNS}
        />
      )}
    </Div>;

export default Vehicles;
