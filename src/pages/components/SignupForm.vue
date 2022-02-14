<template>
	<div
		class="section section-signup"
		style="background-image: url('https://ras-upload.s3.amazonaws.com/ckdb/img/background/bg-signup.jpg'); background-size: cover; background-position: top center; min-height: 700px;"
	>
		<div class="container">
		<div class="row">
			<card class="card-signup" header-classes="text-center" color="orange">
			<template slot="header">
				<h3 class="card-title title-up">Inscreva-se</h3>
				<div class="social-line">
				<a
					href="https://www.facebook.com/ckdb.kart"
					class="btn btn-neutral btn-facebook btn-icon btn-round"
				>
					<i class="fab fa-facebook-square"></i>
				</a>
				<a
					href="https://www.youtube.com/channel/UCtUaJ4bE1hhPBKtXXT1zyZA"
					class="btn btn-neutral btn-youtube btn-icon btn-lg btn-round"
				>
					<i class="fab fa-youtube"></i>
				</a>
				<a
					href="https://www.instagram.com/ckdb.kart/"
					class="btn btn-neutral btn-instagram btn-icon btn-round"
				>
					<i class="fab fa-instagram"></i>
				</a>
				</div>
			</template>
			<div class="sing-up-form" >
				<alert type="success" dismissible :visible="success">
					Você concluiu o seu cadastro para o Campeonato do Kart do Barbeiro 2022/1
				</alert>
				<alert type="danger" dismissible :visible="error" >{{errorMsg}}</alert>
				<template>
					<fg-input
					id="input-name"
					class="no-border"
					:class="{'has-danger': errors.name}"
					placeholder="Nome...(Conforme cadastro no kartódromo)"
					addon-left-icon="now-ui-icons users_circle-08"
					v-model="name"
					>
					</fg-input>

					<fg-input
					id="input-lastname"
					class="no-border"
					:class="{'has-danger': errors.nickname}"
					placeholder="Apelido..."
					addon-left-icon="now-ui-icons users_circle-08"
					v-model="nickname"
					>
					</fg-input>

					<fg-input
					id="input-number"
					class="no-border"
					:class="{'has-danger': errors.number}"
					placeholder="Número"
					type="number"
					addon-left-icon="now-ui-icons sport_trophy"
					v-model="number"
					>
					</fg-input>

					<fg-input
					id="input-state"
					class="no-border"
					:class="{'has-danger': errors.state}"
					placeholder="Estado"
					addon-left-icon="now-ui-icons location_world"
					v-model="state"
					>
					</fg-input>

					<fg-input
					id="input-email"
					class="no-border"
					:class="{'has-danger': errors.email}"
					placeholder="E-mail"
					addon-left-icon="now-ui-icons ui-1_email-85"
					v-model="email"
					>
					</fg-input>

					<fg-input
					id="input-phone"
					class="no-border"
					:class="{'has-danger': errors.phone}"
					placeholder="Telefone"
					addon-left-icon="now-ui-icons tech_mobile"
					v-model="phone"
					>
					</fg-input>

				</template>
				<div class="card-footer text-center">
					<n-button :type="typeButton" round size="lg" v-on:click="insertDriver" >Inscrever-se</n-button>
				</div>
			</div>
			</card>
		</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
import { Alert, Card, FormGroupInput, Button } from '@/components';

export default {
  components: {
	Alert,
	Card,
	[Button.name]: Button,
	[FormGroupInput.name]: FormGroupInput,
  },
  data() {
	  return{
		urlBase: process.env.VUE_APP_API_URL,
		typeButton: "neutral",
		error: false,
		errors: {},
		success: false,
		name: null,
		nickname: null,
		number: null,
		phone: null,
		state: null,
		email: null,
		category: null,
		errorMsg: "",
	  }
  },
  methods: {
		insertDriver() {
			if(this.checkForm()){
				return
			}
			axios.post(`${this.urlBase}/drivers`, {
				"number": "#" + this.number,
				"name": this.name,
				"nickname": this.nickname,
				"state": this.state,
				"email": this.email,
				"phone": this.phone,
				"category": this.category,
				"season": "2022/1",
			})
			.then(response => {
				this.name = null
				this.nickname = null
				this.number = null
				this.state = null
				this.email = null
				this.phone = null
				this.success = true
			})
			.catch(error => {
				this.error = true
				this.errorMsg = error.response.data.errorMsgUser
				if(error.response.data.errorCode === 409) {
					this.errors["number"] = true
				}
			})
		},

		checkForm() {
			this.errors = {}
			if(!this.name) {
				this.errors['name'] = true
			}
			if(!this.nickname) {
				this.errors['nickname'] = true
			}
			if(!this.number) {
				this.errors['number'] = true
			}
			if(!this.state) {
				this.errors['state'] = true
			}
			if(!this.email) {
				this.errors['email'] = true
			}
			if(!this.phone) {
				this.errors['phone'] = true
			}

			if (!this.isEmpty(this.errors)) {
				this.errorMsg = "Preencha todos os campos."
				this.error = true
				return true;
			} else {
				this.error = false
				return false;
			}
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
