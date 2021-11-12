<template>
	<article class="driver-championship">
		<div class="page-header champion clear-filter" filter-color="orange">
			<parallax
				class="page-header-image"
				style="background-image:url('img/bg20.jpg')"
			>
			</parallax>
			<div class="container">
				<div class="photo-container">
					<img src="img/largada.jpg" alt="" />
				</div>
				<h2 class="championship-title">Classificação Geral</h2>
			</div>
		</div>
		<div v-if="loading">
			<fulfilling-bouncing-circle-spinner
				:animation-duration="4000"
				:size="60"
				color="#118AB2"
			/>
		</div>
		<div class="champion-table" v-else>
			<tables-driver :drivers="drivers" :index="0"></tables-driver>
		</div>
	</article>
</template>
<script>
import axios from 'axios'
import { FulfillingBouncingCircleSpinner } from 'epic-spinners'
import TablesDriver from '../components/TablesDriver.vue';

export default {
	data() {
		return {
			urlBase: process.env.VUE_APP_API_URL,
			loading: true,
			drivers: []
		}
	},
	mounted() {
		this.rankGeral();
	},
	methods: {
		rankGeral() {
			var url = this.urlBase + "?data=geral";//Sua URL
			axios.get(url)
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
		TablesDriver,
	}
};
</script>
<style></style>
