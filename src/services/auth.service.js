import axios from './api';
import { loginAccess, logout } from '../services/auth'

class AuthService {
	login(user) {
		return axios
		.post('/signin', {
			login: user.login,
			password: user.password
		})
		.then(response => {
			if (response.data.token) {
				loginAccess(response.data);
			}
		})
	}
	logout() {
		logout()
	}
	register(user) {
		return axios.post('/signup', {
			number: "#" + user.number,
			name: user.name,
			nickname: user.nickname,
			state: user.state,
			email: user.email,
			phone: user.phone,
			season: user.season,
			login: user.login,
			password: user.password,
		})
		.then(response => {
			if (response.data.token) {
				loginAccess(response.data);
			}
			this.$router.push("/profile")
		})
		.catch(error => {
			this.alert.type = error.response.status === 400 ? "warning" : "danger"
			this.alert.message = error.response.data.error.userMessage
			this.alert.visible = true
		})
	}
}
export default new AuthService();
