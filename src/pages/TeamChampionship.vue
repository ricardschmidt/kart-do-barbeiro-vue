<template>
	<article class="driver-championship">
		<div class="page-header champion clear-filter" filter-color="orange">
			<parallax
				class="page-header-image"
				style="background-image:url('https://ras-upload.s3.amazonaws.com/ckdb/img/bg05.jpeg')"
			>
			</parallax>
			<div class="container">
				<div class="photo-container">
					<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/logo.png" alt="Logo KDB" />
				</div>
				<h2 class="championship-title">Classificação Geral de Equipes</h2>
			</div>
		</div>
		<div class="loading-spinner" v-if="loading">
			<fulfilling-bouncing-circle-spinner
				:animation-duration="4000"
				:size="60"
				color="#118AB2"
			/>
		</div>
		<div class="champion-table" v-else>
			<div class="drivers">
				<team-card v-for="(team, index) in teams" :key="index" :team="team"></team-card>
			</div>
		</div>
	</article>
</template>
<script>
import axios from 'axios'
import { FulfillingBouncingCircleSpinner } from 'epic-spinners'
//import { Radio } from '@/components';
import TeamCard from '../components/Cards/TeamCard.vue';

export default {
	data() {
		return {
			urlBase: process.env.VUE_APP_API_URL,
			loading: true,
			teams: [],
			radios: {
				radioOn: '2022/1',
				radioOff: '2022/2'
			}
		}
	},
	mounted() {
		this.getDrivers();
	},
	methods: {
		getDrivers() {
			axios.get(this.urlBase, {
				params: {
					action: 'read',
					table: 'Campeonato de Equipes',
					season: this.radios.radioOn,
				}
			})
			.then(response => {
				this.teams = response.data.data
				this.loading = false
			})
			.catch(error => {
				this.loading = false
			})
		}
	},
	components: {
		FulfillingBouncingCircleSpinner,
		TeamCard,
		//[Radio.name]: Radio,
	}
};
</script>
<style></style>
