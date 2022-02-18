<template>
	<div class="container lottery" v-if="lotterys">
		<tabs type="primary" vertical class="row race-rank-content">
			<tab-pane v-for="(lottery, i) in lotterys" :key="'kart' + i" :label="lottery.category">
				<div class="text-center">
					<h2>Nome: {{lottery.name}}</h2>
				</div>
				<div class="text-center">
					<div class="col-md-12">
						<h4>KARTS POR PILOTO</h4>
						<driver-kart-table :drivers="lottery.drivers" :index="10"></driver-kart-table>
					</div>
					<div class="col-md-12">
						<h4>KARTS RESERVA</h4>
						<kart-table :karts="lottery.reserves" :index="11"></kart-table>
					</div>
				</div>
			</tab-pane>
		</tabs>
	</div>
</template>
<script>
import axios from 'axios'
import { DriverKartTable, KartTable, TabPane, Tabs } from '@/components';

export default {
	data() {
		return {
			urlBase: process.env.VUE_APP_API_URL,
			lotterys: null
		}
	},
	mounted() {
		this.apiRequest();
	},
	methods: {
		apiRequest(){
			axios.get(`${this.urlBase}/karts/next-race`)
			.then((res) => {
				this.error = false
				if(res.data) {
					this.loading = false
					this.lotterys = res.data
				}
			}).catch(error => {
				this.loading = false
				this.error = true
				this.errorMsg = error.response ? error.response.data.error.messageUser : error
			});
		},
	},
	components: {
		KartTable,
		DriverKartTable,
		TabPane,
		Tabs
	}
};
</script>
<style></style>
