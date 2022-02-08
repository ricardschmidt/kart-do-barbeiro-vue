<template>
	<div class="team-card">
		<div class="card-header">
			<h4>{{team.temporada}}</h4>
		</div>
		<div class="team-info">
			<div class="team-color" :style="'background-color:'+team.color"></div>
			<div class="team-name">
				<h3>{{team.team}}</h3>
				<h4>{{team.category}}</h4>
			</div>
		</div>
		<div class="card-footer">
			<div class="drivers-names">
				<div class="driver-name">
					<p>{{names1[0]}}</p>
					<h3>{{names1[names1.length - 1]}}</h3>
				</div>
				<div class="driver-name">
					<p>{{names2[0]}}</p>
					<h3>{{names2[names2.length - 1]}}</h3>
				</div>
			</div>
			<div>
				<img class="team-info-logo" :src="team.img" alt="Logo da Equipe">
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		team: Object
	},
	data() {
		return {
			points: this.team.points >= 1 ? parseInt(this.team.points) : 0,
			names1: this.team.driver1,
			names2: this.team.driver2,
		}
	},
	mounted() {
		this.splitName()
	},
	methods: {
		splitName() {
			this.names1 = this.names1.trim().split(/\s/)
			this.names2 = this.names2.trim().split(/\s/)
		}
	}
}
</script>
