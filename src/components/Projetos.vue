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
        <div class="row">
          <div
            class="d-flex align-items-center justify-content-start items-collapse"
          >
            <img
              class="arrow mr-2"
              :class="{ 'arrow-down': !item.isCollapsed }"
              src="./assets/arrow-right.svg"
            />
            <span class="span-pink" @click="toggleCollapse(item.id)">{{
              item.title
            }}</span>
          </div>
          <span
            class="text-grey-span"
            v-show="!item.isCollapsed && item.id === expandedItemId"
          ></span>
        </div>
        <div class="row">
          <div class="info-project" v-if="expandedItemId === item.id">
            <!-- <p class="collapse-title">{{ item.title }}</p> -->
            <div class="container">
              <p class="collapse-subtitle">{{ item.subtitle }}</p>
              <p class="text-grey-span">
                {{ item.expandedContent }}
              </p>
            </div>
            <img
              v-if="item.id == 1"
              class="mt-4 item-img"
              src="./assets/item1.png"
            />
            <img
              v-if="item.id == 2"
              class="mt-4 item-img"
              src="./assets/item2.png"
            />
            <img
              v-if="item.id == 3"
              class="mt-4 item-img"
              src="./assets/item3.png"
            />
            <img
              v-if="item.id == 4"
              class="mt-4 item-img"
              src="./assets/item4.png"
            />
          </div>
        </div>
      </div>
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
          subtitle: "O jovem da quebrada",
          isCollapsed: true,
          content:
            "Narrativas Periféricas Desconstruindo Fronteiras Culturais.",
          expandedContent:
            "Os artistas do futuro são os jovens da quebrada, na perspectiva do desenvolvimento de tecnologias periféricas próprias e imersivas como a Realidade Virtual em 360° (VR360°), atrelados à capacidade de mostrar cotidianamente narrativas descolonizando o olhar e usando ferramentas de transformação social pela mudança cultural. Traz um olhar crítico e disruptivo em defesa do território. Desafiando narrativas e perspectivas dominantes, eles podem contribuir para a desconstrução das estruturas coloniais e promover uma visão mais inclusiva e diversificada.",
        },
        {
          id: 2,
          title: "Quebrada Conserta",
          isCollapsed: true,
          subtitle: "Laboratório socioambiental e tecnológico",
          content:
            "<b>Empoderando a Periferia:</b><br> Inclusão Digital e Sustentabilidade através do Recondicionamento de Eletrônicos.",
          expandedContent:
            "Solução para inclusão digital de jovens da periferia e descarte de lixo eletrônico. Promovemos sustentabilidade recondicionando resíduos como computadores, notebooks, e celulares. Criamos uma economia circular, propondo a redução, reutilização, recuperação, e reciclagem de energia, compondo com uma logística reversa de materiais gerados através da obsolescência programada, gerando renda e inclusão digital na periferia.",
        },
        {
          id: 3,
          title: "WikiBlackTeca",
          isCollapsed: true,
          subtitle: "Biblioteca de criação intuitiva",
          content:
            "<b>Promovendo a Inclusão Digital e Cultural:</b><br>Aprendizado Intuitivo para Crianças da Região Leste.",
          expandedContent:
            "A WikiBlackTeca é uma biblioteca que utiliza uma abordagem intuitiva de aprendizado para crianças da escola pública da região Leste. Ela oferece oficinas de comunicação, expressão criativa e percepção de si e do ambiente em que vivem. Além disso, a biblioteca disponibiliza ferramentas como leitura, escrita, linguagem de programação, bem como dispositivos de inovação, como computadores, tablets e kindles, para promover o acesso à cultura e ao conhecimento digital.",
        },
        {
          id: 4,
          title: "Descarte de eletrônicos",
          subtitle:
            "Sustentabilidade em Ação: Descarte Consciente de Eletrônicos",
          isCollapsed: true,
          content:
            "<b>Destinação Sustentável:</b><br> Promovendo a Reciclagem Responsável e a Economia Circular dos eletrônicos.",
          expandedContent:
            "Oferecemos um serviço de destinação correta para o seu eletrônico, garantindo a recolha gratuita do seu dispositivo. Nosso foco principal é a reciclagem de resíduos eletrônicos, como computadores, notebooks, celulares, tablets e outros dispositivos sem uso. Nossa abordagem abrange a coleta, reciclagem, recondicionamento, manutenção e revenda de sucata e equipamentos eletrônicos. Ao reciclar os resíduos de equipamentos eletroeletrônicos (REEE), extraímos matérias-primas que são fornecidas a parceiros e outras indústrias. Dessa forma, promovemos a reversão logística do lixo de alta tecnologia, contribuindo para a economia circular. Além disso, nossa iniciativa gera renda e empregabilidade, beneficiando as comunidades periféricas da cidade. Ao mesmo tempo, evitamos danos graves à saúde humana e ao meio ambiente.",
        },
      ],
      expandedItemId: null,
    };
  },
  methods: {
    toggleCollapse(itemId) {
      const item = this.items.find((i) => i.id === itemId);
      if (item) {
        this.items.forEach((i) => {
          if (i.id !== itemId) {
            i.isCollapsed = true;
          }
        });

        item.isCollapsed = !item.isCollapsed;

        if (!item.isCollapsed) {
          this.expandedItemId = itemId;
        } else {
          this.expandedItemId = null;
        }
      }
    },
  },
};
</script>

<style>
.arrow {
  width: 28px;
  height: 28px;
  transition: transform 0.3s ease;
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

/* .nova-div {
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
} */

.collapse-title {
  background: var(--primrias-amarelo, #ea8c06);
  color: var(--bsicas-preto, #161616);
  font-family: Montserrat;
  font-size: 33px;
  line-height: 39px;
  padding: 0px 10px;
  width: auto;
  font-weight: 700;
  display: flex;
}

/* .collapse-subtitle {
  color: var(--bsicas-preto, #161616);
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 42px;
  padding: 10px 0 10px 0;
}
*/

.collapse-subtitle {
  background: var(--primrias-amarelo, #ea8c06);
  color: var(--bsicas-preto, #161616);
  font-family: Montserrat;
  font-size: 33px;
  line-height: 39px;
  padding: 0px 10px;
  width: fit-content;
  font-weight: 700;
  display: flex;
  margin: 10px 0 10px 0px;
}

@media (max-width: 768px) {
  .collapse-subtitle {
    font-size: 24px;
    line-height: 28px;
    padding: 0px 5px;
    margin: 5px 0 5px 0px;
  }

  .projetos {
    margin: 8px;
  }
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
  transition: transform 0.3s ease;
}
</style>
