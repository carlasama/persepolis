<template>
  <div class="container">
    <section class="gallery">
      <img :src="banner"/>
    </section>

    <div class="container container-sobre" id="sobre">
      <div class="container" style="max-width: 1280px;">
        <h1 class="text-pink mt-5">Sobre</h1>

        <h1 class="text-grey p-2">Persepolis Escola Livre</h1>
        <span class="text-grey-span"
          >A Persepolis é um hub de inovação socioambiental e tecnológico que
          vai além do convencional. Baseado em conhecimentos e práticas em
          tecnologia da informação e criatividade, nosso espaço é um verdadeiro
          centro de transformação. <br />
          Engajados com jovens da periferia e integrados à rede de educação
          pública, nossas atividades buscam promover o senso de pertencimento ao
          território e oferecer soluções para reduzir as desigualdades sociais.
          <br />
          Com ferramentas de acesso ao meio digital, integração de teoria e
          prática, e o desenvolvimento de autonomia e pensamento crítico,
          capacitamos os jovens para enfrentarem os desafios cotidianos de forma
          engajada e consciente. Na Persepolis, a inovação encontra seu
          propósito social.</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import banner from '@/assets/banner.svg';

export default {
data() {
  return {
    banner,
  }
},
}
</script>
<style>
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

body {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  background: #fff;
  color: #999;
  line-height: 1.5;
}

.container {
  max-width: 980px;
  margin: 0 auto;
}

.container-sobre {

}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.gallery ul li {
  padding-bottom: 1em;
}

.item {
  max-width: 50%;
  float: left;
  margin-bottom: 1em;
  display: block;
}

.item:nth-of-type(2n + 1) {
  clear: left;
}

h1,
h2,
h3 {
  color: #333;
}

h1 {
  font-size: 2em;
  text-align: center;
  font-weight: 500;
}

h3 {
  font-size: 1.3em;
  margin: 2rem 0 0 0;
  line-height: 0.5;
  font-weight: 500;
}

a {
  color: #33bfd0;
  text-decoration: none;
  -webkit-transition: color 0.3s ease-out;
  -o-transition: color 0.3s ease-out;
  transition: color 0.3s ease-out;
}

a:hover {
  color: #70d2de;
}

img {
  display: block;
  vertical-align: middle;
  width: 100%;
  -webkit-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
  transition: opacity 0.3s ease-out;
}

img:hover {
  opacity: 0.75;
}

a,
img {
  border: none;
  outline: none;
}

@media (max-width: 824px) {
  header nav li {
    margin: 0 10px;
  }

  .gallery ul {
    grid-template-columns: 100%;
  }

  .gallery ul li {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }

  .item {
    max-width: 100%;
    float: none;
  }
}
</style>
