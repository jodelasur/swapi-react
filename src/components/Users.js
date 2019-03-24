import React from "react";
import User from "./User";
import styled from "styled-components";
import {getNextUrl, getUsers} from "../selectors/user";
import {connect} from "react-redux";
import {doFetchUsers} from "../actions/user";
import Header from "./Header"

const Div = styled.div`
  margin: 20px 0;
`;

const COLUMNS = {
  name: {
    label: "Name",
    width: "30%",
  },
  height: {
    label: "Height",
    width: "10%",
  },
  mass: {
    label: "Mass",
    width: "10%",
  },
  gender: {
    label: "Gender",
    width: "10%",
  },
  edited: {
    label: "Edited",
    width: "20%",
  },
  vehicles: {
    label: "Vehicles",
    width: "20%",
  }
};

const Users = ({users, next}) => (
    <Div>
      <Header columns={COLUMNS}/>
      {users.map(user =>
          <User
              key={user.url}
              user={user}
              columns={COLUMNS}
          />
      )}
    </Div>
);

const mapStateToProps = state => ({
  users: getUsers(state),
  next: getNextUrl(state),
});

const mapDispatchToProps = dispatch => ({
  onFetchUsers: query => dispatch(doFetchUsers(query)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);