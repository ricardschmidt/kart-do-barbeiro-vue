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
			<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/logo-original.jpg" alt="Logo CKDB" />
			</div>
			<h3 class="title">Kart do Barbeiro</h3>
			<p class="category">Depoimentos</p>
			<div class="content">
			<div class="social-description">
				<h2>1</h2>
				<p>Temporadas</p>
			</div>
			<div class="social-description">
				<h2>49</h2>
				<p>Pilotos</p>
			</div>
			<div class="social-description">
				<h2>9</h2>
				<p>Corridas</p>
			</div>
			</div>
		</div>
		</div>
		<div class="section">
		<div class="container">
			<div class="button-container">
			<router-link
			class="btn btn-primary btn-round btn-lg"
			to="/"
			>
			<i class="now-ui-icons objects_globe"></i>Home
			</router-link>
			<a
				href="https://www.youtube.com/channel/UCtUaJ4bE1hhPBKtXXT1zyZA"
				class="btn btn-default btn-round btn-lg btn-icon"
				rel="tooltip"
				title="Follow us on Youtube"
			>
				<i class="fab fa-youtube"></i>
			</a>
			<a
				href="https://www.instagram.com/kartdobarbeiro.kdb/"
				class="btn btn-default btn-round btn-lg btn-icon"
				rel="tooltip"
				title="Follow us on Instagram"
			>
				<i class="fab fa-instagram"></i>
			</a>
			</div>
			<div class="loading-spinner" v-if="loading">
				<fulfilling-bouncing-circle-spinner
					:animation-duration="4000"
					:size="60"
					color="#118AB2"
				/>
			</div>
			<div class="deposition-content" v-else>
				<div class="deposition-wrap" v-for="(deposition, index) in depositions" :key="'deposition'+index">
					<div class="team-player">
						<div class="driver-info">
							<img
								:src="'https://ras-upload.s3.amazonaws.com/ckdb/img/drivers/'+deposition.img+'.png'"
								alt="Thumbnail Image"
								class="rounded-circle img-fluid img-raised"
							/>
							<h4 class="title">{{deposition.name}}</h4>
							<p class="category text-primary">{{deposition.num}}</p>
						</div>
						<p class="description">
							{{deposition.deposition}}
						</p>
					</div>
				</div>
			</div>
			<div class="row">
			<div class="col-md-6 ml-auto mr-auto">
				<h4 class="title text-center">Nosso Campeonato</h4>
			</div>
			<tabs
				pills
				class="nav-align-center"
				tab-content-classes="gallery"
				tab-nav-classes="nav-pills-just-icons"
				type="primary"
			>
				<tab-pane title="Profile">
				<i slot="label" class="now-ui-icons design_image"></i>

				<div class="col-md-10 ml-auto mr-auto">
					<div class="row collections">
					<div class="col-md-6">
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/foto01.png" class="img-raised" />
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/foto02.png" alt="" class="img-raised" />
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/foto03.png" alt="" class="img-raised" />
					</div>
					<div class="col-md-6">
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/foto04.png" alt="" class="img-raised" />
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/foto05.png" alt="" class="img-raised" />
					</div>
					</div>
				</div>
				</tab-pane>

				<tab-pane title="Home">
				<i slot="label" class="now-ui-icons location_world"></i>

				<div class="col-md-10 ml-auto mr-auto">
					<div class="row collections">
					<div class="col-md-6">
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/foto06.png" alt="" class="img-raised" />
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/foto07.png" alt="" class="img-raised" />
					</div>
					<div class="col-md-6">
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/foto09.png" alt="" class="img-raised" />
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/_DSC9838.jpg" alt="" class="img-raised" />
					</div>
					</div>
				</div>
				</tab-pane>
			</tabs>
			</div>
		</div>
		</div>
	</div>
</template>
<script>
import { Tabs, TabPane } from '@/components';
import axios from 'axios'
import { FulfillingBouncingCircleSpinner } from 'epic-spinners'

export default {
	name: 'depositions-page',
	bodyClass: 'profile-page',
	components: {
		Tabs,
		TabPane,
		FulfillingBouncingCircleSpinner,
	},
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
				this.depositions = response.data.data
				this.loading = false
			})
			.catch(error => {
				this.loading = false
			})
		}
	},
};
</script>
<style></style>
