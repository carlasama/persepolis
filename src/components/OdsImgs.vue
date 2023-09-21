<template>
  <div class="w-75 m-auto">
    <div
      v-if="isDesktop"
      class="row d-flex align-items-center justify-content-center"
    >
      <div v-for="(image, index) in images" :key="index" class="col-1 p-2">
        <img :src="image.url" alt="Imagem" class="img-fluid" />
      </div>
    </div>

    <div v-else class="mobile-div">
      <div class="row justify-content-center">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="col-6 col-sm-4 p-2"
        >
          <img :src="image.url" alt="Imagem" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { url: "src/assets/ods/erradicacao-pobreza.svg" },
        { url: "src/assets/ods/educacao.svg" },
        { url: "src/assets/ods/trabalho.svg" },
        { url: "src/assets/ods/industria.svg" },
        { url: "src/assets/ods/reducao.svg" },
        { url: "src/assets/ods/cidades.svg" },
        { url: "src/assets/ods/consumo.svg" },
        { url: "src/assets/ods/vida.svg" },
        { url: "src/assets/ods/paz.svg" },
        { url: "src/assets/ods/parcerias.svg" },
      ],
      isDesktop: false,
    };
  },
  created() {
    this.isDesktop = window.innerWidth >= 768;
    window.addEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isDesktop = window.innerWidth >= 768;
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style></style>
