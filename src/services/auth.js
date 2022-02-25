export const TOKEN_KEY = "@ckdb-Token";
export const USER = "user";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const getUser = () => JSON.parse(localStorage.getItem(USER));

export const removeToken = () => localStorage.removeItem(TOKEN_KEY);

export const setUser = user => {
	localStorage.setItem(USER, JSON.stringify(user));
};

export const loginAccess = user => {
	localStorage.setItem(TOKEN_KEY, user.token);
	localStorage.setItem(USER, JSON.stringify(user.driver));
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER);
};
