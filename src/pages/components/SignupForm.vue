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
                href="#"
                class="btn btn-neutral btn-youtube btn-icon btn-lg btn-round"
              >
                <i class="fab fa-youtube"></i>
              </a>
              <a
                href="https://www.instagram.com/kartdobarbeiro.kdb"
                class="btn btn-neutral btn-instagram btn-icon btn-round"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </template>
          <template>
            <fg-input
              class="no-border"
              placeholder="Nome..."
              addon-left-icon="now-ui-icons users_circle-08"
			  v-model="name"
            >
            </fg-input>

            <fg-input
              class="no-border"
              placeholder="Sobrenome..."
              addon-left-icon="now-ui-icons users_circle-08"
			  v-model="lastName"
            >
            </fg-input>

            <fg-input
              class="no-border"
              placeholder="Número"
              addon-left-icon="now-ui-icons sport_trophy"
			  v-model="number"
            >
            </fg-input>

            <fg-input
              class="no-border"
              placeholder="Equipe"
              addon-left-icon="now-ui-icons ui-1_send"
			  v-model="team"
            >
            </fg-input>

            <fg-input
              class="no-border"
              placeholder="Estado"
              addon-left-icon="now-ui-icons location_world"
			  v-model="state"
            >
            </fg-input>

          </template>
          <div class="card-footer text-center">
            <n-button :type="typeButton" round size="lg" v-on:click="insertDriver" >Inscrever-se</n-button>
          </div>
        </card>
      </div>
      <div class="col text-center">
        <router-link
          to="/login"
          class="btn btn-simple btn-round btn-white btn-lg"
        >
          View Login Page
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { Card, FormGroupInput, Button } from '@/components';

export default {
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
	  return{
		  urlBase: process.env.VUE_APP_API_URL,
		  typeButton: "neutral",
		  name: "",
		  lastName: "",
		  number: "",
		  team:"",
		  state: "",
	  }
  },
  methods: {
		insertDriver() {
			axios.get(this.urlBase, {
				params: {
					action: 'insert',
					table: 'Inscrição',
					data: {
						"Carimbo de data/hora": Date.getTime(),
						"Número de Piloto": "#" + this.number,
						"Nome": this.name,
						"Sobrenome": this.lastName,
						"Estado": this.state,
						"Equipe": this.team,
						"Cor do Time": "",
						"Foto": "",
						"Insira sua foto aqui":"",
						"Temporada": "2022/1",
						"Pagamento": false
						}
				}
			})
			.then(response => {
				this.drivers = response.data.data
				this.name = ""
				this.lastName = ""
				this.number = ""
				this.state = ""
				this.team = ""

			})
			.catch(error => {
				this.typeButton = "danger"
			})
		}
  }
};
</script>
<style></style>
