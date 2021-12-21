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
								<div class="col-md-4" v-for="(deposition, index) in depositions" :key="'deposition'+index">
									<div class="team-player">
										<img
											:src="'https://ras-upload.s3.amazonaws.com/ckdb/img/drivers/'+deposition.img+'.png'"
											alt="Thumbnail Image"
											class="rounded-circle img-fluid img-raised"
										/>
										<h4 class="title">{{deposition.name}}</h4>
										<p class="category text-primary">{{deposition.num}}</p>
										<p class="description">
											{{deposition.deposition}}
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
			depositions: [],
		}
	},
	mounted() {
		this.getDeposition()
	},
	methods: {
		getDeposition() {
			axios.get(this.urlBase, {
				params: {
					action: 'read',
					table: 'Depoimentos'
				}
			})
			.then(response => {
				let allDepositions = response.data.data
				allDepositions = allDepositions.sort(() => Math.random() - 0.5)
				this.depositions.push(allDepositions[0])
				this.depositions.push(allDepositions[1])
				this.depositions.push(allDepositions[2])
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
