<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('https://ras-upload.s3.amazonaws.com/ckdb/img/bg05.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="photo-container">
          <img src="https://ras-upload.s3.amazonaws.com/ckdb/img/avatar-team-championship.jpg" alt="Logo CKDB" />
        </div>
        <h3 class="title">Kart do Barbeiro</h3>
        <p class="category">Campeoanto</p>
        <div class="content">
          <div class="social-description">
            <h2>1</h2>
            <p>Temporadas</p>
          </div>
          <div class="social-description">
            <h2>49</h2>
            <p>Pilotos</p>
          </div>
          <div class="social-description">
            <h2>9</h2>
            <p>Corridas</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="button-container">
          <a href="#button" class="btn btn-primary btn-round btn-lg">Follow</a>
          <a
            href="#button"
            class="btn btn-default btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow us on Youtube"
          >
            <i class="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.instagram.com/kartdobarbeiro.kdb/"
            class="btn btn-default btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow us on Instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <h3 class="title">Sobre nós</h3>
        <h5 class="description">
          Criamos o Kart do Barbeiro com a vontade de ter um ambiente para que
		  entusiastas de automobilismos possam brincar e confraternizar, levamos
		   uma leve dose da pressão de um campeonato, pois isso move todos os
		   amantes de corridas. Com isso misturamos pessoas sem experiência mas
		   com empolgação para aprender e alguns pilotos de fim de semana e
		   nasceu o Campeonato do Kart do Barbeiro.
        </h5>
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <h4 class="title text-center">Nosso Campeonato</h4>
          </div>
          <tabs
            pills
            class="nav-align-center"
            tab-content-classes="gallery"
            tab-nav-classes="nav-pills-just-icons"
            type="primary"
          >
            <tab-pane title="Profile">
              <i slot="label" class="now-ui-icons design_image"></i>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="https://ras-upload.s3.amazonaws.com/ckdb/img/_DSC0115.jpg" class="img-raised" />
                    <img src="https://ras-upload.s3.amazonaws.com/ckdb/img/_DSC8632.jpg" alt="" class="img-raised" />
                    <img src="https://ras-upload.s3.amazonaws.com/ckdb/img/_DSC0287.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="https://ras-upload.s3.amazonaws.com/ckdb/img/_DSC9288.jpg" alt="" class="img-raised" />
                    <img src="https://ras-upload.s3.amazonaws.com/ckdb/img/_DSC9983.jpg" alt="" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>

            <tab-pane title="Home">
              <i slot="label" class="now-ui-icons location_world"></i>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="https://ras-upload.s3.amazonaws.com/ckdb/img/_DSC9481.jpg" alt="" class="img-raised" />
                    <img src="https://ras-upload.s3.amazonaws.com/ckdb/img/_DSC9491.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="https://ras-upload.s3.amazonaws.com/ckdb/img/_DSC9503.jpg" alt="" class="img-raised" />
                    <img src="https://ras-upload.s3.amazonaws.com/ckdb/img/_DSC9838.jpg" alt="" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>
          </tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs, TabPane } from '@/components';

export default {
  name: 'about-us',
  bodyClass: 'profile-page',
  components: {
    Tabs,
    TabPane
  }
};
</script>
<style></style>
