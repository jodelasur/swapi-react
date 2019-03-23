import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  line-height: 24px;
  white-space: nowrap;
  margin: 10px 0;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #e3e3e3;
`;

const Span = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 5px;
  width: ${props => props.width};
  text-align: center;
`;

const Vehicle = ({vehicle, columns}) => {
  const {
    name,
    model,
    manufacturer,
    vehicleClass,
  } = vehicle;

  return (
      <Div>
        <Span width={columns.name.width}>{name}</Span>
        <Span width={columns.model.width}>{model}</Span>
        <Span width={columns.manufacturer.width}>{manufacturer}</Span>
        <Span width={columns.vehicleClass.width}>{vehicleClass}</Span>
      </Div>
  );
};

export default Vehicle;