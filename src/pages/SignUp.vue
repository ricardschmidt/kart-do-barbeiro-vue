<template>
  <div class="page-header clear-filter" filter-color="blue">
    <div
      class="page-header-image"
      style="background-image: url('https://ras-upload.s3.amazonaws.com/ckdb/img/about-us/about-us-15.jpg')"
    ></div>
    <div class="content">
		<div class="container">
			<alert :type="alert.type" dismissible :visible="alert.visible">
				{{alert.message}}
			</alert>
			<div class="col-md-5 ml-auto mr-auto">
			<card type="login" plain>
				<fg-input
				class="no-border input-lg"
				:class="{'has-danger': errors.name}"
				addon-left-icon="now-ui-icons users_circle-08"
				placeholder="Nome...  (Conforme kartódromo)"
				v-model="driver.name"
				>
				</fg-input>
				<div class="row">
					<fg-input
					class="no-border input-lg"
					:class="{'has-danger': errors.nickname}"
					addon-left-icon="now-ui-icons text_caps-small"
					placeholder="Apelido..."
					v-model="driver.nickname"
					>
					</fg-input>
					<masked-input
					class="no-border input-lg"
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
					class="no-border input-lg"
					:class="{'has-danger': errors.login}"
					addon-left-icon="now-ui-icons users_single-02"
					placeholder="Login..."
					v-model="driver.login"
					>
					</fg-input>
					<fg-input
					class="no-border input-lg"
					:class="{'has-danger': errors.password}"
					addon-left-icon="now-ui-icons ui-1_lock-circle-open"
					placeholder="Senha..."
					type="password"
					v-model="driver.password"
					>
					</fg-input>
				</div>
				<div class="row">
					<fg-input
					class="no-border input-lg"
					:class="{'has-danger': errors.email}"
					addon-left-icon="now-ui-icons ui-1_email-85"
					placeholder="Email..."
					v-model="driver.email"
					>
					</fg-input>
					<masked-input
					class="no-border input-lg"
					:class="{'has-danger': errors.phone}"
					addon-left-icon="now-ui-icons tech_mobile"
					placeholder="Telefone..."
					v-model="driver.phone"
					maskPattern="(##) #####-####"
					>
					</masked-input>
				</div>
				<v-select
					class="form-group no-border input-lg input-group"
					:class="{'has-danger': errors.state}"
					:options="states"
					label="nome"
					placeholder="Estado..."
					v-model="driver.state"
				>
				</v-select>
				<n-radio v-model="driver.season" label="2022/2">Temporada 2022/2</n-radio>
				<n-radio v-model="driver.season" label="">Corrida Única</n-radio>
				<template slot="raw-content">
				<div class="card-footer text-center">
					<n-button type="primary" round size="lg" v-on:click="register" >Inscrever-se</n-button>
				</div>
				<div class="pull-left">
					<h6>
					<router-link to="/login"
						class="link footer-link">Login
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
  </div>
</template>
<script>
import 'vue-select/dist/vue-select.css';

import axios from 'axios'
import vSelect from "vue-select";
import { Card, Button, FormGroupInput, FormGroupInputMasked, Radio, Alert, } from '@/components';

export default {
	name: 'login-page',
	bodyClass: 'signup-page',
	components: {
		Alert,
		Card,
		[Radio.name]: Radio,
		[Button.name]: Button,
		[FormGroupInput.name]: FormGroupInput,
		[FormGroupInputMasked.name]: FormGroupInputMasked,
		vSelect
	},
	data() {
		return {
			urlBase: process.env.VUE_APP_API_URL,
			alert: {
				type: "success",
				visible: false,
				message: ""
			},
			driver: {
				name: "",
				nickname: "",
				number: "",
				login: "",
				password: "",
				email: "",
				phone: "",
				state: "",
				season: '2022/2',
			},
			states: [
				{"nome": "Acre", "sigla": "AC"},
				{"nome": "Alagoas", "sigla": "AL"},
				{"nome": "Amapá", "sigla": "AP"},
				{"nome": "Amazonas", "sigla": "AM"},
				{"nome": "Bahia", "sigla": "BA"},
				{"nome": "Ceará", "sigla": "CE"},
				{"nome": "Distrito Federal", "sigla": "DF"},
				{"nome": "Espírito Santo", "sigla": "ES"},
				{"nome": "Goiás", "sigla": "GO"},
				{"nome": "Maranhão", "sigla": "MA"},
				{"nome": "Mato Grosso", "sigla": "MT"},
				{"nome": "Mato Grosso do Sul", "sigla": "MS"},
				{"nome": "Minas Gerais", "sigla": "MG"},
				{"nome": "Pará", "sigla": "PA"},
				{"nome": "Paraíba", "sigla": "PB"},
				{"nome": "Paraná", "sigla": "PR"},
				{"nome": "Pernambuco", "sigla": "PE"},
				{"nome": "Piauí", "sigla": "PI"},
				{"nome": "Rio de Janeiro", "sigla": "RJ"},
				{"nome": "Rio Grande do Norte", "sigla": "RN"},
				{"nome": "Rio Grande do Sul", "sigla": "RS"},
				{"nome": "Rondônia", "sigla": "RO"},
				{"nome": "Roraima", "sigla": "RR"},
				{"nome": "Santa Catarina", "sigla": "SC"},
				{"nome": "São Paulo", "sigla": "SP"},
				{"nome": "Sergipe", "sigla": "SE"},
				{"nome": "Tocantins", "sigla": "TO"}
			],
			errors: {},
		}
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn;
		}
  	},
	mounted() {
		if (this.loggedIn) {
			this.$router.push('/profile');
		}
 	 },
	methods: {
		register() {
			this.alert.visible = false
			if(this.checkForm()) return

			this.$store.dispatch('auth/register', {
				"number": this.driver.number,
				"name": this.driver.name,
				"nickname": this.driver.nickname,
				"state": this.driver.state.sigla,
				"email": this.driver.email,
				"phone": this.driver.phone,
				"season": this.driver.season,
				"login": this.driver.login,
				"password": this.driver.password,
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
			if(!this.driver.name) this.errors['name'] = true
			if(!this.driver.nickname) this.errors['nickname'] = true
			if(!this.driver.number) this.errors['number'] = true
			if(!this.driver.state) this.errors['state'] = true
			if(!this.driver.email) this.errors['email'] = true
			if(!this.driver.phone) this.errors['phone'] = true
			if(!this.driver.login) this.errors['login'] = true
			if(!this.driver.password) this.errors['password'] = true

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
