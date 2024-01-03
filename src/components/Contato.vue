<template>
  <div class="w-100 m-auto" style="max-width: 1380px">
    <div class="contato">
      <div class="row w-100 contato-container">
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
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="(00) 00000-0000"
                  class="form-control"
                  required
                  v-model="phone"
                  @input="validatePhoneNumber"
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
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            class="btn-primary w-100 mt-3 col-12"
            :class="['btn-primary', 'font-10', { 'btn-enabled': isFormValid }]"
            :disabled="!isFormValid"
            @click="sendEmail"
          >
            Enviar
          </button>
        </div>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content d-flex align-items-center">
              <div class="modal-header border-0">
                <h5 class="modal-title" id="exampleModalLabel">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <rect width="50" height="50" rx="25" fill="#3EB8B9" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M35.6175 15.396L20.7008 29.7918L16.7425 25.5626C16.0133 24.8751 14.8675 24.8335 14.0341 25.4168C13.2216 26.021 12.9925 27.0835 13.4925 27.9376L18.18 35.5626C18.6383 36.271 19.43 36.7085 20.3258 36.7085C21.18 36.7085 21.9925 36.271 22.4508 35.5626C23.2008 34.5835 37.5133 17.521 37.5133 17.521C39.3883 15.6043 37.1175 13.9168 35.6175 15.3751V15.396Z"
                      fill="#F9F9F9"
                    />
                  </svg>
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body pb-0">
                <p class="msg-enviada">Sua mensagem foi enviada!</p>
              </div>
              <div class="modal-footer border-0">
                <a class="enviar-msg" type="button" data-bs-dismiss="modal">
                  Enviar nova mensagem
                </a>
              </div>
            </div>
          </div>
        </div>
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
    showEmailSentModal() {
      $("#exampleModal").modal("show");
    },

    validatePhoneNumber() {
      let cleaned = this.phone.replace(/\D/g, "");

      cleaned = cleaned.slice(0, 11);

      if (cleaned.length <= 10) {
        this.phone = cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
      } else {
        this.phone = cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
      }
    },

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
.contato {
  margin-top: 96px;
}

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

.form-group {
  font-family: Work Sans;
}

.model-content {
  background-color: #F9F9F9;
  border: none !important;
}

.msg-enviada {
  color: var(--Bsicas-Preto, #161616);
  /* H4 - Montserrat SB - 28px */
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 114.286% */
  letter-spacing: -0.56px;
}

.enviar-msg {
  color: var(--Bsicas-Link, #2841c5);
  text-align: center;
  font-family: Work Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 187.5% */
}

@media (max-width: 768px) {
  .contato-container {
    display: flex;
    flex-direction: column;
  }

  .contato {
    margin-left: 8px;
    margin-right: 8px;
    box-shadow: none;
  }
}
</style>
