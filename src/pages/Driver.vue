<template>
  	<article class="driver-championship">
		<div class="page-header champion clear-filter" filter-color="black">
			<parallax
				class="page-header-image"
				style="background-image:url('https://ras-upload.s3.amazonaws.com/ckdb/img/background/bg-driver-info.jpeg')"
			>
			</parallax>
			<div class="container">
				<h2 class="championship-title">Pilotos Participantes</h2>
			</div>
		</div>
		<div class="loading-spinner" v-if="loading">
			<fulfilling-bouncing-circle-spinner
				:animation-duration="4000"
				:size="60"
				color="#118AB2"
			/>
		</div>
		<div class="content-drivers" v-else>
			<div class="champion-table" >
				<div class="driver-info">
					<div class="drivers">
						<driver-info-card v-for="(driver, index) in drivers" :key="index" :driver="driver"></driver-info-card>
					</div>
				</div>
			</div>
		</div>
	</article>
</template>
<script>
import axios from 'axios'
import { FulfillingBouncingCircleSpinner } from 'epic-spinners'
import DriverInfoCard from '../components/Cards/DriverInfoCard.vue';
import { page } from 'vue-analytics'

export default {
	name: 'driver',
	data() {
		return {
			urlBase: process.env.VUE_APP_API_URL,
			loading: true,
			drivers: [],
		}
	},
	mounted() {
		this.apiRequest();
	},
	methods: {
		track () {
			page('/driver')
		},
		apiRequest() {
			axios.get(`${this.urlBase}/drivers`, {
				params: {
					sort: 'nickname',
					teamPopulate: true
				}
			})
			.then(response => {
				this.drivers = response.data
				this.loading = false
			})
			.catch(error => {
				this.loading = false
			})
		}
	},
	components: {
		FulfillingBouncingCircleSpinner,
		DriverInfoCard,
	}
};
</script>
<style></style>
