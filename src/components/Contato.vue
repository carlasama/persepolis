<template>
    <div class="w-100 m-auto" style="max-width: 1380px;">
      <div class="contato mt-5">
        <div class="row w-100">
          <div class="col">
            <h1 class="text-grey d-flex justify-content-start">
              Entre em contato
            </h1>
            <span class="text-grey-span"
              >Quer saber mais sobre os projetos? <br />
              Entre em contato!</span
            >
          </div>
          <div class="col" style="line-height: 3">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label id="name-label" for="name">Nome</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nome"
                    class="form-control"
                    required
                    v-model="name"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label id="name-label" for="name">Sobrenome</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Sobrenome"
                    class="form-control"
                    required
                    v-model="lastname"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label id="name-label" for="name">Celular</label>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    placeholder="(00) 0000.0000"
                    class="form-control"
                    required
                    v-model="phone"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label id="name-label" for="name">E-mail</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="você@email.com"
                    class="form-control"
                    required
                    v-model="email"
                  />
                </div>
              </div>
            </div>

            <div class="col">
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Mensagem</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  v-model="message"
                ></textarea>
              </div>
            </div>
            <button
              class="btn-primary w-100 mt-3 col-12"
              :class="[
                'btn-primary',
                'font-10',
                { 'btn-enabled': isFormValid },
              ]"
              :disabled="!isFormValid"
              @click="sendEmail"
            >
              Enviar
            </button>
          </div>
          <b-modal v-model="emailSent" hide-footer title="">
            <p>E-mail enviado com sucesso.</p>
          </b-modal>
        </div>
      </div>
    </div>
</template>

<script>
import Vue from "vue";

import emailjs from "emailjs-com";

export default {
  data() {
    return {
      emailSent: false,
      name: "",
      lastname: "",
      phone: "",
      email: "",
      message: "",
    };
  },
  computed: {
    isFormValid() {
      return (
        this.name.trim() !== "" &&
        this.lastname.trim() !== "" &&
        this.phone.trim() !== "" &&
        this.email.trim() !== "" &&
        this.message.trim() !== ""
      );
    },
  },
  methods: {
    closeModal() {
      this.emailSent = false;
    },

    sendEmail() {
      const templateParams = {
        to_email: "ierogoth@gmail.com", // E-mail teste
        from_name: this.name,
        from_lastname: this.lastname,
        from_phone: this.phone,
        from_email: this.email,
        from_message: this.message,
      };

      const userId = "Y68gbMybQw2nH9SGw";

      emailjs
        .send(
          "service_persepolis2",
          "template_persepolis",
          templateParams,
          userId
        )
        .then((response) => {
          console.log("E-mail enviado com sucesso!", response);
          this.emailSent = true;
        })
        .catch((error) => {
          console.error("Erro ao enviar e-mail:", error);
        });
    },
  },
};
</script>

<style>
.btn-primary {
  border-radius: 8px;
  border: 1px solid var(--primary-200, #c7ccff);
  background: var(--primary-200, #c7ccff);
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  color: var(--bsicas-branco, #f9f9f9);
  font-family: "Work Sans";
  font-size: 18px;
  font-weight: 600;
  line-height: 1.8;
}

.btn-enabled {
  background-color: rgb(61, 61, 225);
}

@media (max-width: 768px) {
  .contato {
    margin: 8px;
  }
}
</style>
