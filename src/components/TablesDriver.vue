<template>
	<div class="drivers-table">
		<table class="vue-table" :class="tableClasses">
			<tr>
				<th>Pos</th>
				<th>Número</th>
				<th>Piloto</th>
				<th>Pts</th>
			</tr>
			<tr class="race-table" :class="trClasses" v-for="(driver, i) in drivers" :key="index + i">
				<td>{{i + 1}}º</td>
				<td>{{driver.number}}</td>
				<td>{{driver.driver}}</td>
				<td>{{driver.points}}</td>
			</tr>
		</table>
	</div>
</template>
<script>
export default {
	name: 'table-driver',
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
	},
}
</script>
