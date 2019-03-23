const getUsers = ({usersState}) =>
    usersState.users;

const getFetchError = ({usersState}) =>
    usersState.error;

const getUser = ({usersState}, userUrl) =>
    usersState.users.find(user => user.url === userUrl);

export {
  getUsers,
  getFetchError,
  getUser,
};