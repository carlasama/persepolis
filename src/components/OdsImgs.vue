<template>
  <div class="w-75 m-auto">
    <div
      v-if="isDesktop"
      class="row d-flex align-items-center justify-content-center"
    >
      <div class="col-1 p-2">
        <img
          src="./assets/ods/erradicacao-pobreza.svg"
          alt="Imagem"
          class="img-fluid"
        />
      </div>
      <div class="col-1 p-2">
        <img src="./assets/ods/educacao.svg" alt="Imagem" class="img-fluid" />
      </div>
      <div class="col-1 p-2">
        <img src="./assets/ods/trabalho.svg" alt="Imagem" class="img-fluid" />
      </div>
      <div class="col-1 p-2">
        <img src="./assets/ods/industria.svg" alt="Imagem" class="img-fluid" />
      </div>
      <div class="col-1 p-2">
        <img src="./assets/ods/reducao.svg" alt="Imagem" class="img-fluid" />
      </div>
      <div class="col-1 p-2">
        <img src="./assets/ods/cidades.svg" alt="Imagem" class="img-fluid" />
      </div>
      <div class="col-1 p-2">
        <img src="./assets/ods/consumo.svg" alt="Imagem" class="img-fluid" />
      </div>
      <div class="col-1 p-2">
        <img src="./assets/ods/vida.svg" alt="Imagem" class="img-fluid" />
      </div>
      <div class="col-1 p-2">
        <img src="./assets/ods/paz.svg" alt="Imagem" class="img-fluid" />
      </div>
      <div class="col-1 p-2">
        <img src="./assets/ods/parcerias.svg" alt="Imagem" class="img-fluid" />
      </div>
      <!-- Repita o bloco de img para as outras imagens -->
    </div>

    <div v-else class="mobile-div">
      <div class="row justify-content-center">
        <div class="col-6 col-sm-4 p-2">
          <img
            src="./assets/ods/erradicacao-pobreza.svg"
            alt="Imagem"
            class="img-fluid"
          />
        </div>
        <div class="col-6 col-sm-4 p-2">
          <img src="./assets/ods/educacao.svg" alt="Imagem" class="img-fluid" />
        </div>
        <div class="col-6 col-sm-4 p-2">
          <img src="./assets/ods/trabalho.svg" alt="Imagem" class="img-fluid" />
        </div>
        <div class="col-6 col-sm-4 p-2">
          <img
            src="./assets/ods/industria.svg"
            alt="Imagem"
            class="img-fluid"
          />
        </div>
        <div class="col-6 col-sm-4 p-2">
          <img src="./assets/ods/reducao.svg" alt="Imagem" class="img-fluid" />
        </div>
        <div class="col-6 col-sm-4 p-2">
          <img src="./assets/ods/cidades.svg" alt="Imagem" class="img-fluid" />
        </div>
        <div class="col-6 col-sm-4 p-2">
          <img src="./assets/ods/consumo.svg" alt="Imagem" class="img-fluid" />
        </div>
        <div class="col-6 col-sm-4 p-2">
          <img src="./assets/ods/vida.svg" alt="Imagem" class="img-fluid" />
        </div>
        <div class="col-6 col-sm-4 p-2">
          <img src="./assets/ods/paz.svg" alt="Imagem" class="img-fluid" />
        </div>
        <div class="col-6 col-sm-4 p-2">
          <img
            src="./assets/ods/parcerias.svg"
            alt="Imagem"
            class="img-fluid"
          />
        </div>
        <!-- Repita o bloco de img para as outras imagens -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { url: "src/components/assets/ods/erradicacao-pobreza.svg" },
        { url: "src/components/assets/ods/educacao.svg" },
        { url: "src/components/assets/ods/trabalho.svg" },
        { url: "src/components/assets/ods/industria.svg" },
        { url: "src/components/assets/ods/reducao.svg" },
        { url: "src/components/assets/ods/cidades.svg" },
        { url: "src/components/assets/ods/consumo.svg" },
        { url: "src/components/assets/ods/vida.svg" },
        { url: "src/components/assets/ods/paz.svg" },
        { url: "src/components/assets/ods/parcerias.svg" },
      ],
      isDesktop: false,
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
