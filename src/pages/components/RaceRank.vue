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
				<tab-pane v-for="(races, index) in f1races" :key="'f1-' + index" :label="races.name">
					<tables-driver :drivers="races.drivers" :index="index"></tables-driver>
				</tab-pane>
			</tabs>
			<tabs type="primary" vertical class="row race-rank-content" v-else>
				<tab-pane v-for="(races, index) in f2races" :key="'f2-' + index" :label="races.name">
					<tables-driver :drivers="races.drivers" :index="index"></tables-driver>
				</tab-pane>
			</tabs>
		</div>
	</article>
</template>
<script>
import axios from 'axios'
import { FulfillingBouncingCircleSpinner } from 'epic-spinners'
import { Tabs, TabPane, Button, TablesDriver } from '@/components';

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
			axios.get(`${this.urlBase}/results`, {
				params: {
					category: "F1",
					season: '2022/1'
				}
			})
			.then(response => {
				this.f1races = response.data
				this.loading = false
			})
			.catch(error => {
				this.loading = false
			})
			axios.get(`${this.urlBase}/results`, {
				params: {
					category: "F2",
					season: '2022/1'
				}
			})
			.then(response => {
				this.f2races = response.data
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
