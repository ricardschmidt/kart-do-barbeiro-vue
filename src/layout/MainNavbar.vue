<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        Kart do Barbeiro
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <router-link
			class="nav-link"
			to="/regulation"
		>
          <i class="now-ui-icons education_agenda-bookmark"></i>Regulamento
        </router-link>
      </li>
      <drop-down
        tag="li"
        title="Campeonato"
        icon="now-ui-icons sport_trophy"
        class="nav-item"
      >
        <nav-link to="/driver-championship">
          <i class="now-ui-icons sport_user-run"></i> Campeonato de Pilotos
        </nav-link>
        <nav-link to="/team-championship">
          <i class="now-ui-icons objects_spaceship"></i> Campeonato de Equipes
        </nav-link>
         <router-link
          to="/#calendar"
          class="dropdown-item"
        >
          <i class="now-ui-icons ui-1_calendar-60"></i> Calendário
        </router-link>
      </drop-down>
      <drop-down
              tag="li"
              title="Fotos"
              icon="now-ui-icons design_image"
              class="nav-item"
      >
         <a
          href="https://www.1-kart-do-barbeiro.adrenalizemidia.com/"
          class="dropdown-item"
		  target="_blank"
        >
          <i class="now-ui-icons ui-1_calendar-60"></i> Corrida 1
        </a>
      </drop-down>
      <li class="nav-item">
			<a
				href="https://forms.gle/NwfinnkNXuPS2isb8"
				class="nav-link btn btn-neutral"
				target="_blank"
			>
				<p>Inscreva-se</p>
        	</a>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Youtube"
          data-placement="bottom"
          href="https://www.youtube.com/channel/UCtUaJ4bE1hhPBKtXXT1zyZA"
          target="_blank"
        >
          <i class="fab fa-youtube"></i>
          <p class="d-lg-none d-xl-none">Youtube</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          href="https://www.instagram.com/ckdb.kart"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
