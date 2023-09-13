<template>
  <div class="w-75 m-auto">
    <div class="contato mt-5">
      <div class="row w-100">
        <div class="col">
          <h1 class="text-grey d-flex justify-content-start">
            Entre em Contato
          </h1>
          <span class="text-grey-span"
            >Quer saber mais sobre os projetos? <br />
            Entre em contato!</span
          >
        </div>
        <div class="col" style="line-height: 3">
          <div class="row">
            <div class="col">
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
            <div class="col">
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
            <div class="col">
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
            <div class="col">
              <div class="form-group">
                <label id="name-label" for="name">e-mail</label>
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
          <button class="btn-primary w-100 mt-3" 
          :class="['btn-primary', 'font-10', { 'btn-enabled': isFormValid }]" 
          :disabled="!isFormValid">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      lastname: '',
      phone: '',
      email: '',
      message: '',
    };
  },
  computed: {
    isFormValid() {
      return (
        this.name.trim() !== '' &&
        this.lastname.trim() !== '' &&
        this.phone.trim() !== '' &&
        this.email.trim() !== '' &&
        this.message.trim() !== ''
      );
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
</style>
