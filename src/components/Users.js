import React from "react";
import User from "./User";
import styled from "styled-components";
import {getUsers} from "../selectors/user";
import {connect} from "react-redux";
import {doFetchUsers} from "../actions/user";

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
  showVehicles: {
    label: "Show Vehicles",
    width: "20%",
  }
};

const HeaderDiv = styled.div`
  display: flex;
  line-height: 24px;
  font-size: 16px;
  padding: 0 10px;
  justify-content: space-between;
`;

const HeaderSpan = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 5px;
  width: ${props => props.width}
`;

class Users extends React.Component {
  componentDidMount() {
    this.props.onFetchUsers();
  }

  render() {
    const {users} = this.props;
    return (
        <Div>
          <HeaderDiv>
            {Object.keys(COLUMNS).map(key =>
                <HeaderSpan
                    key={key}
                    width={COLUMNS[key].width}
                >
                  {COLUMNS[key].label}
                </HeaderSpan>
            )}
          </HeaderDiv>

          {users.map(user =>
              <User
                  key={user.id}
                  user={user}
                  columns={COLUMNS}
              />
          )}
        </Div>
    )
  }
}

const mapStateToProps = state => ({
  users: getUsers(state),
});

const mapDispatchToProps = dispatch => ({
  onFetchUsers: query => dispatch(doFetchUsers(query)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);