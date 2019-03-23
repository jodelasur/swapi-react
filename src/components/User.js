import React from "react";
import styled from "styled-components";
import Vehicles from "./Vehicles";
import {connect} from "react-redux";
import {doFetchVehiclesUser, doToggleShowVehiclesUser} from "../actions/user";

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

function User(props) {
  const {user, columns} = props;
  const {
    url,
    name,
    height,
    mass,
    gender,
    edited,
    vehicleUrls,
    showVehicles,
    vehicles,
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
            <Button onClick={() => props.onToggleShowVehicles(url, vehicles)}>
              {showVehicles ? "Hide" : "Show"} Vehicles
            </Button>
          </Span>
        </UserSpecific>
        {showVehicles &&
        <div>
          <Vehicles vehicleUrls={vehicleUrls} vehicles={vehicles}/>
        </div>
        }
      </Wrapper>
  );
}

// TODO: Check about derived props
const showVehicles = (dispatch, url, vehicles) => {
  if (vehicles) {
    dispatch(doToggleShowVehiclesUser(url));
  } else {
    dispatch(doFetchVehiclesUser(url));
  }
};


const mapDispatchToProps = dispatch => ({
  onToggleShowVehicles: (url, vehiclesAlreadyFetched) =>
    showVehicles(dispatch, url, vehiclesAlreadyFetched),
});

export default connect(
    null,
    mapDispatchToProps
)(User);