<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div
      class="page-header-image"
      style="background-image: url('https://ras-upload.s3.amazonaws.com/ckdb/img/about-us/about-us-6.jpg')"
    ></div>
    <div class="content">
		<div class="container">
			<alert :type="alert.type" dismissible :visible="alert.visible">
				{{alert.message}}
			</alert>
			<div class="col-md-5 ml-auto mr-auto">
			<card type="login" plain>
				<div slot="header" class="logo-container">
				<img v-lazy="'https://ras-upload.s3.amazonaws.com/ckdb/img/logo/logo-original.png'" alt="Logo CKDB" />
				</div>

				<fg-input
				class="no-border input-lg"
				:class="{'has-danger': errors.login}"
				addon-left-icon="now-ui-icons users_circle-08"
				placeholder="Login..."
				v-model="login.user"
				>
				</fg-input>

				<fg-input
				class="no-border input-lg"
				:class="{'has-danger': errors.password}"
				addon-left-icon="now-ui-icons ui-1_lock-circle-open"
				placeholder="Senha..."
				type="password"
				v-model="login.password"
				@keyup.enter="authenticate"
				>
				</fg-input>

				<template slot="raw-content">
					<div class="card-footer text-center">
						<n-button type="primary" round size="lg" @click="authenticate" >Acessar</n-button>
					</div>
					<div class="pull-left">
						<h6>
							<router-link to="/sign-up"
								class="link footer-link">Criar Conta
							</router-link>
						</h6>
					</div>
					<div class="pull-right">
						<h6>
						<a href="#pablo" class="link footer-link">Need Help?</a>
						</h6>
					</div>
				</template>
			</card>
			</div>
		</div>
    </div>
	<starter-footer></starter-footer>
  </div>
</template>
<script>
import axios from '../services/api'
import { loginAccess, getUser } from '../services/auth'
import { Alert, Card, Button, FormGroupInput } from '@/components';
import StarterFooter from '@/layout/StarterFooter';

export default {
	name: 'login-page',
	bodyClass: 'login-page',
	components: {
		Alert,
		Card,
		StarterFooter,
		[Button.name]: Button,
		[FormGroupInput.name]: FormGroupInput
	},
	data() {
		return {
			alert: {
				type: "success",
				visible: false,
				message: ""
			},
			login: {
				user: "",
				password: ""
			},
			errors: {},
		}
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn;
		},
		userInLowerCase() {
			return this.login.user.toLowerCase().trim();
		}
	},
	created() {
		if (this.loggedIn) {
			this.$router.push('/profile');
		}
  	},
	methods: {
		authenticate() {
			this.alert.visible = false
			if(this.checkForm()) return

			this.$store.dispatch('auth/login', {
				"login": this.userInLowerCase,
				"password": this.login.password,
			})
			.then(response => {
				this.$router.push("/profile")
			})
			.catch(error => {
				this.alert.type = error.response.status === 400 ? "warning" : "danger"
				this.alert.message = error.response.data.error.userMessage
				this.alert.visible = true
			})
		},

		checkForm() {
			this.errors = {}
			if(!this.login.user) this.errors['login'] = true
			if(!this.login.password) this.errors['password'] = true

			if (!this.isEmpty(this.errors)) {
				this.alert = {
					type: "warning",
					visible: true,
					message: "Preencha todos os Campos"
				}
				return true
			}
			return false
		},

		isEmpty(obj) {
			for(var prop in obj) {
				if(Object.prototype.hasOwnProperty.call(obj, prop)) {
				return false;
				}
			}

			return JSON.stringify(obj) === JSON.stringify({});
		},
	}
};
</script>
<style></style>
