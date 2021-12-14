<template>
	<article class="driver-championship">
		<div class="page-header champion clear-filter" filter-color="orange">
			<parallax
				class="page-header-image"
				style="background-image:url('https://ras-upload.s3.amazonaws.com/ckdb/img/bg02.jpg')"
			>
			</parallax>
			<div class="container">
				<div class="photo-container">
					<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/logo.jpg" alt="" />
				</div>
				<h2 class="championship-title">Classificação Geral</h2>
			</div>
		</div>
		<div class="loading-spinner" v-if="loading">
			<fulfilling-bouncing-circle-spinner
				:animation-duration="4000"
				:size="60"
				color="#118AB2"
			/>
		</div>
		<div class="content-championship" v-else>
			<div class="content">
				 <n-button type="primary" round :simple="season !== '2021/1'" @click="newRequest('2021/1')">Temporada 2021/1</n-button>
				 <n-button type="primary" round :simple="season !== '2022/1'" @click="newRequest('2022/1')">Temporada 2022/1</n-button>
			</div>
			<h3 >Temporada de {{ season }}</h3>
			<div class="champion-table" >
				<div class="drivers">
					<driver-card v-for="(driver, index) in drivers" :key="index" :driver="driver"></driver-card>
				</div>
			</div>
		</div>
	</article>
</template>
<script>
import axios from 'axios'
import { FulfillingBouncingCircleSpinner } from 'epic-spinners'
import DriverCard from '../components/Cards/DriverCard.vue';
import { Button } from '@/components';

export default {
	data() {
		return {
			urlBase: process.env.VUE_APP_API_URL,
			loading: true,
			drivers: [],
			season: "2021/1",
		}
	},
	mounted() {
		this.apiRequest();
	},
	methods: {
		newRequest(season) {
			if(season !== this.season) {
				this.loading = true;
				this.season = season
				this.apiRequest()
			}
		},
		apiRequest() {
			axios.get(this.urlBase, {
				params: {
					action: 'read',
					table: 'Campeonato de Pilotos',
					season: this.season,
				}
			})
			.then(response => {
				this.drivers = response.data.data
				this.loading = false
			})
			.catch(error => {
				this.loading = false
			})
		}
	},
	components: {
		FulfillingBouncingCircleSpinner,
		DriverCard,
		[Button.name]: Button,
	}
};
</script>
<style></style>
