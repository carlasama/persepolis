<template>
  <div class="w-100 m-auto" style="max-width: 1380px">
    <div class="projetos mt-5">
      <h1 class="text-pink">Projetos</h1>
      <h1 class="text-grey">Iniciativas voltadas para o futuro</h1>
      <span class="text-grey-span">
        A periferia sempre produziu tecnologia de forma criativa, nos modos de
        fazer, nas gambiarras e na construção coletiva. <br />
        O que produzimos aqui dentro precisa ser acessível.
      </span>

      <div class="item" v-for="item in items" :key="item.id">
        <div
          class="d-flex align-items-center justify-content-start items-collapse"
        >
          <img
            class="arrow mr-2"
            :class="{ 'arrow-down': !item.isCollapsed }"
            src="src/assets/svgs/arrow-right.svg"
          />
          <span class="span-pink" @click="toggleCollapse(item.id)">{{
            item.title
          }}</span>
        </div>
        <span
          v-html="item.content"
          class="text-grey-span"
          v-show="!item.isCollapsed"
        ></span>
      </div>
      <!-- <div class="nova-div" v-if="showNewDiv">
        <p class="collapse-title">Artistas do Futuro</p>
        <div class="container">
          <p class="collapse-subtitle">O jovem da quebrada</p>
          <p class="text-grey-span align">
            Os artistas do futuro são os jovens da quebrada, na perspectiva do
            desenvolvimento de tecnologias periféricas próprias e imersivas como
            a Realidade Virtual em 360° (VR360°), atrelados à capacidade de
            mostrar cotidianamente narrativas descolonizando o olhar e usando
            ferramentas de transformação social pela mudança cultural. Traz um
            olhar crítico e disruptivo em defesa do território. Desafiando
            narrativas e perspectivas dominantes, eles podem contribuir para a
            desconstrução das estruturas coloniais e promover uma visão mais
            inclusiva e diversificada.
          </p>
        </div>
        <img class="mt-4 item-img" src="src/assets/item1.png" />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Artistas do Futuro",
          isCollapsed: true,
          content:
            "Narrativas Periféricas Desconstruindo Fronteiras Culturais.",
        },
        {
          id: 2,
          title: "Quebrada Conserta",
          isCollapsed: true,
          content:
            "<b>Empoderando a Periferia:</b><br> Inclusão Digital e Sustentabilidade através do Recondicionamento de Eletrônicos.",
        },
        {
          id: 3,
          title: "WikiBlackTeca",
          isCollapsed: true,
          content:
            "<b>Promovendo a Inclusão Digital e Cultural:</b><br>Aprendizado Intuitivo para Crianças da Região Leste.",
        },
        {
          id: 4,
          title: "Descarte de eletrônicos",
          isCollapsed: true,
          content:
            "<b>Destinação Sustentável:</b><br> Promovendo a Reciclagem Responsável e a Economia Circular dos eletrônicos.",
        },
      ],
      showNewDiv: false,
    };
  },
  methods: {
    toggleCollapse(itemId) {
      const item = this.items.find((i) => i.id === itemId);
      if (item) {
        item.isCollapsed = !item.isCollapsed;

        this.showNewDiv = !item.isCollapsed;
      }
    },
  },
};
</script>

<style>
.arrow {
  width: 28px;
  height: 28px;
}

.projetos {
  border-radius: 28px;
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border: 20px solid #29aaaa;
  position: relative;
}

.nova-div {
  position: absolute;
  top: -50px;
  border-radius: 28px;
  right: -20px;
  width: 50%;
  height: 180%;
  background-color: white;
  border-left: 20px solid var(--primrias-rosa, #f40080);
  box-shadow: 0px 32px 64px -12px rgba(16, 24, 40, 0.14);
  padding: 16px;
  z-index: 2;
  bottom: 0;
  margin-bottom: 20px;
}
.collapse-title {
  background: var(--primrias-amarelo, #ea8c06);
  color: var(--bsicas-preto, #161616);
  font-family: Montserrat;
  font-size: 33px;
  line-height: 39px;
  padding: 0px 10px;
  width: 335px;
  font-weight: 700;
  display: flex;
}

.collapse-subtitle {
  color: var(--bsicas-preto, #161616);
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 42px; /* 140% */
  padding: 8px 10px 10px 10px;
}

.align {
  padding-left: 24px;
  padding-right: 24px;
  text-align: justify;
}

.items-collapse {
  cursor: pointer;
}

.item-img {
  width: 600px;
}

.arrow-down {
  transform: rotate(90deg);
}
</style>
