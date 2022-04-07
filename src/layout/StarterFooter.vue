<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
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
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
