<template>
  <div class="section section-tabs">
    <div class="container">
      <div class="title">
        <h4 id="calendar">Calendário de 2022</h4>
      </div>
      <div class="row">
        <div class="col-md-12 ml-auto col-xl-12 mr-auto">
          <!-- Tabs with Background on Card -->
          <div class="card">
            <tabs
              centered
              type="neutral"
              tab-nav-wrapper-classes="card-header"
              tab-content-classes="card-body text-center"
              data-background-color="orange"
            >
              <tab-pane>
                <template slot="label">
                  <i class="now-ui-icons sport_trophy"></i> Tradicional
                </template>
				<div class="tab-tracado d-md-flex">
					<img src="img/t-tradicional.png" alt="">
					<p>
					O traçado tradicional do Kartódromo dos Ingleses é o mais
					conhecido por todos, um traçado que possibilita boas brigas
					por posição, com curvas de alta velocidade, chicanes estreitas
					e longas retas, alem de proporsionar muita diversão.
					</p>
				</div>
              </tab-pane>
              <tab-pane>
                <template slot="label">
                  <i class="now-ui-icons sport_trophy"></i> Ayrton Senna
                </template>
                <div class="tab-tracado d-md-flex">
					<img src="img/t-senna.png" alt="">
					<p>
					I think that’s a responsibility that I have, to push
					possibilities, to show people, this is the level that things
					could be at. So when you get something that has the name Kanye
					West on it, it’s supposed to be pushing the furthest
					possibilities. I will be the leader of a company that ends up
					being worth billions of dollars, because I got the answers. I
					understand culture. I am the nucleus.
					</p>
				</div>
              </tab-pane>
              <tab-pane>
                <template slot="label">
                  <i class="now-ui-icons sport_trophy"></i> James Hunt
                </template>
                <div class="tab-tracado d-md-flex">
					<img src="img/t-james.png" alt="">
					<p>
					I think that’s a responsibility that I have, to push
					possibilities, to show people, this is the level that things
					could be at. So when you get something that has the name Kanye
					West on it, it’s supposed to be pushing the furthest
					possibilities. I will be the leader of a company that ends up
					being worth billions of dollars, because I got the answers. I
					understand culture. I am the nucleus.
					</p>
				</div>
              </tab-pane>
              <tab-pane>
                <template slot="label">
                  <i class="now-ui-icons sport_trophy"></i> Hamilton
                </template>
                <div class="tab-tracado d-md-flex">
					<img src="img/t-hamilton.png" alt="">
					<p>
					I think that’s a responsibility that I have, to push
					possibilities, to show people, this is the level that things
					could be at. So when you get something that has the name Kanye
					West on it, it’s supposed to be pushing the furthest
					possibilities. I will be the leader of a company that ends up
					being worth billions of dollars, because I got the answers. I
					understand culture. I am the nucleus.
					</p>
				</div>
              </tab-pane>
              <tab-pane>
                <template slot="label">
                  <i class="now-ui-icons sport_trophy"></i>Fangio
                </template>
                <div class="tab-tracado d-md-flex">
					<img src="img/t-fangio.png" alt="">
					<p>
					I think that’s a responsibility that I have, to push
					possibilities, to show people, this is the level that things
					could be at. So when you get something that has the name Kanye
					West on it, it’s supposed to be pushing the furthest
					possibilities. I will be the leader of a company that ends up
					being worth billions of dollars, because I got the answers. I
					understand culture. I am the nucleus.
					</p>
				</div>
              </tab-pane>
              <tab-pane>
                <template slot="label">
                  <i class="now-ui-icons sport_trophy"></i>Beto Carreiro
                </template>
                <div class="tab-tracado d-md-flex">
					<img src="img/t-joker.png" alt="">
					<p>
					I think that’s a responsibility that I have, to push
					possibilities, to show people, this is the level that things
					could be at. So when you get something that has the name Kanye
					West on it, it’s supposed to be pushing the furthest
					possibilities. I will be the leader of a company that ends up
					being worth billions of dollars, because I got the answers. I
					understand culture. I am the nucleus.
					</p>
				</div>
              </tab-pane>
            </tabs>
          </div>
          <!-- End Tabs on plain Card -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs, TabPane } from '@/components';

export default {
  components: {
    Tabs,
    TabPane
  }
};
</script>
<style>
.tab-content.tab-content-padding {
  padding: 20px;
}
</style>
