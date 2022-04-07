<template>
	<div>
		<div class="page-header clear-filter" filter-color="blue">
		<parallax
			class="page-header-image"
			style="background-image:url('https://ras-upload.s3.amazonaws.com/ckdb/img/background/bg-deposition.jpg')"
		>
		</parallax>
		<div class="container">
			<div class="photo-container">
			<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/logo/logo-original.jpg" alt="Logo CKDB" />
			</div>
			<h3 class="title">Kart do Barbeiro</h3>
			<p class="category">Estatísticas</p>
			<div class="content">
			<div class="social-description">
				<h2>{{seasonsNum}}</h2>
				<p>Temporadas</p>
			</div>
			<div class="social-description">
				<h2>{{driversNum}}</h2>
				<p>Pilotos</p>
			</div>
			<div class="social-description">
				<h2>{{racesNum}}</h2>
				<p>Corridas</p>
			</div>
			</div>
		</div>
		</div>
		<div class="section">
			<div class="loading-spinner" v-if="loading">
				<fulfilling-bouncing-circle-spinner
					:animation-duration="4000"
					:size="60"
					color="#118AB2"
				/>
			</div>
			<div class="statistics-content" v-else>
				<div>
					<h2>Melhores Voltas</h2>
					<statistics-table :drivers="bestLaps" :index="0" suffix="x" cardColor="yellow" attribute="bestlap"></statistics-table>
				</div>
				<div>
					<h2>Número de Podiuns</h2>
					<statistics-table :drivers="podiuns" :index="1" suffix="x" cardColor="green" attribute="podium"></statistics-table>
				</div>
				<div>
					<h2>Número de Pole Position</h2>
					<statistics-table :drivers="polepositions" :index="2" suffix="x" attribute="poleposition"></statistics-table>
				</div>
				<div>
					<h2>Pontuação Geral</h2>
					<statistics-table :drivers="points" :index="3" suffix="pts" cardColor="red" attribute="allScore"></statistics-table>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
import { FulfillingBouncingCircleSpinner } from 'epic-spinners'
import { StatisticsTable } from '@/components';

export default {
	name: 'statistics',
	bodyClass: 'profile-page',
	components: {
		FulfillingBouncingCircleSpinner,
		StatisticsTable
	},
	data() {
		return {
			urlBase: process.env.VUE_APP_API_URL,
			driversNum: process.env.VUE_APP_DRIVERS_NUM,
			racesNum: process.env.VUE_APP_RACES_NUM,
			seasonsNum: process.env.VUE_APP_SEASONS_NUM,
			loading: true,
			statistics: [],
			bestLaps: [],
			points: [],
			polepositions: [],
			podiuns: [],
		}
	},
	mounted() {
		this.getStatistics()
	},
 	methods: {
		getStatistics() {
			axios.get(`${this.urlBase}/drivers/`, {
				params: {
					select: 'nickname,image,poleposition,bestlap,allScore,podium'
				}
			})
			.then(response => {
				this.statistics = response.data
				this.loading = false
				this.createList();
			})
			.catch(error => {
				this.loading = false
			})
		},

		createList() {
			this.points = this.statistics.filter(function(value, index, arr){
				return value.allScore >= 1;
			});
			this.points.sort((a,b) => (a.allScore > b.allScore) ? -1: 1)
			this.bestLaps = this.statistics.filter(function(value, index, arr){
				return value.bestlap >= 1;
			});
			this.bestLaps.sort((a,b) => (a.bestlap > b.bestlap) ? -1: 1)
			this.polepositions = this.statistics.filter(function(value, index, arr){
				return value.poleposition >= 1;
			});
			this.polepositions.sort((a,b) => (a.poleposition > b.poleposition ? -1: 1))
			this.podiuns = this.statistics.filter(function(value, index, arr){
				return value.podium >= 1;
			});
			this.podiuns.sort((a,b) => (a.podium > b.podium ? -1: 1))
		}
	},
};
</script>
<style></style>
