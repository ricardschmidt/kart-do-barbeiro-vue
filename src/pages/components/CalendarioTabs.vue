<template>
  <div class="section section-tabs" style="background-image:url('https://ras-upload.s3.amazonaws.com/ckdb/img/background/bg-calendario.jpg')">
    <div class="container">
      <div class="title">
        <h3 id="calendar">Calendário de 2022</h3>
      </div>
      <div class="row">
        <div class="col-md-12 ml-auto col-xl-12 mr-auto">
          <!-- Tabs with Background on Card -->
          <div class="card calendario-tabs-content">
            <tabs
              centered
              type="neutral"
              tab-nav-wrapper-classes="card-header"
              tab-content-classes="card-body text-center"
              data-background-color="orange"
			  v-model="activeTab"
            >
				<tab-pane label="James Hunt">
					<template slot="label">
					<i class="now-ui-icons sport_trophy"></i> James Hunt
					</template>
					<div class="tab-tracado d-md-flex">
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/tracks/t-james.png" alt="">
						<div>
							<p class="track-date">Data:<span>29/01/2022</span> 16:00hrs</p>
							<p>
							Esta é a Monza do calendário, uma pista muito rápida, mas
							que cobra seu preço sendo muito desgastante, os pilotos
							precisam prestar muita atenção na parte sinuosa para não
							perder a posição na curva após a reta oposta.
							</p>
						</div>
					</div>
				</tab-pane>
				<tab-pane label="Hamilton">
					<template slot="label">
					<i class="now-ui-icons sport_trophy"></i> Hamilton
					</template>
					<div class="tab-tracado d-md-flex">
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/tracks/t-hamilton.png" alt="">
						<div>
							<p class="track-date">Data:<span>19/02/2022</span> 15:00hrs</p>
							<p>
							Este é um traçado novo, ainda desconhecido, mas montado
							para ser rápido com pontos estratégicos de ultrapassagem
							que não permite muitos erros. Este traçado não exige
							muita técnica, porém é necessário defender bem sua posição.
							</p>
						</div>
					</div>
				</tab-pane>
				<tab-pane label="Ayrton Senna">
					<template slot="label">
					<i class="now-ui-icons sport_trophy"></i> Ayrton Senna
					</template>
					<div class="tab-tracado d-md-flex">
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/tracks/t-senna.png" alt="">
						<div>
							<p class="track-date">Data:<span>27/03/2022</span> 16:00hrs</p>
							<p>
							Este é o traçado que mostra a habilidade dos pilotos, com
							várias chicanes estreitas é necessário escolher muito bem a
							hora de ultrapassar, para não perder a chance, e acabar se
							enroscando na próxima curva.
							</p>
						</div>
					</div>
				</tab-pane>
				<tab-pane label="Beto Carreiro">
					<template slot="label">
					<i class="now-ui-icons sport_trophy"></i> Beto Carreiro
					</template>
					<div class="tab-tracado d-md-flex">
						<img style="padding: 60px 0 60px 0;"
							 src="https://ras-upload.s3.amazonaws.com/ckdb/img/tracks/t-beto-carreiro.png"
							 alt="Kartodromo do Beto Carreiro">
						<div>
							<p class="track-date">Data:<span>23/04/2022</span> 15:00hrs</p>
							<p>
							A pista do Kartódromo Internacional do Beto Carreiro
							é a sede de diversos campeonatos organizados na região
							sul, normalmente recebendo o sul-brasileiro de kart,
							corrida das estrelas entre vários outros.
							</p>
						</div>
					</div>
				</tab-pane>
				<tab-pane label="Verstappen">
					<template slot="label">
					<i class="now-ui-icons sport_trophy"></i>Verstappen
					</template>
					<div class="tab-tracado d-md-flex">
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/tracks/t-verstappen.png" alt="">
						<div>
							<p class="track-date">Data:<span>22/05/2022</span> 15:00hrs</p>
							<p>
							O traçado que promete ser o mais rápido da temporada,
							com curvas rápidas e poucos pontos de ultrapassagem
							na frenagem, um traçado que a força do motor e a
							habilidade de saída de curva irão contar bastante.
							</p>
						</div>
					</div>
				</tab-pane>
				<tab-pane label="Tradicional">
					<template slot="label">
					<i class="now-ui-icons sport_trophy"></i> Tradicional
					</template>
					<div class="tab-tracado d-md-flex">
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/tracks/t-tradicional.png" alt="Traçado Tradicional">
						<div>
							<p class="track-date">Data:<span>25/06/2022</span> 15:00hrs</p>
							<p>
							O traçado tradicional do Kartódromo dos Ingleses é o mais
							conhecido por todos, um traçado que possibilita boas brigas
							por posição, com curvas de alta velocidade, chicanes
							estreitas e longas retas, além de proporcionar muita diversão.
							</p>
						</div>
					</div>
				</tab-pane>
            </tabs>
			<div class="text-center">
				<n-button type="info" size="lg" @click="handleConfirmation" @click.native="modals.classic = true">
					Verificar confirmados da próxima etapa.
				</n-button>
			</div>
			<modal :show.sync="modals.classic" headerClasses="justify-content-center">
				<alert :type="alert.type" dismissible :visible="alert.visible">
					<i class="now-ui-icons" :class="alert.icon"></i>
					{{alert.message}}
				</alert>
				<h4 slot="header" class="title title-up">Lista de Confirmados <br/> {{confirm.name}}</h4>
				<h5>F1</h5>
				<p v-for="(driver, i) in confirm.drivers" :key="'driver-'+i">
					{{driver.endsWith("F1") ? driver : null}}
				</p>
				<h5>F2</h5>
				<p v-for="(driver, i) in confirm.drivers" :key="'driver2-'+i">
					{{driver.endsWith("F2") ? driver : null}}
				</p>
				<div>
					<h5>Pilotos Etapa Única</h5>
					<p v-for="(driver, i) in confirm.drivers" :key="'driver2-'+i">
						{{driver.endsWith("A Definir") ? driver : null}}
					</p>
				</div>
				<template slot="footer">
					<n-button v-show="currentUser" type="success" @click="confirmRace">
						<i class="now-ui-icons ui-1_check"></i> Confirmar Etapa
					</n-button>
					<n-button v-show="currentUser" type="danger" @click="deleteConfirmRace">
						<i class="now-ui-icons ui-1_simple-remove"></i> Remover Confirmação
					</n-button>
					<n-button type="info" @click.native="modals.classic = false">Close</n-button>
				</template>
			</modal>
          </div>
          <!-- End Tabs on plain Card -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs, TabPane, Modal, Button, Alert } from '@/components';
import { getUser } from '../../services/auth'
import axios from '../../services/api'

export default {
	components: {
		Alert,
		Tabs,
		Modal,
		TabPane,
		[Button.name]: Button,
	},
	data() {
		return {
			activeTab: this.getActiveTab(),
			confirm: "",
			alert: {
				type: "success",
				visible: false,
				message: "",
				icon: "objects_support-17"
			},
			modals: {
				classic: false,
			},
		}
	},
	mounted() {
		this.handleConfirmation()
	},
	computed: {
		currentUser() {
			return getUser()
		}
	},
	methods: {
		getActiveTab() {
			if(new Date().getTime() < new Date("2022-02-19")) {
				return "Hamilton"
			} else if(new Date().getTime() < new Date("2022-03-27")) {
				return  "Ayrton Senna"
			} else if(new Date().getTime() < new Date("2022-04-23")) {
				return  "Beto Carreiro"
			} else if(new Date().getTime() < new Date("2022-05-22")) {
				return  "Verstappen"
			} else if(new Date().getTime() < new Date("2022-06-25")) {
				return  "Tradicional"
			}
		},

		handleConfirmation() {
			axios.get("/confirm/next", {
				params: {
					name: this.activeTab
				}
			})
			.then(response => {
				this.confirm = response.data
			})
			.catch(error => {
				this.alert.type = error.response.status < 500 ? "warning" : "danger"
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
				this.alert.icon = "ui-2_like"
				this.visibleAlert()
				this.handleConfirmation()
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

		visibleAlert() {
			this.alert.visible = true
			setTimeout(() => {
				this.alert.visible = false
			}, 5000);
		},
	}
};
</script>
<style>
.tab-content.tab-content-padding {
  padding: 20px;
}
</style>
