<template>
  <div class="contruction">
	  	<h1>Página em Contrução</h1>
  </div>
</template>
<script>
import { page } from 'vue-analytics'

export default {
  name: 'driver-championship',
  data() {
    return {
  	}
  },
  methods: {
    track () {
      page('/sing-up')
    }
  }
};
</script>
<style>
	.contruction {
		min-height: calc(100vh - 70px);
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #073B4C;
		color: #FFF;
		text-transform: uppercase;
	}

</style>
