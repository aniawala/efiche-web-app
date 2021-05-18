export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const isAuth = () => {
  return localStorage.getItem("token") ? true : false;
};

export const setUserSession = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserSession = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
