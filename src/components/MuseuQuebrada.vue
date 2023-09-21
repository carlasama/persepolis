<template>
  <div class="container container-museu" style="max-width: 1280px">
    <div class="museu-quebrada">
      <h1 class="text-pink mt-5">Museu da Quebrada</h1>
      <h1 class="text-grey m-2">
        Computadores Populares - Tecnologia da Periferia
      </h1>
      <span class="text-grey-span" style="line-height: 30px"
        >O Museu da Quebrada é onde se expõem os computadores e notebooks
        recondicionados pela perifa para arremate! Os PERS são 1ºs computadores
        populares, para todos, eco, com impacto ambiental positivo, remanufatura
        social e tecnologia diretamente da periferia, do Brasil! <br />
        <br />
        <li>
          PERS são customizados por artistas, com vários grafittis, desenhos,
          imagens, gravuras.
        </li>
        <li>
          PERS tem preço acessível e qualidade, com entrega rápida e segura.
        </li>
        <li>
          4 PERS arrematados é igual a 1 bolsa estudantil para o Programa
          Artistas do Futuro.
        </li>

        <br />
        Quer apoiar? Acesse a nossa <a class="loja-link" href="">Loja</a>.</span
      >
    </div>
    <carousel class="carousel-with-space mt-4" :perPage="3">
      <slide>
        <img src="src/assets/carousel/img1.png" style="margin-right: 10px" />
      </slide>
      <div class="spacer"></div>
      <slide>
        <img src="src/assets/carousel/img2.png" style="margin-right: 10px" />
      </slide>
      <div class="spacer"></div>
      <slide>
        <img src="src/assets/carousel/img3.png" style="margin-right: 10px" />
      </slide>
      <div class="spacer"></div>
      <slide>
        <img src="src/assets/carousel/img4.png" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import Vue from "vue";
import VueCarousel from "vue-carousel";
import { Carousel, Slide } from "vue-carousel";
Vue.use(VueCarousel);

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {};
  },
};
</script>

<style>
.spacer {
  width: 10px;
  height: 1px;
  background-color: transparent;
  flex-shrink: 0;
}

.VueCarousel-dot--active {
  background-color: #f40080 !important;
}

.carousel-item {
  margin: 10px;
}

.container-museu {
  display: flex;
  width: 1280px;
  padding: 48px 32px;
  flex-direction: column;
  margin: auto;
}

.loja-link {
    color: rgb(40, 65, 197);
    text-decoration: revert;
}
</style>
