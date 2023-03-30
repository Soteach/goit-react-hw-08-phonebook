export const selectUser = state => state.auth.user;
export const selectUserName = state => state.auth.user.name;
export const selectUserMail = state => state.auth.user.mail;
export const selectIsLogedIn = state => state.auth.isLogedIn;
export const selectIsRefreshingUser = state =>
  state.auth.selectIsRefreshingUser;
// export const selectToken = state => state.auth.token;
