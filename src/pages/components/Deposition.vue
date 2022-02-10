<template>
	<article class="deposition">
		<div class="loading-spinner" v-if="loading">
			<fulfilling-bouncing-circle-spinner
				:animation-duration="4000"
				:size="60"
				color="#118AB2"
			/>
		</div>
		<div class="deposition-content" v-else>
			<div class="section section-team text-center">
				<div class="container">
					<h2 class="title">Depoimentos</h2>
					<router-link to="/deposition">
						<div class="team">
							<div class="row">
								<div class="col-md-4" v-for="(driver, index) in drivers" :key="'deposition'+index">
									<div class="team-player">
										<img
											:src="driver.image"
											alt="Thumbnail Image"
											class="rounded-circle img-fluid img-raised"
										/>
										<h4 class="title">{{driver.nickname}}</h4>
										<p class="category text-primary">{{driver.number}}</p>
										<p class="description">
											{{driver.deposition}}
										</p>
									</div>
								</div>
							</div>
						</div>
					</router-link>
				</div>
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
			drivers: [],
		}
	},
	mounted() {
		this.getDeposition()
	},
	methods: {
		getDeposition() {
			axios.get(`${this.urlBase}/drivers/depositions`, {
				params: {
					random: true
				}
			})
			.then(response => {
				this.drivers = response.data
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
