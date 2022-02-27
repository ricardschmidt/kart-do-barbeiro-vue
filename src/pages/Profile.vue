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
			<h3 class="title" style="text-transform: uppercase">{{currentUser.nickname}} {{currentUser.number}}</h3>
			<p class="category">{{currentUser.name}}</p>
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
			<div class="container">
				<div class="button-container">
					<n-button type="success" round size="lg" @click="confirmRace">
						<i class="now-ui-icons ui-1_check"></i> Confirmar Etapa
					</n-button>
					<n-button type="danger" round icon size="lg" @click="deleteConfirmRace">
						<i class="now-ui-icons ui-1_simple-remove"></i>
					</n-button>
				</div>
				<alert :type="alert.type" dismissible :visible="alert.visible">
					 <i class="now-ui-icons" :class="alert.icon"></i>
					 {{alert.message}}
				</alert>
				<p class="category">Dados Cadastrais</p>
				<table class="vue-table" style="max-width: 400px; margin: 0 auto">
					<tr>
						<th>Telefone</th>
						<td class="kart">{{currentUser.phone}}</td>
					</tr>
					<tr class="race-table">
						<th>Email</th>
						<td class="kart">{{currentUser.email}}</td>
					</tr>
				</table>
				<div class="col-md-10 ml-auto col-xl-6 mr-auto">
					<h3 class="title">Campeonato Atual</h3>
					<!-- Tabs with Background on Card -->
					<div class="card">
						<tabs
						centered
						type="neutral"
						tab-nav-wrapper-classes="card-header"
						tab-content-classes="card-body text-center"
						data-background-color="orange"
						>
							<tab-pane>
								<template slot="label">
								<i class="now-ui-icons sport_trophy"></i> Pontuação
								</template>
								<div class="row">
									<div>
										<h4>Pontuação Atual</h4>
										<p>
										{{parseInt(currentUser.currentScore)}}
										</p>
									</div>
									<div>
										<h4>Baterias Corridas</h4>
										<p>
										{{results.length}}
										</p>
									</div>
								</div>
							</tab-pane>
							<tab-pane v-show="currentUser.team_id">
								<template slot="label">
								<i class="now-ui-icons objects_spaceship"></i> Equipe
								</template>
								<div class="row">
									<div>
										<h4>Equipe Atual</h4>
										<p>
										{{currentUser.team_id ? currentUser.team_id.name : "Independente"}}
										</p>
									</div>
									<div>
										<h4>Pontuação da Equipe</h4>
										<p>
										{{currentUser.team_id ? parseInt(currentUser.team_id.currentScore) : 0}}
										</p>
									</div>
								</div>
							</tab-pane>
						</tabs>
					</div>
					<!-- End Tabs on plain Card -->
				</div>
				<h3 class="title">Depoimento</h3>
				<h5 class="description">
				{{currentUser.deposition}}
				</h5>
				<div class="col-md-6 ml-auto mr-auto">
					<h4 class="title text-center">Minha Corridas</h4>
				</div>
				<results-table :results="results"></results-table>
			</div>
		</div>
	</div>
</template>
<script>
import { ResultsTable, Tabs, TabPane, Alert, Button } from '@/components';
import { getUser } from '../services/auth'
import axios from '../services/api'

export default {
	name: 'profile',
	bodyClass: 'profile-page',
	components: {
		ResultsTable,
		Alert,
		Tabs,
    	TabPane,
		[Button.name]: Button,
	},
	data() {
		return {
			alert: {
				type: "success",
				visible: false,
				message: "",
				icon: "objects_support-17"
			},
			results: []
		}
	},
	computed: {
		currentUser() {
			return getUser()
		}
	},
	mounted() {
		if (!this.currentUser) {
			this.$router.push('/login');
		}
	},
	created() {
		this.getDriver()
	},
	methods: {
		async getDriver() {
			await axios.get("/drivers/races", {
				params: {
					"driverName": this.currentUser.name
				}
			}).then(response => {
				this.results = response.data
			}).catch(error => {
				this.alert.type = error.response.status === 400 ? "warning" : "danger"
				this.alert.message = error.response.data.error.userMessage
				this.alert.visible = true
				if(this.alert.message.includes("faça o login novamente")) {
					this.$store.dispatch('auth/logout');
					this.$router.push('/login');
				}
			})
		},

		async confirmRace() {
			await axios.post("/confirm")
			.then(response => {
				if(response.data.confirm.message.endsWith("encerrada!")) {
					this.alert.type = "danger"
					this.alert.message = response.data.confirm.message
					this.alert.visible = true
					this.alert.icon = "health_ambulance"
					return
				}
				this.alert.type = "success"
				this.alert.message = response.data.confirm.message
				this.alert.visible = true
				this.alert.icon = "ui-2_like"
			}).catch(error => {
				this.alert.type = error.response.status === 400 ? "warning" : "danger"
				this.alert.message = error.response.data.error.userMessage
				this.alert.visible = true
				if(this.alert.message.includes("faça o login novamente")) {
					this.$store.dispatch('auth/logout');
					this.$router.push('/login');
				}
			})
		},

		async deleteConfirmRace() {
			await axios.delete("/confirm")
			.then(response => {
				if(response.data.confirm.message.endsWith("encerrada!")) {
					this.alert.type = "danger"
					this.alert.message = response.data.confirm.message
					this.alert.visible = true
					this.alert.icon = "health_ambulance"
					return
				}
				this.alert.type = "success"
				this.alert.message = response.data.confirm.message
				this.alert.visible = true
				this.alert.icon = "ui-2_like"
			}).catch(error => {
				this.alert.type = error.response.status === 400 ? "warning" : "danger"
				this.alert.icon = error.response.status === 400 ? "travel_info" : "objects_support-17"
				this.alert.message = error.response.data.error.userMessage
				this.alert.visible = true
				if(this.alert.message.includes("faça o login novamente")) {
					this.$store.dispatch('auth/logout');
					this.$router.push('/login');
				}
			})
		}
	}
};
</script>
<style></style>
