<template>
  <div>
    <div class="page-header clear-filter" filter-color="blue">
      <parallax
        class="page-header-image"
        style="background-image:url('https://ras-upload.s3.amazonaws.com/ckdb/img/header.jpeg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <img class="n-logo" src="https://ras-upload.s3.amazonaws.com/ckdb/img/logo/logo-original.png" alt="Logo KDB" />
          <h1 class="h1-seo">Kart do Barbeiro</h1>
          <h3>Um novo modo de competir.</h3>
        </div>
        <h6 class="category category-absolute">
          Designed and Coded by
          <a href="https://github.com/ricardschmidt" target="_blank">
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
              Aqui você pode se inscrever para fazer parte da nossa próxima
			  temporada, onde teremos mais 6 etapas em traçados distintos para
			  aumentar a competitividade nesse esporte que nos move.
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
import DownloadSection from './components/DownloadSection';
import GeralRank from './components/GeralRank';
import RaceRank from './components/RaceRank';
import Deposition from './components/Deposition';
import SignupForm from './components/SignupForm';
import { page } from 'vue-analytics'

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
	CalendarioTabs,
    DownloadSection,
	GeralRank,
	RaceRank,
	Deposition,
	SignupForm,
  },
  methods: {
    track () {
      page('/')
    }
  }
};
</script>
<style></style>
