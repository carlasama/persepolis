<template>
  <div class="w-100">
    <div class="items d-flex justify-content-around align-items-center">
      <div class="d-flex justify-content-center align-items-center">
        <img class="mr-4" src="./assets/mini-logo.svg" alt="logo" />
        <img src="./assets/persopolis.svg" alt="logo" />
      </div>
      <nav class="navbar navbar-expand-lg navbar-light d-none d-lg-block">
        <div id="conteudoNavbarSuportado">
          <ul class="navbar-nav mr-auto" style="gap: 32px">
            <li class="nav-item active">
              <a class="nav-link" href="#sobre"
                >Sobre <span class="sr-only">(página atual)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projetos">Projetos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#museu-quebrada">Museu da Quebrada</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#ods-persopolis">ODS's</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contato">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light d-none d-lg-block">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link d-flex"
              href="https://persepolis-escola-livre-ltda.lojaintegrada.com.br"
              >Loja<img class="ml-1" src="./assets/svgs/arrow-up-right.svg" />
            </a>
          </li>
        </ul>
      </nav>

      <div class="dropdown d-lg-none">
        <a
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="#606060"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li class="mobile-menu">
            <a class="dropdown-item" href="#sobre"
              >Sobre <span class="sr-only">(página atual)</span></a
            >
          </li>
          <li class="mobile-menu">
            <a class="dropdown-item" href="#projetos">Projetos</a>
          </li>
          <li class="mobile-menu">
            <a class="dropdown-item" href="#museu-quebrada"
              >Museu da Quebrada</a
            >
          </li>
          <li class="mobile-menu">
            <a class="dropdown-item" href="#ods-persopolis">ODS's</a>
          </li>
          <li class="mobile-menu">
            <a class="dropdown-item" href="#contato">Contato</a>
          </li>
          <li class="mobile-menu">
            <a
              class="dropdown-item d-flex"
              href="https://persepolis-escola-livre-ltda.lojaintegrada.com.br"
              >Loja<img
                class="ml-1 mobile-menu-arrow"
                src="./assets/svgs/arrow-up-right.svg"
              />
            </a>
          </li>
        </ul>
      </div>
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

ul.dropdown-menu.show {
  background-color: #f9f9f9;
  top: 20px !important;
}

.mobile-menu {
  padding: 5px 0 0;
  color: var(--Bsicas-Preto, #161616);
  font-family: Work Sans;
  font-size: 14px;
  font-style: normal;
  line-height: 20px;
}

.mobile-menu-arrow {
  width: 18px;
}

a.dropdown-item {
  font-weight: 600;
}

@media (max-width: 768px) {
  .items {
    padding: 10px;
    margin: 0;
    display: flex !important;
    justify-content: space-between !important;
  }
}
</style>
