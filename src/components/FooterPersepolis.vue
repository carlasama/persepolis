<template>
  <div class="container-fluid mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 text-grey-span mt-4 d-flex justify-content-center">
          <div class="d-flex justify-content-center align-items-center logo">
            <img class="mr-4" src="./assets/mini-logo.svg" alt="logo" />
            <img src="./assets/persopolis.svg" alt="logo" />
          </div>
        </div>
        <div class="col-md-4 text-grey-span mt-4">
          <p>CNPJ: 47.492.267/0001-07</p>
          <p>Rua Ernestina Amaro Torelly, 100</p>
          <p>Bairro Bom Jesus</p>
          <p>CEP: 91430-100 - Porto Alegre/RS</p>
          <p>Atendimento: Segunda a Sábado, das 8:30h às 18:00h</p>
        </div>
        <div class="col-md-4 text-grey-span mt-4">
          <p class="d-flex mb-3">
            <img
              src="./assets/icones/email.svg"
              alt="logo"
              style="width: 20px"
              class="mr-2"
            />
            persepolisescolalivre@gmail.com
          </p>
          <p class="d-flex mb-3">
            <img
              src="./assets/icones/whatsapp.svg"
              alt="logo"
              style="width: 20px"
              class="mr-2"
            />
            (51) 982633936
          </p>
          <p class="d-flex mb-3">
            <img
              src="./assets/icones/instagram.svg"
              alt="logo"
              style="width: 20px"
              class="mr-2"
            />
            <a
              href="https://www.instagram.com/persepolisescola/"
              style="text-decoration: revert; color: #2841c5"
              >@persepolisescola</a
            >
          </p>
        </div>
        <!-- <div class="col-md-4 col-12">
          <p class="text-pink-span">Assine o site!</p>
          <div class="d-flex" style="gap: 16px">
            <div class="form-group" style="width: 291px">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="você@email.com"
                class="form-control"
                v-model="email"
                @input="checkEmailValidity"
              />
            </div>
            <button
              class="btn-primary font-10"
              :class="['btn-primary', 'font-10', { 'btn-enabled': isEmailValid }]"
              :disabled="!isEmailValid"
            >
              Assinar
            </button>
          </div>
        </div> -->
      </div>

      <hr class="mt-4 mb-4 w-100" />
      <span class="text-grey-span"
        >© Persepolis - Todos os direitos reservados</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      isEmailValid: false,
    };
  },
  methods: {
    checkEmailValidity() {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      this.isEmailValid = emailPattern.test(this.email);
    },
  },
};
</script>

<style></style>

<style scoped>
.container-fluid {
  padding: 64px 0px 48px 0px;
  background: var(--bsicas-gelo, #f3f3f3);
}

.logo {
  width: 275px;
}

.btn-primary {
  border-radius: 8px;
  border: 1px solid var(--primary-200, #c7ccff);
  background: var(--primary-200, #c7ccff);
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  color: var(--bsicas-branco, #f9f9f9);
  font-family: "Work Sans";
  font-size: 18px;
  font-weight: 500;
  line-height: 1.8;
  padding: 0px 20px;
}

.btn-enabled {
  background-color: rgb(61, 61, 225);
}
</style>
