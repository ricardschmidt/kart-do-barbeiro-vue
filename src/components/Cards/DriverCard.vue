<template>
	<div class="driver-card">
		<div class="card-header">
			<h2>{{driver.position}}º</h2>
			<div class="header-points">
				<p>{{points}}</p>
				<small>PTS</small>
			</div>
		</div>
		<div class="driver-info">
			<div class="team-color" :style="'background-color:'+driver.teamColor"></div>
			<div class="driver-name">
				<p>{{driver.name}}</p>
				<h3>{{driver.lastName}}</h3>
			</div>
			<img :src="'https://ras-upload.s3.amazonaws.com/ckdb/img/state-flags/'+driver.state+'.png'" :alt="'Bandeira do '+driver.state">
		</div>
		<div class="card-footer">
			<p>{{driver.team}}</p>
			<div>
				<h2 :style="'color:'+driver.teamColor">{{driver.number}}</h2>
				<img :src="'https://ras-upload.s3.amazonaws.com/ckdb/img/drivers/'+driver.img+'.png'" alt="Foto do Piloto">
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		driver: Object
	},
	data() {
		return {
			points: parseInt(this.driver.points)
		}
	}
}
</script>
