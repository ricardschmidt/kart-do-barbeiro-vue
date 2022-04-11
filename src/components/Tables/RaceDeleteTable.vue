<template>
	<div class="drivers-table">
		<table class="vue-table" :class="tableClasses">
			<tr>
				<th>Piloto</th>
				<th>Pontos Deletados</th>
			</tr>
			<tr class="race-table" :class="trClasses" v-for="(driver, i) in drivers" :key="index + i">
				<td>{{driver.name}}</td>
				<td class="kart">{{parseInt(driver.deletedScore)}}</td>
			</tr>
		</table>
	</div>
</template>
<script>
export default {
	name: 'race-delete-table',
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
