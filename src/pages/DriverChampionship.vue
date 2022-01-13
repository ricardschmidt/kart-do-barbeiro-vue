<template>
	<article class="driver-championship">
		<div class="page-header champion clear-filter" filter-color="black">
			<parallax
				class="page-header-image"
				style="background-image:url('https://ras-upload.s3.amazonaws.com/ckdb/img/background/bg-driver.jpg')"
			>
			</parallax>
			<div class="container">
				<div class="photo-container">
					<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/logo/logo-original.jpg" alt="" />
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
			<div class="category-select" v-show="f2drivers.length > 0">
				 <n-button type="warning" round :simple="category !== 'F1'" @click="changeCategory('F1')">F1</n-button>
				 <n-button type="warning" round :simple="category !== 'F2'" @click="changeCategory('F2')">F2</n-button>
			</div>
			<div class="champion-table" >
				<div class="drivers" v-if='showF1'>
					<driver-card v-for="(driver, index) in f1drivers" :key="'f1' + index" :driver="driver"></driver-card>
				</div>
				<div class="drivers" v-else>
					<driver-card v-for="(driver, index) in f2drivers" :key="'f2' + index" :driver="driver"></driver-card>
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
			f1drivers: [],
			f2drivers: [],
			season: "2021/1",
			category: "F1",
			showF1: true
		}
	},
	mounted() {
		this.apiRequest();
	},
	methods: {
		newRequest(season) {
			if(season !== this.season) {
				this.loading = true;
				this.category = "F1"
				this.showF1 = true
				this.season = season
				this.apiRequest()
			}
		},
		changeCategory(category) {
			if(category !== this.category) {
				this.category = category
				this.showF1 = !this.showF1
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
				this.categorySplit(response.data.data)
				this.loading = false
			})
			.catch(error => {
				this.loading = false
			})
		},
		categorySplit(drivers) {
			this.f1drivers = drivers.filter(function(value, index, arr){
				return value.category === "F1";
			});
			this.f2drivers = drivers.filter(function(value, index, arr){
				return value.category === "F2";
			});
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
