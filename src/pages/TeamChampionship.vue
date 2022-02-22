<template>
	<article class="driver-championship">
		<div class="page-header champion clear-filter" filter-color="orange">
			<parallax
				class="page-header-image"
				style="background-image:url('https://ras-upload.s3.amazonaws.com/ckdb/img/background/bg-team.jpeg')"
			>
			</parallax>
			<div class="container">
				<div class="photo-container">
					<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/logo/logo-white.jpg" alt="Logo KDB" />
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
		<div class="content-championship" v-else>
			<h3 >Temporada de {{ season }}</h3>
			<div class="category-select" v-show="f2teams.length > 0">
				 <n-button type="warning" round :simple="category !== 'F1'" @click="changeCategory('F1')">F1</n-button>
				 <n-button type="warning" round :simple="category !== 'F2'" @click="changeCategory('F2')">F2</n-button>
			</div>
			<div class="champion-table">
				<div class="drivers" v-if='showF1'>
					<team-card v-for="(team, index) in f1teams" :key="'f1' + index" :team="team" :index="index"></team-card>
				</div>
				<div class="drivers" v-else>
					<team-card v-for="(team, index) in f2teams" :key="'f2' + index" :team="team" :index="index"></team-card>
				</div>
			</div>
		</div>
	</article>
</template>
<script>
import axios from 'axios'
import { FulfillingBouncingCircleSpinner } from 'epic-spinners'
import { Button } from '@/components';
import TeamCard from '../components/Cards/TeamCard.vue';
import { page } from 'vue-analytics'

export default {
	data() {
		return {
			urlBase: process.env.VUE_APP_API_URL,
			loading: true,
			f1teams: [],
			f2teams: [],
			season: "2022/1",
			category: "F1",
			showF1: true
		}
	},
	mounted() {
		this.apiRequest();
	},
	methods: {
		track () {
			page('/team-championship')
		},
		changeCategory(category) {
			if(category !== this.category) {
				this.category = category
				this.showF1 = !this.showF1
			}
		},
		apiRequest() {
			axios.get(`${this.urlBase}/teams/`, {
				params: {
					category: 'F1',
					sort: "-currentScore",
					driverPopulate: true
				}
			})
			.then(response => {
				this.f1teams = response.data
				this.loading = false
			})
			.catch(error => {
				this.loading = false
			})
			axios.get(`${this.urlBase}/teams/`, {
				params: {
					category: 'F2',
					sort: "-currentScore",
					driverPopulate: true
				}
			})
			.then(response => {
				this.f2teams = response.data
				this.loading = false
			})
			.catch(error => {
				this.loading = false
			})
		},
		categorySplit(teams) {
			this.f1teams = teams.filter(function(value, index, arr){
				return value.category === "F1";
			});
			this.f2teams = teams.filter(function(value, index, arr){
				return value.category === "F2";
			});
		}
	},
	components: {
		FulfillingBouncingCircleSpinner,
		TeamCard,
		[Button.name]: Button,
	}
};
</script>
<style></style>
