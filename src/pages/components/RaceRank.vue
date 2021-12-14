<template>
	<article class="race-rank">
		<div class="loading-spinner" v-if="loading">
			<fulfilling-bouncing-circle-spinner
				:animation-duration="4000"
				:size="60"
				color="#118AB2"
			/>
		</div>
		<div style="width: 100%" v-else>
			<h2 class="race-rank-title">Classificação por Corridas</h2>
			<tabs type="primary" vertical class="row race-rank-content">
				<tab-pane v-for="(drivers, index) in races" :key="index" :label="'Corrida '+(index + 1)">
					<tables-driver :drivers="drivers" :index="index"></tables-driver>
				</tab-pane>
			</tabs>
		</div>
	</article>
</template>
<script>
import axios from 'axios'
import { FulfillingBouncingCircleSpinner } from 'epic-spinners'
import { Tabs, TabPane } from '@/components';
import TablesDriver from '../../components/TablesDriver.vue';

export default {
	data() {
		return {
			urlBase: process.env.VUE_APP_API_URL,
			loading: true,
			races: [],
		}
	},
	mounted() {
		this.raceRank()
	},
	methods: {
		raceRank() {
			axios.get(this.urlBase, {
				params: {
					action: 'read',
					table: 'Pontuação Pilotos',
					season: '2021/1'
				}
			})
			.then(response => {
				this.createRaceData(response.data.data)
				this.loading = false
			})
			.catch(error => {
				this.loading = false
			})
		},

		createRaceData(results) {
			let keys = Object.keys(results[0])
			let count = 0
			keys.forEach((key) => {
				if(key.startsWith('bateria')){
					count++;
				}
			})
			count = count/2
			for(let i = 0; i < count; i++) {
				let corrida = []
				results.forEach((result) => {
					if(result[keys[(3 + i * 2)]] + result[keys[(4 + i * 2)]] > 0){
						corrida.push( {
							number: result[keys[0]],
							driver: result[keys[1]],
							points: result[keys[(3 + i * 2)]] + result[keys[(4 + i * 2)]]
						})
					}
				})
				corrida.sort((a,b) => (a.points > b.points) ? -1: 1)
				if(corrida[0].points !== 0){
					this.races.push(corrida)
				}
			}
		}
	},
	components: {
		FulfillingBouncingCircleSpinner,
		Tabs,
    	TabPane,
		TablesDriver,
	}
};
</script>
<style></style>
