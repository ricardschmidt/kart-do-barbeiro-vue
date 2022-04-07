<template>
	<div>
		<div class="page-header clear-filter" filter-color="orange">
		<parallax
			class="page-header-image"
			style="background-image:url('https://ras-upload.s3.amazonaws.com/ckdb/img/background/bg-profile.jpeg')"
		>
		</parallax>
		<div class="container">
			<div class="photo-container" style="background-color: #FFF">
			<img :src="currentUser.image" alt="" />
			</div>
			<h3 class="title">{{currentUser.name}}</h3>
			<div class="content">
			<div class="social-description">
				<h2>{{parseInt(currentUser.allScore)}}</h2>
				<p>Pontos na Carreira</p>
			</div>
			<div class="social-description">
				<h2>{{currentUser.podium}}</h2>
				<p>Podiuns na Carreira</p>
			</div>
			<div class="social-description">
				<h2>{{currentUser.poleposition}}</h2>
				<p>Total de <br/>Pole Posistions</p>
			</div>
			<div class="social-description">
				<h2>{{currentUser.bestlap}}</h2>
				<p>Total de <br/>Melhores Voltas</p>
			</div>
			</div>
		</div>
		</div>
		<div class="section">
			<alert :type="alert.type" dismissible :visible="alert.visible">
				{{alert.message}}
			</alert>
			<div class="container" v-if="!editPassword">
				<p class="category">Dados Cadastrais</p>
				<div class="row">
					<fg-input
					class="input-lg"
					:class="{'has-danger': errors.nickname}"
					addon-left-icon="now-ui-icons text_caps-small"
					placeholder="Apelido..."
					v-model="driver.nickname"
					>
					</fg-input>
					<masked-input
					class="input-lg"
					:class="{'has-danger': errors.number}"
					addon-left-icon="now-ui-icons sport_trophy"
					placeholder="Número..."
					v-model="driver.number"
					maskPattern="!###"
					>
					</masked-input>
				</div>
				<div class="row">
					<fg-input
					class="input-lg"
					:class="{'has-danger': errors.email}"
					addon-left-icon="now-ui-icons ui-1_email-85"
					placeholder="Email..."
					type="email"
					v-model="driver.email"
					>
					</fg-input>
					<masked-input
					class="input-lg"
					:class="{'has-danger': errors.phone}"
					addon-left-icon="now-ui-icons tech_mobile"
					placeholder="Telefone..."
					v-model="driver.phone"
					maskPattern="(##) #####-####"
					>
					</masked-input>
				</div>
				<div class="row">
					<fg-input
					class="input-lg"
					:class="{'has-danger': errors.login}"
					addon-left-icon="now-ui-icons users_single-02"
					placeholder="Login..."
					v-model="driver.login"
					>
					</fg-input>
					<masked-input
					class="input-lg"
					:class="{'has-danger': errors.state}"
					addon-left-icon="now-ui-icons location_pin"
					placeholder="Estado..."
					v-model="driver.state"
					maskPattern="AA"
					>
					</masked-input>
				</div>
				<textarea
					class="form-control"
					name="name"
					rows="10"
					cols="80"
					placeholder="Depoimento"
					v-model="driver.deposition">
				</textarea>
				<div class="text-center">
					<n-button type="primary" round size="lg" @click="updateDriver" >Atualizar</n-button>
					<n-button type="neutral" round size="lg" @click="changePassword" >Trocar Senha</n-button>
				</div>
			</div>
			<div class="container" v-else>
				<p class="category">Trocar Senha</p>
				<div class="edit-profile-password">
					<fg-input
					class="no-border input-lg"
					:class="{'has-danger': errors.oldpassword}"
					addon-left-icon="now-ui-icons text_caps-small"
					placeholder="Senha Atual..."
					type="password"
					v-model="password.current"
					>
					</fg-input>
					<fg-input
					class="no-border input-lg"
					:class="{'has-danger': errors.password}"
					addon-left-icon="now-ui-icons text_caps-small"
					placeholder="Nova Senha..."
					type="password"
					v-model="password.new"
					>
					</fg-input>
					<fg-input
					class="no-border input-lg"
					:class="{'has-danger': errors.password}"
					addon-left-icon="now-ui-icons sport_trophy"
					placeholder="Confirmação de Senha..."
					type="password"
					v-model="password.confirme"
					>
					</fg-input>
					<div class="text-center">
						<n-button type="primary" round size="lg" @click="updatePassword" >Atualizar</n-button>
						<n-button type="primary" round size="lg" @click="changePassword" >Editar Perfil</n-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { Alert, FormGroupInput, FormGroupInputMasked, Button } from '@/components';
import { getUser, setUser } from '../services/auth'
import axios from '../services/api'

export default {
	name: 'profile',
	bodyClass: 'profile-page',
	components: {
		Alert,
		[FormGroupInput.name]: FormGroupInput,
		[FormGroupInputMasked.name]: FormGroupInputMasked,
		[Button.name]: Button,
	},
	data() {
		return {
			alert: {
				type: "success",
				visible: false,
				message: ""
			},
			errors: {},
			password: {
				current: "",
				new: "",
				confirme: ""
			},
			editPassword: false,
			driver: {}
		}
	},
	computed: {
		currentUser() {
			return getUser()
		}
	},
	mounted() {
		this.driver = this.currentUser
		if (!this.currentUser) {
			this.$router.push('/login');
		}
	},
	methods: {
		changePassword() {
			this.editPassword = !this.editPassword
		},

		updatePassword() {
			if(this.checkPassword()) return
			axios.put("/drivers/password", {
				currentPassword: this.password.current,
				password: this.password.new
			})
			.then(response => {
				this.alert.type = "success"
				this.alert.message = "Senha Atualizada com Sucesso"
				this.alert.visible = true
			}).catch(error => {
				this.alert.type = error.response.status === 400 ? "warning" : "danger"
				this.alert.message = error.response.data.error.userMessage
				this.visibleAlert()
				if(this.alert.message === "Senha Incorreta") this.errors['oldpassword'] = true
			})
		},

		updateDriver() {
			if(this.checkForm()) return
			axios.put("/drivers",	{
				nickname: this.driver.nickname,
				number: this.driver.number,
				email: this.driver.email,
				phone: this.driver.phone,
				login: this.driver.login,
				state: this.driver.state,
				deposition: this.driver.deposition,
			}).then(response => {
				setUser(this.driver)
				this.alert.type = "success"
				this.alert.message = "Perfil atualizado com sucesso."
				this.alert.visible = true
			}).catch(error => {
				this.alert.type = error.response.status === 400 ? "warning" : "danger"
				this.alert.message = error.response.data.error.userMessage
				this.visibleAlert()
			})
		},

		checkForm() {
			this.errors = {}
			if(!this.driver.nickname) this.errors['nickname'] = true
			if(!this.driver.number) this.errors['number'] = true
			if(!this.driver.state || this.driver.state.length !== 2) this.errors['state'] = true
			if(!this.validateEmail(this.driver.email)) this.errors['email'] = true
			if(!this.driver.phone) this.errors['phone'] = true
			if(!this.driver.login) this.errors['login'] = true

			if (!this.isEmpty(this.errors)) {
				this.alert = {
					type: "warning",
					message: "Preencha todos os Campos"
				}
				this.visibleAlert()
				return true
			}
			return false
		},

		checkPassword() {
			this.errors = {}
			if(!this.password.new) this.errors['password'] = true
			if(!this.password.confirme) this.errors['password'] = true
			if(!this.password.current) this.errors['oldpassword'] = true
			if (!this.isEmpty(this.errors)) {
				this.alert = {
					type: "warning",
					visible: true,
					message: "Preencha todos os Campos"
				}
				return true
			}
			if(this.password.new !== this.password.confirme) {
				this.errors['password'] = true
				this.alert = {
					type: "warning",
					visible: true,
					message: "Confirmação de senha incorreta"
				}
				return true
			}
			return false
		},

		validateEmail(email) {
			return String(email).toLowerCase()
				.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== null ? true : false;
		},

		isEmpty(obj) {
			for(var prop in obj) {
				if(Object.prototype.hasOwnProperty.call(obj, prop)) {
				return false;
				}
			}

			return JSON.stringify(obj) === JSON.stringify({});
		},

		visibleAlert() {
			this.alert.visible = true
			setTimeout(() => {
				this.alert.visible = false
			}, 5000);
		}
	}
};
</script>
<style></style>
