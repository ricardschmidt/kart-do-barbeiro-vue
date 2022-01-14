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
			<div class="category-select" v-show="f2races.length > 0">
				<n-button type="warning" round :simple="category !== 'F1'" @click="changeCategory('F1')">F1</n-button>
				<n-button type="warning" round :simple="category !== 'F2'" @click="changeCategory('F2')">F2</n-button>
			</div>
			<tabs type="primary" vertical class="row race-rank-content" v-if='showF1'>
				<tab-pane v-for="(drivers, index) in f1races" :key="'f1-' + index" :label="'Corrida '+(index + 1)">
					<tables-driver :drivers="drivers" :index="index"></tables-driver>
				</tab-pane>
			</tabs>
			<tabs type="primary" vertical class="row race-rank-content" v-else>
				<tab-pane v-for="(drivers, index) in f2races" :key="'f2-' + index" :label="'Corrida '+(index + 1)">
					<tables-driver :drivers="drivers" :index="index"></tables-driver>
				</tab-pane>
			</tabs>
		</div>
	</article>
</template>
<script>
import axios from 'axios'
import { FulfillingBouncingCircleSpinner } from 'epic-spinners'
import { Tabs, TabPane, Button } from '@/components';
import TablesDriver from '../../components/TablesDriver.vue';

export default {
	data() {
		return {
			urlBase: process.env.VUE_APP_API_URL,
			loading: true,
			f1races: [],
			f2races: [],
			category: "F1",
			showF1: true,
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
		changeCategory(category) {
			if(category !== this.category) {
				this.category = category
				this.showF1 = !this.showF1
			}
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
				let f1corrida = []
				let f2corrida = []
				results.forEach((result) => {
					if(result[keys[(4 + i * 2)]] + result[keys[(5 + i * 2)]] > 0){
						if(result.category === "F1") {
							f1corrida.push( {
								number: result.number,
								driver: result.name,
								points: result[keys[(4 + i * 2)]] + result[keys[(5 + i * 2)]]
							})
						} else {
							f2corrida.push( {
								number: result[keys[0]],
								driver: result[keys[1]],
								points: result[keys[(4 + i * 2)]] + result[keys[(5 + i * 2)]]
							})

						}
					}
				})
				f1corrida.sort((a,b) => (a.points > b.points) ? -1: 1)
				f2corrida.sort((a,b) => (a.points > b.points) ? -1: 1)
				if(f1corrida[0].points !== 0){
					this.f1races.push(f1corrida)
				}
				if(f2corrida.length > 0 && f2corrida[0].points !== 0){
					this.f2races.push(f2corrida)
				}
			}
		}
	},
	components: {
		FulfillingBouncingCircleSpinner,
		Tabs,
    	TabPane,
		TablesDriver,
		[Button.name]: Button,
	}
};
</script>
<style>
	.category-select {
		display: flex;
		justify-content: center;
	}
</style>
