<template>
	<div>
		<div class="page-header page-header-small">
			<parallax
				class="page-header-image"
				style="background-image: url('https://ras-upload.s3.amazonaws.com/ckdb/img/background/bg-xlsx.jpg')"
			>
			</parallax>
		<div class="content-center">
			<div class="container">
				<h1 class="title">Sorteio de Karts</h1>
			</div>
		</div>
		</div>
		<lottery-list ref="kartList"></lottery-list>
		<div class="auth" v-if="password !== 'SORTEIO'">
			<fg-input
				id="input-phone"
				class="no-border"
				placeholder="Password"
				addon-left-icon="now-ui-icons ui-1_lock-circle-open"
				type="password"
				v-model="password"
			>
			</fg-input>
		</div>
		<div class="section create-race-xlsx" v-else>
			<alert type="danger" dismissible :visible="error">
				{{errorMsg}}
			</alert>
			<div class="container">
				<fg-input
					id="input-phone"
					class="no-border"
					placeholder="Nome"
					addon-left-icon="now-ui-icons text_caps-small"
					v-model="name"
				>
				</fg-input>
				<div class="row">
					<div class="col-md-6">
						<div class="datepicker-container">
							<fg-input>
							<el-date-picker
								type="date"
								popper-class="date-picker date-picker-primary"
								placeholder="Date Time Picker"
								v-model="pickers.datePicker"
							>
							</el-date-picker>
							</fg-input>
						</div>
					</div>
					<div class="col-md-6">
						<fg-input
							id="input-phone"
							class="no-border"
							placeholder="Categoria"
							addon-left-icon="now-ui-icons ui-1_calendar-60"
							v-model="category"
						>
						</fg-input>
					</div>
				</div>
				<div class="text-area">
					<div class="row">
						<div class="col-md-6">
							<textarea
								class="form-control"
								name="name"
								rows="10"
								cols="80"
								placeholder="Nome dos Piltos"
								v-model="driversText">
							</textarea>
						</div>
						<div class="col-md-6">
							<textarea
								class="form-control"
								name="name"
								rows="10"
								cols="80"
								placeholder="Karts Disponívies"
								v-model="kartsText">
							</textarea>
						</div>
					</div>
				</div>
				<div class="row">
					<n-button id="submit-file" type="primary" round size="lg" @click="submitLottery" >Sortear Karts</n-button>
				</div>
			</div>
			<div class="loading-spinner" v-if="loading">
				<fulfilling-bouncing-circle-spinner
					:animation-duration="4000"
					:size="60"
					color="#118AB2"
				/>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
import { FulfillingBouncingCircleSpinner } from 'epic-spinners'
import { Alert, Button, FormGroupInput } from '@/components';
import LotteryList from './components/LotteryList'
import { DatePicker } from 'element-ui';

export default {
	name: 'lottery-kart',
	bodyClass: 'landing-page',
	components: {
		Alert,
		LotteryList,
		[Button.name]: Button,
		[FormGroupInput.name]: FormGroupInput,
		[DatePicker.name]: DatePicker,
		FulfillingBouncingCircleSpinner,
	},
	data() {
		return {
			urlBase: process.env.VUE_APP_API_URL,
			name: '',
			category: '',
			driversText: '',
			kartsText: '',
			drivers: null,
			reserves: null,
			errorMsg: null,
			error: false,
			file: null,
			password: '',
			loading: false,
			pickers: {
				datePicker: ''
			},
		};
	},
	methods: {
		lotteryKart() {
			try {
				let driversNames = this.driversText.split(",")
				let kartsNumbersOne = this.kartsText.split(",").sort((a, b) => 0.5 - Math.random())
				let kartsNumbersTwo = this.kartsText.split(",").sort((a, b) => 0.5 - Math.random())
				let same = true

				while (same) {
					same = false
					for (let index = 0; index < kartsNumbersOne.length; index++) {
						if(kartsNumbersOne[index] === kartsNumbersTwo[index]) {
							same = true
							break
						}
					}
					if(same) {
						kartsNumbersOne = kartsNumbersOne.sort((a, b) => 0.5 - Math.random())
					}
				}

				if(kartsNumbersOne.length < driversNames.length) {
					this.errorMsg = "Número de Karts deve ser maior ou igual ao de pilotos"
					this.error = true
					return
				}

				this.drivers = []
				this.reserves = {
					bateria1: [],
					bateria2: []
				}
				driversNames.forEach((driver, index) => {
					this.drivers.push({
						name: driver.trim(),
						kartNumbers: [parseInt(kartsNumbersOne[index].trim()), parseInt(kartsNumbersTwo[index].trim())]
					})
				})
				for(let i = 0; i < this.drivers.length; i++) {
					kartsNumbersOne.splice(0, 1)
					kartsNumbersTwo.splice(0, 1)
				}
				if(kartsNumbersOne.length > 0) {
					kartsNumbersOne.forEach((kart, index) => {
						this.reserves.bateria1.push(parseInt(kart.trim()))
						this.reserves.bateria2.push(parseInt(kartsNumbersTwo[index].trim()))
					})
				}
			} catch (error) {
				this.errorMsg = `${error.message}`
				this.error = true
			}
		},
		submitLottery() {
			this.errorMsg = null
			try {
				this.lotteryKart()
			} catch (error) {
				this.errorMsg = `${error.message}`
				this.error = true
				return
			}

			this.loading = true
			axios.post(`${this.urlBase}/karts`, {
				"name": this.name,
				"category": this.category,
				"date": this.pickers.datePicker,
				"drivers": this.drivers,
				"reserves": this.reserves,
			})
			.then((res) => {
				this.error = false
				if(res.data) {
					this.loading = false
					this.$refs.kartList.apiRequest();
				}
			}).catch(error => {
				this.loading = false
				this.error = true
				this.errorMsg = error.response ? error.response.data.error.messageUser : error
			});

			this.clearFieds()
		},
		clearFieds() {
			this.name = ''
			this.category = ''
			this.driversText = ''
			this.kartsText = ''
			this.pickers.datePicker = ''
		}
	},
};
</script>
<style></style>
