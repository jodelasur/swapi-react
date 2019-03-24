const getUsers = ({usersState}) =>
    usersState.users;

const getNextUrl = ({usersState}) =>
    usersState.next;

const getFetchError = ({usersState}) =>
    usersState.error;

const getUser = ({usersState}, userUrl) =>
    usersState.users.find(user => user.url === userUrl);

export {
  getUsers,
  getNextUrl,
  getFetchError,
  getUser,
};