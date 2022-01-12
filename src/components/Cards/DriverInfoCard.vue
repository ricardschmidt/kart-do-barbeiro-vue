<template>
	<div class="driver-card">
		<div class="driver-info">
			<div class="team-color" :style="'background-color:'+driver.teamColor"></div>
			<div class="driver-name">
				<p>{{driver.name}}</p>
				<h3>{{driver.lastName}}</h3>
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
			<p>{{driver.team}}</p>
			<div>
				<h2 :style="'color:'+driver.color">{{driver.number}}</h2>
				<img :src="'https://ras-upload.s3.amazonaws.com/ckdb/img/drivers/'+driver.img+'.png'" alt="Foto do Piloto">
			</div>
		</div>
	</div>
</template>
<script>
import { Popover } from 'element-ui';
export default {
	props: {
		driver: Object
	},
	components: {
		[Popover.name]: Popover
	}
}
</script>
