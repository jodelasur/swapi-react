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
`;

const User = ({user, columns}) => {
  const {
    name,
    height,
    mass,
    gender,
    edited,
  } = user;

  return (
      <Div>
        <Span width={columns.name.width}>{name}</Span>
        <Span width={columns.height.width}>{height}</Span>
        <Span width={columns.mass.width}>{mass}</Span>
        <Span width={columns.gender.width}>{gender}</Span>
        <Span width={columns.edited.width}>{new Date(edited).toLocaleString()}</Span>
        <Span width={columns.showVehicles.width}>Button here</Span>
      </Div>
  );
};

export default User;