import AuthService from '../services/auth.service';
import { getUser } from '../services/auth'

const user = getUser();

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
	namespaced: true,
	state: initialState,
	actions: {
		login({ commit }, user) {
			return AuthService.login(user).then(
				user => {
					commit('loginSuccess', user);
					return Promise.resolve(user);
				},
				error => {
					commit('loginFailure');
					return Promise.reject(error);
				}
			);
		},
		logout({ commit }) {
			AuthService.logout();
			commit('logout');
		},
		register({ commit }, user) {
			return AuthService.register(user).then(
				user => {
					commit('registerSuccess', user);
					return Promise.resolve(user);
				},
				error => {
					commit('registerFailure');
					return Promise.reject(error);
				}
			);
		}
	},
	mutations: {
		loginSuccess(state, user) {
			state.status.loggedIn = true;
			state.user = user;
		},
		loginFailure(state) {
			state.status.loggedIn = false;
			state.user = null;
		},
		logout(state) {
			state.status.loggedIn = false;
			state.user = null;
		},
		registerSuccess(state, user) {
			state.status.loggedIn = true;
			state.user = user;
		},
		registerFailure(state) {
			state.status.loggedIn = false;
		}
	}
};
