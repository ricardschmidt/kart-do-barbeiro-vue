<template>
	<div>
		<table class="vue-table" :class="tableClasses">
			<tr>
				<th>Pos</th>
				<th>Piloto</th>
				<th>Pts</th>
			</tr>
			<tr class="race-table" :class="trClasses" v-for="(driver, i) in drivers" :key="index + i">
				<td>{{driver.position}}º</td>
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
