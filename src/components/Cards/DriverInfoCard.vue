<template>
	<div class="driver-card">
		<div class="driver-info">
			<div class="team-color" :style="'background-color:'+driver.teamColor"></div>
			<div class="driver-name">
				<p>{{name}}</p>
				<h3>{{lastname}}</h3>
			</div>
			<img v-popover:popover1 :src="'https://ras-upload.s3.amazonaws.com/ckdb/img/state-flags/'+driver.state+'.png'" :alt="'Bandeira do '+driver.state">
			<el-popover
				ref="popover1"
				popper-class="popover"
				placement="bottom"
				width="50"
				trigger="hover"
			>
				<div class="popover-body">
					Estado: {{driver.state}}
				</div>
      		</el-popover>
		</div>
		<div class="card-footer">
			<div class="team-category">
				<p>{{team.name}}</p>
				<p class="category">{{driver.category}}</p>
			</div>
			<div>
				<h2 :style="'color:'+team.color">{{driver.number}}</h2>
				<img :src="driver.image" alt="Foto do Piloto">
			</div>
		</div>
	</div>
</template>
<script>
import { Popover } from 'element-ui';
export default {
	data() {
		return {
			name: "",
			lastname: "",
			team: this.driver.team_id ? this.driver.team_id : {name: "Independente", color: "#000"},
		}
	},
	mounted() {
		this.splitName();
	},
	props: {
		driver: Object,
	},
	components: {
		[Popover.name]: Popover
	},
	methods: {
		splitName() {
			let splitedName = this.driver.nickname.split(" ")
			splitedName.forEach((name, index) => {
				if(index === splitedName.length -1) {
					this.lastname = name
					return
				}
				this.name += `${name} `
			})
		}
	}
}
</script>
