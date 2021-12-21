<template>
  <div
    class="section section-signup"
    style="background-image: url('https://ras-upload.s3.amazonaws.com/ckdb/img/bg01.jpg'); background-size: cover; background-position: top center; min-height: 700px;"
  >
    <div class="container">
      <div class="row">
        <card class="card-signup" header-classes="text-center" color="orange">
          <template slot="header">
            <h3 class="card-title title-up">Inscreva-se</h3>
            <div class="social-line">
              <a
                href="#"
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
		  <div class="sing-up-form-success" v-if="success" >
			  <p>
                Você concluiu o seu cadastro para o Campeonato do Kart do Barbeiro 2022/1
              </p>
		  </div>
		  <div class="sing-up-form"  v-else >
			  <alert type="danger" dismissible :visible="error" >Preencha todos os campos!</alert>
			<template>
				<fg-input
				id="input-name"
				class="no-border"
				:class="{'has-danger': errors.name}"
				placeholder="Nome..."
				addon-left-icon="now-ui-icons users_circle-08"
				v-model="name"
				>
				</fg-input>

				<fg-input
				id="input-lastname"
				class="no-border"
				:class="{'has-danger': errors.lastName}"
				placeholder="Sobrenome..."
				addon-left-icon="now-ui-icons users_circle-08"
				v-model="lastName"
				>
				</fg-input>

				<fg-input
				id="input-number"
				class="no-border"
				:class="{'has-danger': errors.number}"
				placeholder="Número"
				addon-left-icon="now-ui-icons sport_trophy"
				v-model="number"
				>
				</fg-input>

				<fg-input
				class="no-border"
				:class="{'has-danger': errors.team}"
				placeholder="Equipe"
				addon-left-icon="now-ui-icons ui-1_send"
				v-model="team"
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
	[FormGroupInput.name]: FormGroupInput
  },
  data() {
	  return{
		  urlBase: process.env.VUE_APP_API_URL,
		  typeButton: "neutral",
		  error: false,
		  errors: {},
		  success: false,
		  name: null,
		  lastName: null,
		  number: null,
		  team: null,
		  state: null,
		  email: null,
	  }
  },
  methods: {
		insertDriver() {
			if(this.checkForm()){
				return
			}
			let now = new Date()
			axios.get(this.urlBase, {
				params: {
					action: 'insert',
					table: 'Inscrição',
					data: {
						"Carimbo de data/hora": `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`,
						"Número de Piloto": "#" + this.number,
						"Nome": this.name,
						"Sobrenome": this.lastName,
						"Nome Completo": `${this.name} ${this.lastName}`,
						"Estado": this.state,
						"Equipe": this.team,
						"Cor do Time": "",
						"Foto": "",
						"Insira sua foto aqui":"",
						"Email": this.email,
						"Temporada": "2022/1",
						"Pagamento": false,
						}
				}
			})
			.then(response => {
				this.name = null
				this.lastName = null
				this.number = null
				this.state = null
				this.team = null
				this.email = null
				this.typeButton = "success"
				this.success = true

			})
			.catch(error => {
				this.typeButton = "danger"
			})
		},

		checkForm() {
			this.errors = {}
			if(!this.name) {
				this.errors['name'] = true
			}
			if(!this.lastName) {
				this.errors['lastName'] = true
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

			if (!this.isEmpty(this.errors)) {
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
		}
  }
};
</script>
<style></style>
