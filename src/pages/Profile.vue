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
				<div class="alert alert-warning" v-if="!paid">
					<p style="margin: 0; font-weight: 500;">
						<i class="now-ui-icons travel_info"></i>
						Aguardando pagamento, caso já tenha realizado, enviar o comprovante para
						<a href="mailto:ricardschmidt@gmail.com">ricardschmidt@gmail.com</a>
					</p>
				</div>
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
				<div class="col-md-10 ml-auto col-xl-10 mr-auto">
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
										<h3>
										{{parseInt(currentUser.currentScore)}}
										</h3>
									</div>
									<div>
										<h4>Baterias Corridas</h4>
										<h3>
										{{results.length}}
										</h3>
									</div>
									<div>
										<h4>Pontuação Deletada</h4>
										<h3>
										{{parseInt(currentUser.deletedScore)}}
										</h3>
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
				<div class="text-center" style="margin-top: 100px">
					<n-button type="info" size="lg" block @click.native="modals.classic = true">
						INSCRIÇÃO PARA ETAPA 2022/2
					</n-button>
				</div>
				<modal :show.sync="modals.classic" headerClasses="justify-content-center">
					<h4 slot="header" class="title title-up">Muito Obrigado!</h4>
					<p>
						Parabéns, você se inscreveu para a 2º Temporada do
						Campeoanto do Kart do Barbeiro, para confirmar a sua vaga
						basta realizar o pagamento da inscrição que pode ser feito
						de 2 modos.
						<br />
						PIX ou link do Mercado Pago.
						Os valores são de R$250,00 no PIX e R$270,00 em até 12x
						pelo Mercado Pago.
					</p>
					<h4 class="blockquote blockquote-warning">
						1 - PIX - ricardschmidt@gmail.com
						<br />
						<br />
						<small>Obs. Enviar comprovante para mesmo
							<a class="link" href="mailto:ricardschmidt@gmail.com">email</a>
						</small>
					</h4>
					<template slot="footer">
						<a
						href="https://mpago.la/1RBgkhP"
						target="_blank"
						class="btn btn-success">
						 	Mercado Pago
						</a>
						<n-button
							type="danger"
							@click.native="modals.classic = false"
						>Close</n-button>
						<n-button
							type="info"
							@click.native="modals.classic = false"
							@click="subscriptionNextSeason"
						>Inscrever-se</n-button>
					</template>
				</modal>
			</div>
		</div>
	</div>
</template>
<script>
import { ResultsTable, Tabs, TabPane, Alert, Button, Modal } from '@/components';
import { getUser } from '../services/auth'
import axios from '../services/api'

export default {
	name: 'profile',
	bodyClass: 'profile-page',
	components: {
		Modal,
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
			paid: true,
			results: [],
			modals: {
				classic: false,
			},
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
		this.getPaid()
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
				this.visibleAlert()
				if(this.alert.message.includes("faça o login novamente")) {
					this.$store.dispatch('auth/logout');
					this.$router.push('/login');
				}
			})
		},

		async getPaid() {
			await axios.get("/drivers", {
				params: {
					"_id": this.currentUser._id,
					"select": "paid"
				}
			}).then(response => {
				this.paid = response.data[0].paid
			}).catch(error => {
				this.alert.type = error.response.status === 400 ? "warning" : "danger"
				this.alert.message = error.response.data.error.userMessage
				this.visibleAlert()
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
					this.visibleAlert()
					this.alert.icon = "health_ambulance"
					return
				}
				this.alert.type = "success"
				this.alert.message = response.data.confirm.message
				this.visibleAlert()
				this.alert.icon = "ui-2_like"
			}).catch(error => {
				this.alert.type = error.response.status < 500 ? "warning" : "danger"
				this.alert.message = error.response.data.error.userMessage
				this.visibleAlert()
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
					this.visibleAlert()
					this.alert.icon = "health_ambulance"
					return
				}
				this.alert.type = "success"
				this.alert.message = response.data.confirm.message
				this.visibleAlert()
				this.alert.icon = "ui-2_like"
			}).catch(error => {
				this.alert.type = error.response.status === 400 ? "warning" : "danger"
				this.alert.icon = error.response.status === 400 ? "travel_info" : "objects_support-17"
				this.alert.message = error.response.data.error.userMessage
				this.visibleAlert()
				if(this.alert.message.includes("faça o login novamente")) {
					this.$store.dispatch('auth/logout');
					this.$router.push('/login');
				}
			})
		},

		async subscriptionNextSeason() {
			await axios.post("/drivers/registration", {
				params: {
					season: "2022/2"
				}
			})
			.then(response => {
				if(response.data.confirm.message.endsWith("encerrada!")) {
					this.alert.type = "danger"
					this.alert.message = response.data.confirm.message
					this.visibleAlert()
					this.alert.icon = "health_ambulance"
					return
				}
				this.alert.type = "success"
				this.alert.message = response.data.confirm.message
				this.visibleAlert()
				this.alert.icon = "ui-2_like"
			}).catch(error => {
				this.alert.type = error.response.status === 400 ? "warning" : "danger"
				this.alert.icon = error.response.status === 400 ? "travel_info" : "objects_support-17"
				this.alert.message = error.response.data.error.userMessage
				this.visibleAlert()
				if(this.alert.message.includes("faça o login novamente")) {
					this.$store.dispatch('auth/logout');
					this.$router.push('/login');
				}
			})
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
