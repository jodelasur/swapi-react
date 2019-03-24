import React, {Component} from "react";
import User from "./User";
import styled from "styled-components";
import {getNextUrl, getUsers} from "../selectors/user";
import {connect} from "react-redux";
import {doFetchNextUsers} from "../actions/user";
import Header from "./Header";
import InfiniteScroll from "react-infinite-scroller";

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

class Users extends Component {
  constructor(props) {
    super(props);
    this.handleNext = this.handleNext.bind(this);
  }

  handleNext() {
    const {next, onFetchNextUsers} = this.props;
    onFetchNextUsers(next);
  }

  render() {
    const {users, next} = this.props;
    return (
        <Div>
          <Header columns={COLUMNS}/>
          <InfiniteScroll
              loadMore={this.handleNext}
              hasMore={!!next}
              loader={<div>Loading...</div>}
          >
            {users.map(user =>
                <User
                    key={user.url}
                    user={user}
                    columns={COLUMNS}
                />
            )}
          </InfiniteScroll>
        </Div>
    );
  }
}

const mapStateToProps = state => ({
  users: getUsers(state),
  next: getNextUrl(state),
});

const mapDispatchToProps = dispatch => ({
  onFetchNextUsers: next => dispatch(doFetchNextUsers(next)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);