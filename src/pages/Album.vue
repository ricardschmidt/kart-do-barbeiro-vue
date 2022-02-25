<template>
	<div>
		<div class="page-header clear-filter">
		<parallax
			class="page-header-image"
			style="background-image:url('https://scontent.fnvt6-1.fna.fbcdn.net/v/t39.30808-6/272620488_108123998450828_1336533726206608785_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=e3f864&_nc_ohc=u6EKiO8LLtMAX-6CLQ_&_nc_ht=scontent.fnvt6-1.fna&oh=00_AT-4GgDyLWGKatl2LxuMIodYvpfvahahCX0YwioPuBcezg&oe=61FDD389')"
		>
		</parallax>
		<div class="container">
			<div class="photo-container">
			<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/logo/logo-original.jpg" alt="Logo CKDB" />
			</div>
			<h3 class="title">Kart do Barbeiro</h3>
			<p class="category">Depoimentos</p>
			<div class="content">
			<div class="social-description">
				<h2>{{seasonsNum}}</h2>
				<p>Temporadas</p>
			</div>
			<div class="social-description">
				<h2>{{driversNum}}</h2>
				<p>Pilotos</p>
			</div>
			<div class="social-description">
				<h2>{{racesNum}}</h2>
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
			<carousel-section></carousel-section>
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
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/_DSC0115.jpg" class="img-raised" />
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/_DSC0287.jpg" alt="" class="img-raised" />
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/_DSC8632.jpg" alt="" class="img-raised" />
					</div>
					<div class="col-md-6">
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/_DSC9288.jpg" alt="" class="img-raised" />
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/_DSC9481.jpg" alt="" class="img-raised" />
					</div>
					</div>
				</div>
				</tab-pane>

				<tab-pane title="Home">
				<i slot="label" class="now-ui-icons location_world"></i>

				<div class="col-md-10 ml-auto mr-auto">
					<div class="row collections">
					<div class="col-md-6">
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/_DSC9491.jpg" alt="" class="img-raised" />
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/_DSC9503.jpg" alt="" class="img-raised" />
					</div>
					<div class="col-md-6">
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/_DSC9983.jpg" alt="" class="img-raised" />
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
import CarouselSection from './components/CarouselSection';
import axios from 'axios';

export default {
	name: 'depositions-page',
	bodyClass: 'profile-page',
	components: {
		Tabs,
		TabPane,
		CarouselSection,
	},
	data() {
		return {
			urlBase: process.env.VUE_APP_API_URL,
			driversNum: process.env.VUE_APP_DRIVERS_NUM,
			racesNum: process.env.VUE_APP_RACES_NUM,
			seasonsNum: process.env.VUE_APP_SEASONS_NUM,
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
		},
	},
};
</script>
<style></style>
