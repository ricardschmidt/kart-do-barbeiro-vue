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
			var url = this.urlBase + "?data=allRaces";//Sua URL
			axios.get(url)
			.then(response => {
				this.races = response.data
				this.loading = false
			})
			.catch(error => {
				this.loading = false
			})
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
