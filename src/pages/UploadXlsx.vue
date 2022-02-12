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
	<div class="section create-race-xlsx">
		<div class="container">
			<fg-input
				id="input-phone"
				class="no-border"
				placeholder="Nome"
				addon-left-icon="now-ui-icons tech_mobile"
				v-model="name"
			>
			</fg-input>
			<div class="input-line">
				<fg-input
					id="input-phone"
					class="no-border"
					placeholder="Categoria"
					addon-left-icon="now-ui-icons tech_mobile"
					v-model="category"
				>
				</fg-input>
				<fg-input
					id="input-phone"
					class="no-border"
					placeholder="Temporada"
					addon-left-icon="now-ui-icons tech_mobile"
					v-model="season"
				>
				</fg-input>
			</div>
			<div class="input-line">
				<fg-input
					id="input-phone"
					class="no-border"
					placeholder="Bateria"
					addon-left-icon="now-ui-icons tech_mobile"
					v-model="bateria"
				>
				</fg-input>
				<fg-input
					id="input-phone"
					class="no-border"
					placeholder="Melhor Volta"
					addon-left-icon="now-ui-icons tech_mobile"
					v-model="bestlap"
				>
				</fg-input>
			</div>
				<fg-input
					v-show="bateria === '2' ? false : true"
					id="input-phone"
					class="no-border"
					placeholder="Pole Position"
					addon-left-icon="now-ui-icons tech_mobile"
					v-model="poleposition"
				>
				</fg-input>
			<attachment @change="handleFileUpload"></attachment>
			<div class="text-center">
				<n-button id="submit-file" type="primary" round size="lg" @click="submitFile" >Cadastrar Bateria</n-button>
			</div>
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
import { Button, FormGroupInput, Attachment } from '@/components';
import { DriverRaceTable } from '@/components';

export default {
	name: 'upload-xlsx',
	bodyClass: 'landing-page',
	components: {
		DriverRaceTable,
		[Button.name]: Button,
		[FormGroupInput.name]: FormGroupInput,
		attachment: Attachment,
	},
	data() {
		return {
			name: 'Corrida 2020',
			bateria: '1',
			season: '2020',
			category: 'F1',
			poleposition: 'Fernando Bodra',
			bestlap: 'Rafael Laurentino',
			noExistDrivers: [],
			race: {name: "", bateria: "", season: "", category: "", drivers: []},
			errorMsg: '',
			file: null,
		};
	},
	methods: {
		handleFileUpload (file) {
			this.file = file
		},
		submitFile() {
			let formData = new FormData();
			formData.append('file', this.file);
			formData.append('name', this.name);
			formData.append('bateria', this.bateria);
			formData.append('season', this.season);
			formData.append('category', this.category);
			formData.append('bestlap', this.bestlap);
			formData.append('poleposition', this.poleposition);

			axios.post('http://localhost:3000/races/xlsx', formData)
			.then((res) => {
				if(res.data) {
					this.race = res.data.race
					this.noExistDrivers = res.data.driverNoExist
				}
			}).catch(error => {
				this.errorMsg = error
			});
		},
	}
};
</script>
<style></style>
