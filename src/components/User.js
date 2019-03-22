import React from "react";
import styled from "styled-components";
import Vehicles from "./Vehicles";

const Wrapper = styled.div`
  line-height: 24px;
  white-space: nowrap;
  margin: 10px 0;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #e3e3e3;
`;

const UserSpecific = styled.div`
  display: flex;
`;

const Span = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 5px;
  width: ${props => props.width};
  text-align: center;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #dddddd;
  background: transparent;
  color: #808080;
  cursor: pointer;
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
    <Wrapper>
      <UserSpecific>
        <Span width={columns.name.width}>{name}</Span>
        <Span width={columns.height.width}>{height}</Span>
        <Span width={columns.mass.width}>{mass}</Span>
        <Span width={columns.gender.width}>{gender}</Span>
        <Span width={columns.edited.width}>{new Date(edited).toLocaleString()}</Span>
        <Span width={columns.vehicles.width}>
          <Button>
            Show Vehicles
          </Button>
        </Span>
      </UserSpecific>
      <div>
        <Vehicles/>
      </div>
    </Wrapper>
  );
};

export default User;