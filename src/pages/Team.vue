<template>
	<article class="driver-championship">
		<div class="page-header champion clear-filter" filter-color="orange">
			<parallax
				class="page-header-image"
				style="background-image:url('https://ras-upload.s3.amazonaws.com/ckdb/img/background/bg-teams.jpg')"
			>
			</parallax>
			<div class="container">
				<h2 class="championship-title">Equipes Participantes</h2>
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
			<div class="champion-table">
				<div class="drivers" >
					<team-info-card v-for="(team, index) in teams" :key="index" :team="team"></team-info-card>
				</div>
			</div>
		</div>
	</article>
</template>
<script>
import axios from 'axios'
import { FulfillingBouncingCircleSpinner } from 'epic-spinners'
import { Button } from '@/components';
import TeamInfoCard from '../components/Cards/TeamInfoCard.vue';

export default {
	data() {
		return {
			urlBase: process.env.VUE_APP_API_URL,
			loading: true,
			teams: [],
		}
	},
	mounted() {
		this.apiRequest();
	},
	methods: {
		apiRequest() {
			axios.get(`${this.urlBase}/teams`, {
				params: {
					sort: "name",
					expand: true
				}
			})
			.then(response => {
				this.teams = response.data;
				this.loading = false
			})
			.catch(error => {
				this.loading = false
			})
		},
	},
	components: {
		FulfillingBouncingCircleSpinner,
		TeamInfoCard,
		[Button.name]: Button,
	}
};
</script>
<style></style>
