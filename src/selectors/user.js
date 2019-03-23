const getUsers = ({userState}) =>
    userState.users;

const getFetchError = ({userState}) =>
    userState.error;

const getUser = ({userState}, userUrl) =>
    userState.users.find(user => user.url === userUrl);

export {
  getUsers,
  getFetchError,
  getUser,
};