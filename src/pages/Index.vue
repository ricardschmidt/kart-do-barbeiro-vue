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
	<calendario-tabs></calendario-tabs>
    <div class="section">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <h2 class="title">Completed with examples</h2>
            <h5 class="description">
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you're good to go.
              More importantly, looking at them will give you a picture of what
              you can built with this powerful Bootstrap 4 ui kit.
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

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
	CalendarioTabs,
    SignupForm,
    DownloadSection,
  }
};
</script>
<style></style>
