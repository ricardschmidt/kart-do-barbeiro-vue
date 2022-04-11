<template>
	<div>
		<div class="page-header page-header-small">
			<parallax
				class="page-header-image"
				style="background-image: url('https://ckdb.s3.amazonaws.com/ckdb/img/header.jpeg')"
			>
			</parallax>
			<div class="content-center">
				<div class="container">
					<h1 class="title">Dashboard</h1>
				</div>
				<card style="width: 15rem; margin-right: 20px">
					<h4 class="card-title text-black">Total de Pilotos</h4>
					<p class="h2 text-black">90</p>
				</card>
				<card style="width: 15rem; margin-right: 20px">
					<h4 class="card-title text-black">Total de Corridas</h4>
					<p class="h2 text-black">15</p>
				</card>
				<card style="width: 15rem;">
					<h4 class="card-title text-black">Total de Pilotos</h4>
					<p class="h2 text-black">90</p>
				</card>
			</div>
		</div>
		<div class="section content-center">
			<alert :type="alert.type" dismissible :visible="alert.visible">
				<i class="now-ui-icons" :class="alert.icon"></i>
				{{alert.message}}
			</alert>
			<div class="container">
				<n-button type="info" @click.native="modals.passwordReset = true" >Resetar Senha</n-button>
				<n-button type="warning" @click.native="modals.raceDelete = true">Deletar Corrida</n-button>
			</div>
		</div>
		<modal :show.sync="modals.passwordReset" headerClasses="justify-content-center">
			<h4 slot="header" class="title title-up">Redefinir Senha!</h4>
			<fg-input
				class="input-lg"
				:class="{'has-danger': errors.login}"
				addon-left-icon="now-ui-icons users_single-02"
				placeholder="Login..."
				v-model="form.login"
			>
			</fg-input>
			<fg-input
				class="input-lg"
				:class="{'has-danger': errors.email}"
				addon-left-icon="now-ui-icons ui-1_email-85"
				placeholder="Email..."
				v-model="form.email"
			>
			</fg-input>
			<template slot="footer">
				<n-button
					type="danger"
					@click.native="modals.passwordReset = false"
				>
					Close
				</n-button>
				<n-button
					type="info"
					@click="passwordReset"
				>
					Resetar
				</n-button>
			</template>
		</modal>
		<modal :show.sync="modals.raceDelete" headerClasses="justify-content-center">
			<h4 slot="header" class="title title-up">Deletar pior Corrida!</h4>
			<fg-input
				class="input-lg"
				:class="{'has-danger': errors.season}"
				addon-left-icon="now-ui-icons ui-1_calendar-60"
				placeholder="Temporada..."
				v-model="form.season"
			>
			</fg-input>
			<template slot="footer">
				<n-button
					type="danger"
					@click.native="modals.raceDelete = false"
				>
					Close
				</n-button>
				<n-button
					type="info"
					@click="raceDelete"
				>
					Deletar
				</n-button>
			</template>
		</modal>
		<div class="section content-center" v-show="drivers.length > 0">
			<div class="col-md-10 ml-auto col-xl-6 mr-auto">
				<race-delete-table :drivers="drivers" ></race-delete-table>
			</div>
		</div>
	</div>
</template>
<script>
import { Button, FormGroupInput, Card, Modal, Alert, RaceDeleteTable } from '@/components';
import { getUser } from '../services/auth'
import axios from '../services/api'

export default {
	name: 'dashboard',
	components: {
		Alert,
		Modal,
		RaceDeleteTable,
		[Button.name]: Button,
		[FormGroupInput.name]: FormGroupInput,
		Card,
	},
	data() {
		return {
			form: {
				login: '',
				email: '',
				season: '',
			},
			modals: {
				passwordReset: false,
				raceDelete: false,
			},
			alert: {
				type: "success",
				visible: false,
				message: "",
				icon: "objects_support-17"
			},
			errors: {},
			drivers: []
		};
	},
  	computed: {
		currentUser() {
			return getUser()
		}
	},
	mounted() {
		if (!this.currentUser || this.currentUser.roles !== 'ROLES_ADMIN') {
			this.$router.push('/login');
		}
	},
	methods: {
		passwordReset() {
			if(this.checkForm()) return

			axios.put('/password-reset', {
				login: this.form.login,
				email: this.form.email
			})
			.then(response => {
				this.alert.type = "info"
				this.alert.message = "Senha alterada com sucesso!"
				this.visibleAlert()
			}).catch(error => {
				this.alert.type = error.response.status === 400 ? "warning" : "danger"
				this.alert.message = error.response.data.error.userMessage
				this.visibleAlert()
			})
		},

		raceDelete() {
			axios.put("/results/delete-worst", {
				season: this.form.season
			}).then(response => {
				this.drivers = response.data
				this.modals.raceDelete = false
			}).catch(error => {
				this.alert.type = error.response.status === 400 ? "warning" : "danger"
				this.alert.message = error.response.data.error.userMessage
				this.visibleAlert()
			})
		},

		checkForm() {
			this.errors = {}
			if(!this.form.email) this.errors['email'] = true
			if(!this.form.login) this.errors['login'] = true

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

		visibleAlert() {
			this.alert.visible = true
			setTimeout(() => {
				this.alert.visible = false
			}, 5000);
		},
	}
};
</script>
<style></style>
