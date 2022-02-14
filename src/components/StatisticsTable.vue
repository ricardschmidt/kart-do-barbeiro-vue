<template>
	<div class="statistics-table" :class="cardColor">
		<div class="wrap-podium">
			<div class="podium first-place">
					<h2 class="position-first">1º</h2>
					<img :src="drivers[0].image" alt="Foto do Piloto">
					<div class="data-content">
						<h3 class="points-first">{{parseInt(drivers[0][attribute])}} <span class="suffix">{{suffix}}</span></h3>
						<h3 class="driver-first">{{drivers[0].nickname.trim().split(/\s/)[0]}}<span class="last-name-bold">{{drivers[0].nickname.trim().split(/\s/)[1]}}</span></h3>
					</div>

			</div>
			<div class="podium-content">
				<div class="podium second-place">
					<h2 class="position-second">2º</h2>
					<img :src="drivers[1].image" alt="Foto do Piloto">
					<div class="data-content">
						<h3 class="points-second">{{parseInt(drivers[1][attribute])}} <span class="suffix">{{suffix}}</span></h3>
						<h3 class="driver-second">{{drivers[1].nickname.trim().split(/\s/)[0]}}<span class="last-name-bold">{{drivers[1].nickname.trim().split(/\s/)[1]}}</span></h3>
					</div>
				</div>
				<div class="podium third-place">
					<h2 class="position-third">3º</h2>
					<img :src="drivers[2].image" alt="Foto do Piloto">
					<div class="data-content">
						<h3 class="points-third">{{parseInt(drivers[2][attribute])}} <span class="suffix">{{suffix}}</span></h3>
						<h3 class="driver-third">{{drivers[2].nickname.trim().split(/\s/)[0]}}<span class="last-name-bold">{{drivers[2].nickname.trim().split(/\s/)[1]}}</span></h3>
					</div>

				</div>
			</div>
		</div>
		<div class="other-places">
			<table class="statistic-table" :class="tableClasses">
			<tr :class="trClasses" v-for="(driver, i) in drivers" :key="index + i">
				<td class="position">{{i + 1}}º</td>
				<td class="driver-name">{{driver.nickname}}</td>
				<td class="points">{{parseInt(driver[attribute])}} <span>{{suffix}}</span></td>
			</tr>
		</table>
		</div>
	</div>
</template>
<script>
export default {
	name: 'statistics-table',
	props: {
		tableClasses: String,
		trClasses: String,
		suffix: String,
		attribute: String,
		cardColor: String,
		drivers: {
			type: [],
			default: []
		},
		index: {
			type: Number,
			default: 0
		},
	}
}
</script>
