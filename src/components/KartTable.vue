<template>
	<div class="drivers-table">
		<table class="vue-table" :class="tableClasses">
			<tr>
				<th>Kart Bateria 1</th>
				<th>Kart Bateria 2</th>
			</tr>
			<tr class="race-table" :class="trClasses" v-for="(kart, i) in karts.bateria1" :key="index + i">
				<td>{{kart}}</td>
				<td class="kart">{{karts.bateria2[i]}}</td>
			</tr>
		</table>
	</div>
</template>
<script>
export default {
	name: 'kart-table',
	props: {
		tableClasses: String,
		trClasses: String,
		karts: {
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
