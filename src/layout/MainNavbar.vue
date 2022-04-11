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
			<drop-down
				tag="li"
				title="Participantes"
				icon="now-ui-icons ui-1_zoom-bold"
				class="nav-item"
			>
				<nav-link to="/drivers">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 500.634 541.962">
						<g id="Grupo_5" data-name="Grupo 5" transform="translate(19.359 10.024)">
							<g id="traço" transform="translate(0 0)">
							<path id="Caminho_12" data-name="Caminho 12" d="M3149.791,364.739c27.212,42.683,164.082,50.9,174.383,49.879-41.727-335.042-338.124-231.075-387.688-215.057s-82.4,12.543-82.4,12.543l27.726,44.361v49.589" transform="translate(-2854.089 -171.823)" fill="none" stroke="#212529" stroke-width="20"/>
							<path id="Caminho_13" data-name="Caminho 13" d="M3303.972,559.856l-16.521,50.791s-18.713-5.766-49.256,38.059c-37.239,30.1-45.8,39.208-45.8,39.208s-12.646,15.331-30.553-3.936-246.435-224.11-280.307-237.717c.347-16.436,3.51-84.788,4.959-97.455" transform="translate(-2861.331 -171.823)" fill="none" stroke="#212529" stroke-width="20"/>
							<path id="Caminho_14" data-name="Caminho 14" d="M2870.073,392.558c39.114,18.324,86.266,33.927,164.192,36.45-2.315,32.171-21.766,119.734-21.766,119.734s-133.189-75.307-155.617-110.425" transform="translate(-2566.972 -171.823)" fill="none" stroke="#212529" stroke-width="20"/>
							</g>
							<g id="bolas" transform="translate(13.141 126.235)">
							<g id="Caminho_15" data-name="Caminho 15" transform="translate(268.572 50.748)" fill="#0a1b1f">
								<path d="M 12.49998569488525 14.99997425079346 C 11.12149238586426 14.99997425079346 9.999999046325684 13.87848091125488 9.999999046325684 12.49998760223389 C 9.999999046325684 11.12149429321289 11.12149238586426 10.00000095367432 12.49998569488525 10.00000095367432 C 13.87847900390625 10.00000095367432 14.99997234344482 11.12149429321289 14.99997234344482 12.49998760223389 C 14.99997234344482 13.87848091125488 13.87847900390625 14.99997425079346 12.49998569488525 14.99997425079346 Z" stroke="none"/>
								<path d="M 12.49998569488525 -1.33514404296875e-05 C 19.40353393554688 -1.33514404296875e-05 24.99996185302734 5.596439361572266 24.99996185302734 12.49998760223389 C 24.99996185302734 19.40353584289551 19.40353393554688 24.99996376037598 12.49998569488525 24.99996376037598 C 5.596437454223633 24.99996376037598 -1.33514404296875e-05 19.40353584289551 -1.33514404296875e-05 12.49998760223389 C -1.33514404296875e-05 5.596439361572266 5.596437454223633 -1.33514404296875e-05 12.49998569488525 -1.33514404296875e-05 Z" stroke="none" fill="#212529"/>
							</g>
							<g id="Caminho_16" data-name="Caminho 16" transform="translate(272.572 82)" fill="#0a1b1f">
								<path d="M 12.49998569488525 14.99997425079346 C 11.12149238586426 14.99997425079346 9.999999046325684 13.87848091125488 9.999999046325684 12.49998760223389 C 9.999999046325684 11.12149429321289 11.12149238586426 10.00000095367432 12.49998569488525 10.00000095367432 C 13.87847900390625 10.00000095367432 14.99997234344482 11.12149429321289 14.99997234344482 12.49998760223389 C 14.99997234344482 13.87848091125488 13.87847900390625 14.99997425079346 12.49998569488525 14.99997425079346 Z" stroke="none"/>
								<path d="M 12.49998569488525 -1.33514404296875e-05 C 19.40353393554688 -1.33514404296875e-05 24.99996185302734 5.596439361572266 24.99996185302734 12.49998760223389 C 24.99996185302734 19.40353584289551 19.40353393554688 24.99996376037598 12.49998569488525 24.99996376037598 C 5.596437454223633 24.99996376037598 -1.33514404296875e-05 19.40353584289551 -1.33514404296875e-05 12.49998760223389 C -1.33514404296875e-05 5.596439361572266 5.596437454223633 -1.33514404296875e-05 12.49998569488525 -1.33514404296875e-05 Z" stroke="none" fill="#212529"/>
							</g>
							<g id="Caminho_17" data-name="Caminho 17" transform="translate(260.072 122)" fill="#0a1b1f">
								<path d="M 12.49998569488525 14.99997425079346 C 11.12149238586426 14.99997425079346 9.999999046325684 13.87848091125488 9.999999046325684 12.49998760223389 C 9.999999046325684 11.12149429321289 11.12149238586426 10.00000095367432 12.49998569488525 10.00000095367432 C 13.87847900390625 10.00000095367432 14.99997234344482 11.12149429321289 14.99997234344482 12.49998760223389 C 14.99997234344482 13.87848091125488 13.87847900390625 14.99997425079346 12.49998569488525 14.99997425079346 Z" stroke="none"/>
								<path d="M 12.49998569488525 -1.33514404296875e-05 C 19.40353393554688 -1.33514404296875e-05 24.99996185302734 5.596439361572266 24.99996185302734 12.49998760223389 C 24.99996185302734 19.40353584289551 19.40353393554688 24.99996376037598 12.49998569488525 24.99996376037598 C 5.596437454223633 24.99996376037598 -1.33514404296875e-05 19.40353584289551 -1.33514404296875e-05 12.49998760223389 C -1.33514404296875e-05 5.596439361572266 5.596437454223633 -1.33514404296875e-05 12.49998569488525 -1.33514404296875e-05 Z" stroke="none" fill="#212529"/>
							</g>
							<g id="Caminho_18" data-name="Caminho 18" transform="translate(413 257)" fill="#0a1b1f">
								<path d="M 12.49998569488525 14.99997425079346 C 11.12149238586426 14.99997425079346 9.999999046325684 13.87848091125488 9.999999046325684 12.49998760223389 C 9.999999046325684 11.12149429321289 11.12149238586426 10.00000095367432 12.49998569488525 10.00000095367432 C 13.87847900390625 10.00000095367432 14.99997234344482 11.12149429321289 14.99997234344482 12.49998760223389 C 14.99997234344482 13.87848091125488 13.87847900390625 14.99997425079346 12.49998569488525 14.99997425079346 Z" stroke="none"/>
								<path d="M 12.49998569488525 -1.33514404296875e-05 C 19.40353393554688 -1.33514404296875e-05 24.99996185302734 5.596439361572266 24.99996185302734 12.49998760223389 C 24.99996185302734 19.40353584289551 19.40353393554688 24.99996376037598 12.49998569488525 24.99996376037598 C 5.596437454223633 24.99996376037598 -1.33514404296875e-05 19.40353584289551 -1.33514404296875e-05 12.49998760223389 C -1.33514404296875e-05 5.596439361572266 5.596437454223633 -1.33514404296875e-05 12.49998569488525 -1.33514404296875e-05 Z" stroke="none" fill="#212529"/>
							</g>
							<g id="Caminho_19" data-name="Caminho 19" transform="translate(0 33)" fill="#0a1b1f">
								<path d="M 12.49998569488525 14.99997425079346 C 11.12149238586426 14.99997425079346 9.999999046325684 13.87848091125488 9.999999046325684 12.49998760223389 C 9.999999046325684 11.12149429321289 11.12149238586426 10.00000095367432 12.49998569488525 10.00000095367432 C 13.87847900390625 10.00000095367432 14.99997234344482 11.12149429321289 14.99997234344482 12.49998760223389 C 14.99997234344482 13.87848091125488 13.87847900390625 14.99997425079346 12.49998569488525 14.99997425079346 Z" stroke="none"/>
								<path d="M 12.49998569488525 -1.33514404296875e-05 C 19.40353393554688 -1.33514404296875e-05 24.99996185302734 5.596439361572266 24.99996185302734 12.49998760223389 C 24.99996185302734 19.40353584289551 19.40353393554688 24.99996376037598 12.49998569488525 24.99996376037598 C 5.596437454223633 24.99996376037598 -1.33514404296875e-05 19.40353584289551 -1.33514404296875e-05 12.49998760223389 C -1.33514404296875e-05 5.596439361572266 5.596437454223633 -1.33514404296875e-05 12.49998569488525 -1.33514404296875e-05 Z" stroke="none" fill="#212529"/>
							</g>
							<g id="Caminho_20" data-name="Caminho 20" transform="translate(0 0)" fill="#0a1b1f">
								<path d="M 12.49998569488525 14.99997425079346 C 11.12149238586426 14.99997425079346 9.999999046325684 13.87848091125488 9.999999046325684 12.49998760223389 C 9.999999046325684 11.12149429321289 11.12149238586426 10.00000095367432 12.49998569488525 10.00000095367432 C 13.87847900390625 10.00000095367432 14.99997234344482 11.12149429321289 14.99997234344482 12.49998760223389 C 14.99997234344482 13.87848091125488 13.87847900390625 14.99997425079346 12.49998569488525 14.99997425079346 Z" stroke="none"/>
								<path d="M 12.49998569488525 -1.33514404296875e-05 C 19.40353393554688 -1.33514404296875e-05 24.99996185302734 5.596439361572266 24.99996185302734 12.49998760223389 C 24.99996185302734 19.40353584289551 19.40353393554688 24.99996376037598 12.49998569488525 24.99996376037598 C 5.596437454223633 24.99996376037598 -1.33514404296875e-05 19.40353584289551 -1.33514404296875e-05 12.49998760223389 C -1.33514404296875e-05 5.596439361572266 5.596437454223633 -1.33514404296875e-05 12.49998569488525 -1.33514404296875e-05 Z" stroke="none" fill="#212529"/>
							</g>
							</g>
							<g id="desenhos" transform="translate(45.983 30.292)">
							<path id="Caminho_21" data-name="Caminho 21" d="M3278.19,498.741,3145.853,350.606s-35.339-5.664-52.024,21.564c-2.419,17.214,0,53.855,0,53.855l174.539,159.253L3132.311,426.025V402.994l13.542-4.722,66.8,74.52-73.688-100.623h10.656" transform="translate(-3092.753 -202.115)" fill="#212529"/>
							<path id="Caminho_22" data-name="Caminho 22" d="M3114.016,652.159v29.954l-33.775-29.954-77.415-125.11Z" transform="translate(-2838.652 -202.115)" fill="#212529"/>
							<path id="Caminho_23" data-name="Caminho 23" d="M2917.226,452.5s36.057,65.078,112.845,93.379c17.86,3.141,28.35,4.674,28.35,4.674l-28.35,17.027,24.565,25.184s-27.022-.44-29.917,14.976-4.259,17.774-4.259,17.774C2988.575,576.758,2917.226,452.5,2917.226,452.5Z" transform="translate(-2697.457 -202.115)" fill="#212529"/>
							<path id="Caminho_24" data-name="Caminho 24" d="M2904.059,218.32s259.218-88.846,320.406,149.531a393.241,393.241,0,0,1-39.342,0s-25.693-163.712-281.065-142.2c-12.823.487-19.919,0-19.919,0Z" transform="translate(-2830.416 -202.115)" fill="#212529"/>
							<path id="Caminho_25" data-name="Caminho 25" d="M3233.113,250.769c-32.671-7.453-111.736-6.939-124.5,38.18,20.8,11.423,126.379,83.558,138.135,100.728-14.225-31.92-95.486-100.728-95.486-100.728s36.39-35.548,81.85-29.263c11.36,4.76,19.786,8.4,19.786,8.4S3246.026,256.017,3233.113,250.769Z" transform="translate(-3083.322 -202.115)" fill="#212529"/>
							</g>
						</g>
					</svg>
					Pilotos
				</nav-link>
				<nav-link to="/teams">
					<i class="now-ui-icons tech_headphones"></i>Equipes
				</nav-link>
			</drop-down>
      </li>
      <li class="nav-item">

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
          <i class="now-ui-icons ui-1_calendar-60"></i> 2021/1
        </a>
        <a
          href="https://www.facebook.com/media/set/?set=a.108177971778764&type=3"
          class="dropdown-item"
		  target="_blank"
        >
          <i class="now-ui-icons ui-1_calendar-60"></i> F1 | Etapa 1 2022/1
        </a>
         <a
          href="https://www.facebook.com/media/set/?set=a.108310611765500&type=3"
          class="dropdown-item"
		  target="_blank"
        >
          <i class="now-ui-icons ui-1_calendar-60"></i> F2 | Etapa 1 2022/1
        </a>
        <a
          href="https://www.facebook.com/media/set/?set=a.131196609476900&type=3"
          class="dropdown-item"
		  target="_blank"
        >
          <i class="now-ui-icons ui-1_calendar-60"></i> F1 | Etapa 2 2022/1
        </a>
         <a
          href="https://www.facebook.com/media/set/?set=a.131221476141080&type=3"
          class="dropdown-item"
		  target="_blank"
        >
          <i class="now-ui-icons ui-1_calendar-60"></i> F2 | Etapa 2 2022/1
        </a>
      </drop-down>
	  <drop-down
        tag="li"
        title="Outros"
        icon="now-ui-icons education_agenda-bookmark"
        class="nav-item"
      >
	  	<nav-link to="/deposition">
          <i class="now-ui-icons ui-2_like"></i>Depoimentos
        </nav-link>
        <nav-link to="/regulation">
          <i class="now-ui-icons education_agenda-bookmark"></i>Regulamento
        </nav-link>
        <nav-link to="/statistics">
          <i class="now-ui-icons business_chart-bar-32"></i>Estatísticas
        </nav-link>
        <nav-link to="/lottery-kart">
          <i class="now-ui-icons loader_refresh"></i>Sorteio de Kart
        </nav-link>
      </drop-down>
      <drop-down
        tag="li"
        title="Perfil"
        icon="now-ui-icons users_circle-08"
        class="nav-item"
		v-if="loggedIn"
      >
		<nav-link to="/profile">
		<i class="now-ui-icons users_single-02"></i>Meus Dados
		</nav-link>
		<nav-link to="/edit-profile">
		<i class="now-ui-icons loader_gear"></i>Editar Perfil
		</nav-link>
		<nav-link to="/dashboard" v-show="superUser">
		<i class="now-ui-icons travel_istanbul"></i>Dashboard
		</nav-link>
		<a href="#" class="dropdown-item" @click="logOut">
		<i class="now-ui-icons media-1_button-power"></i>Logout
		</a>
      </drop-down>
	  <div class="row" style="margin:0" v-else>
		<li class="nav-item" >
				<router-link to="/login"
					class="nav-link btn btn-neutral"
				>
					<p>Login</p>
				</router-link>
		</li>
		<li class="nav-item">
				<router-link to="/sign-up"
					class="nav-link btn btn-neutral"
				>
					<p>Inscreva-se</p>
				</router-link>
		</li>
	  </div>

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
import { DropDown, Navbar, NavLink, Button } from '@/components';
import { getUser } from '../services/auth'
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
		[Popover.name]: Popover,
		[Button.name]: Button,
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn;
		},
		superUser() {
			return this.$store.state.auth.user && this.$store.state.auth.user.roles === "ROLES_ADMIN" ? true : false;
		}
  	},
	methods: {
		logOut() {
			this.$store.dispatch('auth/logout');
			this.$router.push('/');
		},
	}
};
</script>

<style scoped></style>
