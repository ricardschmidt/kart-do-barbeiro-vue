<template>
	<article class="rank-geral">
		<div class="loading-spinner" v-if="loading">
			<fulfilling-bouncing-circle-spinner
				:animation-duration="4000"
				:size="60"
				color="#118AB2"
			/>
		</div>
		<div style="width: 100%" v-else>
			<h2 class="rank-title">Classificação Geral F1</h2>
			<ol class="podium-rank">
				<li :id="'li-'+(index+1)" v-for="(driver, index) in f1drivers" :key="'f1'+index">
					<a :href="'#li-'+(index+1)">
						<div class="container">
							<div class="driver-image" :style="'border-color:'+driver.team_id.color">
								<img :src="driver.image" alt="Foto do Piloto">
								<svg version="1.1" :id="'place-'+(index+1)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 180 180" enable-background="new 0 0 180 180" xml:space="preserve"><path d="M124.6,90.1l4.2-0.3l0.1-4.3l4.2-0.9l-0.5-4.3l4.1-1.4l-1-4.2l3.9-1.9l-1.5-4l3.6-2.3l-2-3.8l3.3-2.8l-2.5-3.5l2.9-3.2l-2.9-3.2l2.5-3.5l-3.3-2.8l2-3.8l-3.6-2.4l1.5-4l-3.9-1.9l1-4.2l-4.1-1.4l0.5-4.3l-4.2-0.9l-0.1-4.3l-4.3-0.3l-0.6-4.3l-4.3,0.2l-1.1-4.2L114.4,9l-1.6-4l-4.1,1.3l-2.1-3.7l-3.9,1.8L100,0.8l-3.7,2.3l-3-3.1L90,2.7L86.7,0l-3,3.1L80,0.8l-2.6,3.4l-3.9-1.8l-2.1,3.7L67.3,5l-1.6,4l-4.2-0.8l-1.1,4.2L56,12.1l-0.6,4.3l-4.3,0.3L51.1,21l-4.2,0.9l0.5,4.3l-4.1,1.4l1,4.2l-3.9,1.9l1.5,4l-3.6,2.3l2,3.8l-3.3,2.8l2.5,3.5l-2.9,3.2l2.9,3.2l-2.5,3.5l3.3,2.8l-2,3.8l3.6,2.4l-1.5,4l3.9,1.9l-1,4.2l4.1,1.4l-0.5,4.3l4.2,0.9l0.1,4.3l4.3,0.3l-30.6,73.9l27.5-11.4L63.6,180L90,116.3l26.4,63.7l11.4-27.5l27.5,11.4L124.6,90.1z M90,18.9c19.1,0,34.5,15.5,34.5,34.6C124.5,72.5,109.1,88,90,88c-19.1,0-34.5-15.5-34.5-34.6C55.5,34.4,70.9,18.9,90,18.9z"/></svg>
								<div class="image">
								</div>
							</div>
							<div class="rank-content">
								<h3>{{index+1}}º Lugar</h3>
								<div class="rank-content-edit">
									<h4>{{driver.nickname}}</h4>
									<h5>{{parseInt(driver.currentScore)}}</h5>
								</div>
							</div>
						</div>
					</a>
				</li>
			</ol>
			<div v-show="f2drivers.length > 0">
				<h2 class="rank-title">Classificação Geral F2</h2>
				<ol class="podium-rank">
					<li :id="'li-'+(index+1)" v-for="(driver, index) in f2drivers" :key="'f2'+index">
						<a :href="'#li-'+(index+1)">
							<div class="container">
								<div class="driver-image" :style="'border-color:'+driver.team_id.color">
									<img :src="driver.image" alt="Foto do Piloto">
									<svg version="1.1" :id="'place-'+(index+1)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 180 180" enable-background="new 0 0 180 180" xml:space="preserve"><path d="M124.6,90.1l4.2-0.3l0.1-4.3l4.2-0.9l-0.5-4.3l4.1-1.4l-1-4.2l3.9-1.9l-1.5-4l3.6-2.3l-2-3.8l3.3-2.8l-2.5-3.5l2.9-3.2l-2.9-3.2l2.5-3.5l-3.3-2.8l2-3.8l-3.6-2.4l1.5-4l-3.9-1.9l1-4.2l-4.1-1.4l0.5-4.3l-4.2-0.9l-0.1-4.3l-4.3-0.3l-0.6-4.3l-4.3,0.2l-1.1-4.2L114.4,9l-1.6-4l-4.1,1.3l-2.1-3.7l-3.9,1.8L100,0.8l-3.7,2.3l-3-3.1L90,2.7L86.7,0l-3,3.1L80,0.8l-2.6,3.4l-3.9-1.8l-2.1,3.7L67.3,5l-1.6,4l-4.2-0.8l-1.1,4.2L56,12.1l-0.6,4.3l-4.3,0.3L51.1,21l-4.2,0.9l0.5,4.3l-4.1,1.4l1,4.2l-3.9,1.9l1.5,4l-3.6,2.3l2,3.8l-3.3,2.8l2.5,3.5l-2.9,3.2l2.9,3.2l-2.5,3.5l3.3,2.8l-2,3.8l3.6,2.4l-1.5,4l3.9,1.9l-1,4.2l4.1,1.4l-0.5,4.3l4.2,0.9l0.1,4.3l4.3,0.3l-30.6,73.9l27.5-11.4L63.6,180L90,116.3l26.4,63.7l11.4-27.5l27.5,11.4L124.6,90.1z M90,18.9c19.1,0,34.5,15.5,34.5,34.6C124.5,72.5,109.1,88,90,88c-19.1,0-34.5-15.5-34.5-34.6C55.5,34.4,70.9,18.9,90,18.9z"/></svg>
									<div class="image">
									</div>
								</div>
								<div class="rank-content">
									<h3>{{index+1}}º Lugar</h3>
									<div class="rank-content-edit">
										<h4>{{driver.nickname}}</h4>
										<h5>{{parseInt(driver.currentScore)}}</h5>
									</div>
								</div>
							</div>
						</a>
					</li>
				</ol>
			</div>
		</div>
	</article>
</template>
<script>
import axios from 'axios'
import { FulfillingBouncingCircleSpinner } from 'epic-spinners'

export default {
	data() {
		return {
			urlBase: process.env.VUE_APP_API_URL,
			loading: true,
			f1drivers: [],
			f2drivers: [],
		}
	},
	mounted() {
		this.rankGeral();
	},
	methods: {
		rankGeral() {
			axios.get(`${this.urlBase}/drivers`, {
				params: {
					category: 'F1',
					pageSize: 5,
					sort: '-scores.score',
				}
			})
			.then(response => {
				this.f1drivers = response.data
				this.loading = false
			})
			.catch(error => {
				this.loading = false
			})
			axios.get(`${this.urlBase}/drivers`, {
				params: {
					category: 'F2',
					pageSize: 5,
					sort: '-scores.score',
				}
			})
			.then(response => {
				this.f2drivers = response.data
				this.loading = false
			})
			.catch(error => {
				this.loading = false
			})
		}
	},
	components: {
		FulfillingBouncingCircleSpinner,
	}
};
</script>
<style></style>
