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
					<div class="team">
						<div class="row">
							<div class="col-md-4" v-for="(deposition, index) in depositions" :key="'deposition'+index">
								<div class="team-player">
									<img
										:src="'img/drivers/'+deposition.img+'.png'"
										alt="Thumbnail Image"
										class="rounded-circle img-fluid img-raised"
									/>
									<h4 class="title">{{deposition.name}}</h4>
									<p class="category text-primary">{{deposition.number}}</p>
									<p class="description">
										{{deposition.deposition}}
									</p>
								</div>
							</div>
						</div>
					</div>
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
			dapositions: [],
		}
	},
	mounted() {
		this.deposition()
	},
	methods: {
		deposition() {
			var url = this.urlBase + "?data=depositions";//Sua URL
			axios.get(url)
			.then(response => {
				this.depositions = response.data
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
