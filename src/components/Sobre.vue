<template>
  <div class="container">
    <section class="gallery">
      <img src="./assets/banner.svg" />
    </section>

    <div class="container container-sobre" id="sobre">
      <div class="container" style="max-width: 1280px">
        <h1 class="text-pink text-center mt-5">Sobre</h1>

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

    <button  v-show="showScrollButton" @click="scrollToTop" class="scroll-to-top">
      <svg style="backdrop-filter: blur(2px);"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_889_9719)">
          <circle cx="24" cy="24" r="24" fill="#F3F3F3" fill-opacity="0.2" />
        </g>
        <path
          d="M32 28L24 20L16 28"
          stroke="#F40080"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <filter
            id="filter0_b_889_9719"
            x="-4"
            y="-4"
            width="56"
            height="56"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_889_9719"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_889_9719"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </button>
  </div>
</template>
<script>
export default {
    data() {
    return {
      showScrollButton: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Verificar se a posição da rolagem é maior que a metade da altura da tela
      this.showScrollButton = window.scrollY > window.innerHeight / 2;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped>
div#sobre {
  margin-bottom: 96px;
  margin-top: 96px;
}

.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  outline: none;
  z-index: 10;
}
</style>
