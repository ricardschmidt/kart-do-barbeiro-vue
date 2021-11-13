<template>
  <div>
    <div class="page-header clear-filter" filter-color="blue">
      <parallax
        class="page-header-image"
        style="background-image:url('img/header1.jpeg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <img class="n-logo" src="img/now-logo.png" alt="" />
          <h1 class="h1-seo">Kart do Barbeiro</h1>
          <h3>Um novo modo de competir.</h3>
        </div>
        <h6 class="category category-absolute">
          Designed and Coded by
          <a href="http://invisionapp.com/" target="_blank">
            Ricardo Schmidt</a
          >.
        </h6>
      </div>
    </div>
	<deposition></deposition>
	<calendario-tabs></calendario-tabs>
	<geral-rank></geral-rank>
	<race-rank></race-rank>
    <div class="section">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <h2 class="title">Venha fazer parte desse Campeonato</h2>
            <h5 class="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
			  facilis. Cumque molestias adipisci odio error ex maiores optio?
			  Provident reprehenderit alias officia? Possimus aperiam facilis
			  sapiente minus, rem explicabo doloribus?
            </h5>
          </div>
        </div>
      </div>
    </div>
    <signup-form></signup-form>
    <download-section></download-section>
  </div>
</template>
<script>
import { Parallax } from '@/components';
import CalendarioTabs from './components/CalendarioTabs';
import SignupForm from './components/SignupForm';
import DownloadSection from './components/DownloadSection';
import GeralRank from './components/GeralRank';
import RaceRank from './components/RaceRank';
import Deposition from './components/Deposition';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
	CalendarioTabs,
    SignupForm,
    DownloadSection,
	GeralRank,
	RaceRank,
	Deposition
  }
};
</script>
<style></style>
