<template>
  <div class="section section-tabs" style="background-image:url('https://ras-upload.s3.amazonaws.com/ckdb/img/background/bg-calendario.jpg')">
    <div class="container">
      <div class="title">
        <h3 id="calendar">Calendário de 2022</h3>
      </div>
      <div class="row">
        <div class="col-md-12 ml-auto col-xl-12 mr-auto">
          <!-- Tabs with Background on Card -->
          <div class="card calendario-tabs-content">
            <tabs
              centered
              type="neutral"
              tab-nav-wrapper-classes="card-header"
              tab-content-classes="card-body text-center"
              data-background-color="orange"
			  v-model="activeTab"
            >
				<tab-pane label="James Hunt">
					<template slot="label">
					<i class="now-ui-icons sport_trophy"></i> James Hunt
					</template>
					<div class="tab-tracado d-md-flex">
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/tracks/t-james.png" alt="">
						<div>
							<p class="track-date">Data:<span>29/01/2022</span> 16:00hrs</p>
							<p>
							Esta é a Monza do calendário, uma pista muito rápida, mas
							que cobra seu preço sendo muito desgastante, os pilotos
							precisam prestar muita atenção na parte sinuosa para não
							perder a posição na curva após a reta oposta.
							</p>
						</div>
					</div>
				</tab-pane>
				<tab-pane label="Hamilton">
					<template slot="label">
					<i class="now-ui-icons sport_trophy"></i> Hamilton
					</template>
					<div class="tab-tracado d-md-flex">
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/tracks/t-hamilton.png" alt="">
						<div>
							<p class="track-date">Data:<span>19/02/2022</span> 15:00hrs</p>
							<p>
							Este é um traçado novo, ainda desconhecido, mas montado
							para ser rápido com pontos estratégicos de ultrapassagem
							que não permite muitos erros. Este traçado não exige
							muita técnica, porém é necessário defender bem sua posição.
							</p>
						</div>
					</div>
				</tab-pane>
				<tab-pane label="Ayrton Senna">
					<template slot="label">
					<i class="now-ui-icons sport_trophy"></i> Ayrton Senna
					</template>
					<div class="tab-tracado d-md-flex">
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/tracks/t-senna.png" alt="">
						<div>
							<p class="track-date">Data:<span>27/03/2022</span> 15:00hrs</p>
							<p>
							Este é o traçado que mostra a habilidade dos pilotos, com
							várias chicanes estreitas é necessário escolher muito bem a
							hora de ultrapassar, para não perder a chance, e acabar se
							enroscando na próxima curva.
							</p>
						</div>
					</div>
				</tab-pane>
				<tab-pane label="Beto Carreiro">
					<template slot="label">
					<i class="now-ui-icons sport_trophy"></i> Beto Carreiro
					</template>
					<div class="tab-tracado d-md-flex">
						<img style="padding: 60px 0 60px 0;"
							 src="https://ras-upload.s3.amazonaws.com/ckdb/img/tracks/t-beto-carreiro.png"
							 alt="Kartodromo do Beto Carreiro">
						<div>
							<p class="track-date">Data:<span>23/04/2022</span> 15:00hrs</p>
							<p>
							A pista do Kartódromo Internacional do Beto Carreiro
							é a sede de diversos campeonatos organizados na região
							sul, normalmente recebendo o sul-brasileiro de kart,
							corrida das estrelas entre vários outros.
							</p>
						</div>
					</div>
				</tab-pane>
				<tab-pane label="Verstappen">
					<template slot="label">
					<i class="now-ui-icons sport_trophy"></i>Verstappen
					</template>
					<div class="tab-tracado d-md-flex">
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/tracks/t-verstappen.png" alt="">
						<div>
							<p class="track-date">Data:<span>22/05/2022</span> 15:00hrs</p>
							<p>
							O traçado que promete ser o mais rápido da temporada,
							com curvas rápidas e poucos pontos de ultrapassagem
							na frenagem, um traçado que a força do motor e a
							habilidade de saída de curva irão contar bastante.
							</p>
						</div>
					</div>
				</tab-pane>
				<tab-pane label="Tradicional">
					<template slot="label">
					<i class="now-ui-icons sport_trophy"></i> Tradicional
					</template>
					<div class="tab-tracado d-md-flex">
						<img src="https://ras-upload.s3.amazonaws.com/ckdb/img/tracks/t-tradicional.png" alt="Traçado Tradicional">
						<div>
							<p class="track-date">Data:<span>25/06/2022</span> 15:00hrs</p>
							<p>
							O traçado tradicional do Kartódromo dos Ingleses é o mais
							conhecido por todos, um traçado que possibilita boas brigas
							por posição, com curvas de alta velocidade, chicanes
							estreitas e longas retas, além de proporcionar muita diversão.
							</p>
						</div>
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
  },
  data() {
      return {
        activeTab: this.getActiveTab(),

      }
  },
  methods: {
		getActiveTab() {
			if(new Date().getTime() < new Date("2022-02-19")) {
				return "Hamilton"
			} else if(new Date().getTime() < new Date("2022-03-27")) {
				return  "Ayrton Senna"
			} else if(new Date().getTime() < new Date("2022-04-23")) {
				return  "Beto Carreiro"
			} else if(new Date().getTime() < new Date("2022-05-22")) {
				return  "Verstappen"
			} else if(new Date().getTime() < new Date("2022-06-25")) {
				return  "Tradicional"
			}
		}
  }
};
</script>
<style>
.tab-content.tab-content-padding {
  padding: 20px;
}
</style>
