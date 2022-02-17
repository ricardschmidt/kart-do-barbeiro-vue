<template>
	<div class="drivers-table">
		<table class="vue-table" :class="tableClasses">
			<tr>
				<th>Piloto</th>
				<th>Kart Bateria 1</th>
				<th>Kart Bateria 2</th>
			</tr>
			<tr class="race-table" :class="trClasses" v-for="(driver, i) in drivers" :key="index + i">
				<td>{{driver.name}}</td>
				<td class="kart">{{driver.kartNumbers[0]}}</td>
				<td>{{driver.kartNumbers[1]}}</td>
			</tr>
		</table>
	</div>
</template>
<script>
export default {
	name: 'driver-kart-table',
	props: {
		tableClasses: String,
		trClasses: String,
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
