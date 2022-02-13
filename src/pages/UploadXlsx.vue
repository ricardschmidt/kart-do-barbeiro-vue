<template>
	<div>
		<div class="page-header page-header-small">
			<parallax
				class="page-header-image"
				style="background-image: url('https://ras-upload.s3.amazonaws.com/ckdb/img/background/bg-xlsx.jpg')"
			>
			</parallax>
		<div class="content-center">
			<div class="container">
				<h1 class="title">Cadastre suas Baterias</h1>
			</div>
		</div>
		</div>
		<div class="auth" v-if="password !== 'UPLOAD'">
			<fg-input
				id="input-phone"
				class="no-border"
				placeholder="Password"
				addon-left-icon="now-ui-icons ui-1_lock-circle-open"
				type="password"
				v-model="password"
			>
			</fg-input>
		</div>
		<div class="section create-race-xlsx" v-else>
			<alert type="danger" dismissible :visible="error">
				{{errorMsg}}
			</alert>
			<div class="container">
				<fg-input
					id="input-phone"
					class="no-border"
					placeholder="Nome"
					addon-left-icon="now-ui-icons text_caps-small"
					v-model="name"
				>
				</fg-input>
				<div class="input-line">
					<fg-input
						id="input-phone"
						class="no-border"
						placeholder="Categoria"
						addon-left-icon="now-ui-icons design_bullet-list-67"
						v-model="category"
					>
					</fg-input>
					<fg-input
						id="input-phone"
						class="no-border"
						placeholder="Temporada"
						addon-left-icon="now-ui-icons ui-1_calendar-60"
						v-model="season"
					>
					</fg-input>
				</div>
				<div class="input-line">
					<fg-input
						id="input-phone"
						class="no-border"
						placeholder="Bateria"
						addon-left-icon="now-ui-icons objects_spaceship"
						v-model="bateria"
					>
					</fg-input>
					<fg-input
						id="input-phone"
						class="no-border"
						placeholder="Melhor Volta"
						addon-left-icon="now-ui-icons sport_user-run"
						v-model="bestlap"
					>
					</fg-input>
				</div>
					<fg-input
						v-show="bateria === '2' ? false : true"
						id="input-phone"
						class="no-border"
						placeholder="Pole Position"
						addon-left-icon="now-ui-icons clothes_tie-bow"
						v-model="poleposition"
					>
					</fg-input>
				<attachment ref="attachment" @change="handleFileUpload"></attachment>
				<div class="text-center">
					<n-button id="submit-file" type="primary" round size="lg" @click="submitFile" >Cadastrar Bateria</n-button>
				</div>
			</div>
			<div class="loading-spinner" v-if="loading">
				<fulfilling-bouncing-circle-spinner
					:animation-duration="4000"
					:size="60"
					color="#118AB2"
				/>
			</div>
			<div class="section-no-exist-drivers" v-show="noExistDrivers.length > 0">
				<h3 class="drivers-title">Pilotos não Cadastrados</h3>
				<driver-race-table :drivers="noExistDrivers" :index="0"></driver-race-table>
			</div>
			<div class="section-race" v-show="race.drivers.length > 0">
				<h3 class="drivers-title">Bateria Cadastrada</h3>
				<div class="text-center">
					<p>Nome: {{race.name}}</p>
					<div class="inline-info">
						<p>Categoria: {{race.category}}</p>
						<p>Temporada: {{race.season}}</p>
						<p>Bateria: {{race.bateria}}</p>
					</div>
				</div>
				<driver-race-table :drivers="race.drivers" :index="1"></driver-race-table>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
import { FulfillingBouncingCircleSpinner } from 'epic-spinners'
import { Alert, Button, FormGroupInput, Attachment } from '@/components';
import { DriverRaceTable } from '@/components';

export default {
	name: 'upload-xlsx',
	bodyClass: 'landing-page',
	components: {
		Alert,
		DriverRaceTable,
		[Button.name]: Button,
		[FormGroupInput.name]: FormGroupInput,
		attachment: Attachment,
		FulfillingBouncingCircleSpinner,
	},
	data() {
		return {
			urlBase: process.env.VUE_APP_API_URL,
			name: '',
			bateria: '',
			season: '',
			category: '',
			poleposition: '',
			bestlap: '',
			noExistDrivers: [],
			race: {name: "", bateria: "", season: "", category: "", drivers: []},
			errorMsg: null,
			error: false,
			file: null,
			password: '',
			loading: false
		};
	},
	methods: {
		handleFileUpload (file) {
			this.file = file
		},
		submitFile() {
			this.noExistDrivers = []
			this.race = {name: "", bateria: "", season: "", category: "", drivers: []}
			this.errorMsg = null
			let formData = new FormData();
			formData.append('file', this.file);
			formData.append('name', this.name);
			formData.append('bateria', this.bateria);
			formData.append('season', this.season);
			formData.append('category', this.category);
			formData.append('bestlap', this.bestlap);
			formData.append('poleposition', this.poleposition);

			this.loading = true
			axios.post(`${this.urlBase}/races/xlsx`, formData)
			.then((res) => {
				this.error = false
				if(res.data) {
					this.loading = false
					this.race = res.data.race
					this.noExistDrivers = res.data.driverNoExist
				}
			}).catch(error => {
				this.error = true
				this.errorMsg = error.response.data.error.messageUser
			});

			this.clearFieds()
		},
		clearFieds() {
			this.name = ''
			this.bateria = ''
			this.season = ''
			this.category = ''
			this.poleposition = ''
			this.bestlap = ''
			this.file = null
			this.$refs.attachment.file = null;
		}
	}
};
</script>
<style></style>
