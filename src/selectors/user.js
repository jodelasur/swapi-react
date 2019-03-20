const getUsers = ({userState}) =>
    userState.users;

const getFetchError = ({userState}) =>
    userState.error;

export {
  getUsers,
  getFetchError,
};