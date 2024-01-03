<template>
  <div class="container">
    <div class="sobre-banner d-none d-md-flex align-items-center">
      <section class="gallery">
        <svg
          class="img-fluid"
          width="1006"
          height="880"
          viewBox="0 0 1006 880"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M218.132 632.65H143.702L0 879.925H218.132V632.65Z"
            fill="#EA8C06"
          />
          <path
            d="M787.634 632.65H862.063L1005.69 879.925H787.634V632.65Z"
            fill="#EA8C06"
          />
          <path
            d="M331.569 340.831H300.034L157.527 589.974H331.569V340.831Z"
            fill="#29AAAA"
          />
          <path
            d="M674.05 340.831H705.66L848.092 589.974H674.05V340.831Z"
            fill="#29AAAA"
          />
          <path
            d="M400.143 322.297L359.666 568.131L604.025 608.365L644.502 362.532L400.143 322.297Z"
            fill="#29AAAA"
          />
          <path
            d="M503.891 0L335.08 298.165H672.179L503.891 0Z"
            fill="#F40080"
          />
          <path d="M740.63 632.65H264.388V880H740.63V632.65Z" fill="#EA8C06" />
        </svg>
      </section>

      <div class="col info-banner">
        <p class="title-banner">Tecnologia nas periferias</p>
        <p class="subtitle-banner">
          Construímos a educação com base em metodologias que colocam o aluno
          como protagonista e não como espectador.
        </p>
      </div>
    </div>

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

    <button
      v-show="showScrollButton"
      @click="scrollToTop"
      class="scroll-to-top"
    >
      <svg
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

.title-banner {
  color: var(--Bsicas-Preto, #161616);
  font-family: Montserrat;
  font-size: 57px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px; /* 105.263% */
  letter-spacing: -1.14px;
}

.subtitle-banner {
  width: 454px;
  color: var(--Bsicas-Preto, #161616);
  font-family: Work Sans;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  align-self: stretch;
}

.info-banner {
  position: relative;
  right: 130px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sobre-banner {
  justify-content: space-between;
}

@media (min-width: 765px) and (max-width: 1532px) {
  .info-banner {
    left: 0;
  }

  .title-banner {
    font-size: 30px;
  }

  .subtitle-banner {
    font-size: 20px;
  }
}
</style>
