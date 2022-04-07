import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import DriverChampionship from './pages/DriverChampionship.vue';
import TeamChampionship from './pages/TeamChampionship.vue';
import SignUp from './pages/SignUp.vue';
import Login from './pages/Login.vue';
import DepositionPage from './pages/DepositionPage.vue';
import AboutUs from './pages/AboutUs.vue';
import AboutUs2 from './pages/AboutUs2.vue';
import Driver from './pages/Driver.vue';
import Team from './pages/Team.vue';
import Statistics from './pages/Statistics.vue';
import Regulation from './pages/Regulation.vue';
import Album from './pages/Album.vue';
import UploadXlsx from './pages/UploadXlsx.vue';
import LotteryKart from './pages/LotteryKart.vue';
import Profile from './pages/Profile.vue';
import EditProfile from './pages/EditProfile.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
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
		path: '/profile',
		name: 'profile',
		components: { default: Profile, header: MainNavbar, footer: MainFooter },
		props: {
			header: { colorOnScroll: 400 },
			footer: { backgroundColor: 'black' }
		}
		},
		{
		path: '/edit-profile',
		name: 'edit profile',
		components: { default: EditProfile, header: MainNavbar, footer: MainFooter },
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
			path: '/deposition',
			name: 'deposition',
			components: { default: DepositionPage, header: MainNavbar, footer: MainFooter },
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
		path: '/sign-up',
		name: 'sign up',
		components: { default: SignUp, header: MainNavbar },
		props: {
			header: { colorOnScroll: 400 }
		}
		},
		{
		path: '/login',
		name: 'login',
		components: { default: Login, header: MainNavbar },
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
		path: '/about-us-2',
		name: 'about-us-2',
		components: { default: AboutUs2, header: MainNavbar, footer: MainFooter },
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
		{
		path: '/teams',
		name: 'teams',
		components: { default: Team, header: MainNavbar, footer: MainFooter },
		props: {
			header: { colorOnScroll: 400 },
			footer: { backgroundColor: 'black' }
		}
		},
		{
		path: '/statistics',
		name: 'statistics',
		components: { default: Statistics, header: MainNavbar, footer: MainFooter },
		props: {
			header: { colorOnScroll: 400 },
			footer: { backgroundColor: 'black' }
		}
		},
		{
		path: '/photos',
		name: 'photos',
		components: { default: Album, header: MainNavbar, footer: MainFooter },
		props: {
			header: { colorOnScroll: 400 },
			footer: { backgroundColor: 'black' }
		}
		},
		{
		path: '/upload-xlsx',
		name: 'upload',
		components: { default: UploadXlsx, header: MainNavbar, footer: MainFooter },
		props: {
			header: { colorOnScroll: 400 },
			footer: { backgroundColor: 'black' }
		}
		},
		{
		path: '/lottery-kart',
		name: 'lottery kart',
		components: { default: LotteryKart, header: MainNavbar, footer: MainFooter },
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
