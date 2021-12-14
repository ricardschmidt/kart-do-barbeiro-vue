import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import DriverChampionship from './pages/DriverChampionship.vue';
import TeamChampionship from './pages/TeamChampionship.vue';
import SingUp from './pages/SingUp.vue';
import AboutUs from './pages/AboutUs.vue';
import Driver from './pages/Driver.vue';
import Regulation from './pages/Regulation.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
	{
		path: '/regulation',
		name: 'regulation',
		components: { default: Regulation, header: MainNavbar, footer: MainFooter },
		props: {
		  header: { colorOnScroll: 400 },
		  footer: { backgroundColor: 'black' }
		}
	},
    {
      path: '/driver-championship',
      name: 'driver championship',
      components: { default: DriverChampionship, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/team-championship',
      name: 'team championship',
      components: { default: TeamChampionship, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/sing-up',
      name: 'sing up',
      components: { default: SingUp, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/about-us',
      name: 'about-us',
      components: { default: AboutUs, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/drivers',
      name: 'drivers',
      components: { default: Driver, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
