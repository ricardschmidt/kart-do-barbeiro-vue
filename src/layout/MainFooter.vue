<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
		<h4>APOIADORES:</h4>
		<div class="sponsor">
			<img src="https://ras-upload.s3.amazonaws.com/ckdb/sponsor/barba-de-respeito.png" alt="Barba de Respeito">
			<img src="https://ras-upload.s3.amazonaws.com/ckdb/sponsor/auts-branco.png" alt="Auts Store">
			<img src="https://ras-upload.s3.amazonaws.com/ckdb/sponsor/jg-motos.png" alt="JG Motos">
			<img src="https://ras-upload.s3.amazonaws.com/ckdb/sponsor/corte.png" alt="Côrte">
			<img src="https://ras-upload.s3.amazonaws.com/ckdb/sponsor/merco-energy.png" alt="Merco Energy">
			<img src="https://ras-upload.s3.amazonaws.com/ckdb/sponsor/citta-branco.png" alt="Citta Engenharia">
		</div>
		<nav>
			<ul>
				<li>
					<router-link to="/driver-championship">
					Campeonato
					</router-link>
				</li>
				<li>
					<router-link to="/about-us">
					Sobre nós
					</router-link>
				</li>
				<li>
					<router-link to="/drivers">
					Pilotos
					</router-link>
				</li>
				<li>
					<router-link to="/teams">
					Equipes
					</router-link>
				</li>
			</ul>
		</nav>
		<div class="copyright">
			&copy; {{ year }}, Designed and Coded by
			<a href="https://github.com/ricardschmidt" target="_blank" rel="noopener"
			>Ricardo Schmidt</a
			>
		</div>
    </div>
  </footer>
</template>
<script>

export default {
  props: {
    backgroundColor: String,
    type: String
  },
  components: {
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
