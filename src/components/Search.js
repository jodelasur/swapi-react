import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {doFetchUsers} from "../actions/user";

const Form = styled.form`
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  outline: none;
  margin-right: 10px;
  border: 1px solid #dddddd;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #dddddd;
  background: transparent;
  color: #808080;
  cursor: pointer;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const {query} = this.state;
    if (query) {
      this.props.onFetchUsers(query);
    }
  }

  onChange(event) {
    const {value} = event.target;
    this.setState({query: value});
  }

  render() {
    return (
        <Form onSubmit={this.onSubmit}>
          <Input
              type="text"
              value={this.state.query}
              onChange={this.onChange}
              ref={el => this.input = el}
              placeholder="Enter name here..."
          />
          <Button type="submit">
            Search
          </Button>
        </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onFetchUsers: query => dispatch(doFetchUsers(query)),
});

export default connect(
    null,
    mapDispatchToProps
)(Search);