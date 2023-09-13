<template>
  <div class="w-100">
    <div class="items d-flex justify-content-around align-items-center">
      <div class="d-flex justify-content-center align-items-center">
        <img class="mr-4" src="../assets/mini-logo.svg" alt="logo" />
        <img src="../assets/persopolis.svg" alt="logo" />
      </div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div id="conteudoNavbarSuportado">
          <ul class="navbar-nav mr-auto" style="gap: 32px;">
            <li class="nav-item active">
              <a class="nav-link" href="#"
                >Sobre <span class="sr-only">(página atual)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Projetos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Museu da Quebrada</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ODS's</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link d-flex" href="#"
              >Loja<img class="ml-1" src="../assets/svgs/arrow-up-right.svg" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.items {
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 16px -4px rgba(16, 24, 40, 0.08);
  height: 60px;
}

.nav-link {
  color: var(--bsicas-preto, #161616);
  font-family: "Work Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
}
</style>
