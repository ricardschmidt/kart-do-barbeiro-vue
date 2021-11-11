<template>
	<article class="race-rank">
		<div v-if="loading">
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
					<table>
						<tr>
							<th>Pos</th>
							<th>Piloto</th>
							<th>Pts</th>
						</tr>
						<tr class="race-table" v-for="(driver, i) in drivers" :key="index + i">
							<td>{{driver.position}}º</td>
							<td>{{driver.driver}}</td>
							<td>{{driver.points}}</td>
						</tr>
					</table>
				</tab-pane>
			</tabs>
		</div>
	</article>
</template>
<script>
import axios from 'axios'
import { FulfillingBouncingCircleSpinner } from 'epic-spinners'
import { Tabs, TabPane } from '@/components';

export default {
	data() {
		return {
			urlBase: 'https://script.google.com/macros/s/AKfycbwxoyz0nau8QQsb6kCeQlP5NQ0Je5CnwCFUml063cYhjaE6riOj-9NisOLZMrzeQB4T/exec',
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
    	TabPane
	}
};
</script>
<style></style>
