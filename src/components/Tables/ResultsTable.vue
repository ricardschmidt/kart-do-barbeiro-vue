<template>
	<div class="results-table">
		<table class="vue-table" :class="tableClasses">
			<tr>
				<th>Etapa</th>
				<th>Bateria</th>
				<th>Posição</th>
				<th>Pontos</th>
			</tr>
			<tr class="race-table" :class="trClasses" v-for="(result, i) in results" :key="index + i">
				<td>{{result.name}}</td>
				<td class="kart">{{result.bateria}}</td>
				<td>{{result.result.position}}</td>
				<td>{{parseInt(result.result.score)}}</td>
			</tr>
		</table>
	</div>
</template>
<script>
export default {
	name: 'result-table',
	props: {
		tableClasses: String,
		trClasses: String,
		results: {
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
<style>
	.results-table {
		max-width: 550px;
		margin: 0 auto;
	}

	.race-table td:first-child {
		padding-left: 20px;
		text-align: left;
	}
</style>
