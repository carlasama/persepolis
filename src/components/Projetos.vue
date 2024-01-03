<template>
  <div class="w-100 m-auto" style="max-width: 1380px">
    <div
      class="projetos mt-5"
      :class="{ 'projetos-container-expanded': expandedItemId }"
    >
      <div class="sobre-projetos">
        <h1 class="text-pink">Projetos</h1>
        <h1
          class="text-grey"
          :class="{ 'text-grey-span-expanded': expandedItemId }"
        >
          Iniciativas voltadas para o futuro
        </h1>
        <span
          class="text-grey-span"
          :class="{ 'text-grey-span-expanded': expandedItemId }"
        >
          A periferia sempre produziu tecnologia de forma criativa, nos modos de
          fazer, nas gambiarras e na construção coletiva. <br />
          O que produzimos aqui dentro precisa ser acessível.
        </span>
      </div>

      <div class="item-container">
        <div class="item" v-for="item in items" :key="item.id">
          <div class="row">
            <div
              class="d-flex align-items-center justify-content-start items-collapse"
            >
              <div class="content-project d-flex flex-column">
                <div class="d-flex">
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
                  v-if="!item.isCollapsed && item.id === expandedItemId"
                  class="text-grey-span"
                  v-html="formatContent(item.content)"
                  :class="{
                    'text-grey-span-expanded-two': expandedItemId,
                    'item-diferente': item.id === 1,
                  }"
                  >{{ item.content }}</span
                >
              </div>
            </div>
            <span
              class="text-grey-span descricao"
              v-show="!item.isCollapsed && item.id === expandedItemId"
            ></span>
          </div>
          <div class="row" style="display: grid">
            <div
              class="card info-project"
              v-if="expandedItemId === item.id"
              :class="{ expanded: expandedItemId === item.id }"
            >
              <button
                class="close-button"
                @click="closeCard(item.id)"
                :class="{ 'close-button': expandedItemId }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M22.5 7.5L7.5 22.5M7.5 7.5L22.5 22.5"
                    stroke="#484949"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <div class="container container-content mt-3">
                <p class="collapse-title">{{ item.title }}</p>
                <p class="collapse-subtitle">{{ item.subtitle }}</p>
                <p
                  class="text-grey-span m-3"
                  v-html="formatContent(item.expandedContent)"
                >
                  {{ item.expandedContent }}
                </p>
              </div>
              <img
                v-if="item.id == 1"
                class="item-img"
                src="./assets/item1.png"
              />
              <img
                v-if="item.id == 2"
                class="item-img"
                src="./assets/item2.png"
              />
              <img
                v-if="item.id == 3"
                class="item-img"
                src="./assets/item3.png"
              />
              <img
                v-if="item.id == 4"
                class="item-img"
                src="./assets/item4.png"
              />
            </div>
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
            "Empoderando a Periferia: Inclusão Digital e Sustentabilidade através do Recondicionamento de Eletrônicos.",
          expandedContent:
            "Solução para inclusão digital de jovens da periferia e descarte de lixo eletrônico. Promovemos sustentabilidade recondicionando resíduos como computadores, notebooks, e celulares. Criamos uma economia circular, propondo a redução, reutilização, recuperação, e reciclagem de energia, compondo com uma logística reversa de materiais gerados através da obsolescência programada, gerando renda e inclusão digital na periferia.",
        },
        {
          id: 3,
          title: "WikiBlackTeca",
          isCollapsed: true,
          subtitle: "Biblioteca de criação intuitiva",
          content:
            "Promovendo a Inclusão Digital e Cultural: Aprendizado Intuitivo para Crianças da Região Leste.",
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
            "Destinação Sustentável: Promovendo a Reciclagem Responsável e a Economia Circular dos eletrônicos.",
          expandedContent:
            "Oferecemos um serviço de destinação correta para o seu eletrônico, garantindo a recolha gratuita do seu dispositivo. Nosso foco principal é a reciclagem de resíduos eletrônicos, como computadores, notebooks, celulares, tablets e outros dispositivos sem uso. Nossa abordagem abrange a coleta, reciclagem, recondicionamento, manutenção e revenda de sucata e equipamentos eletrônicos. Ao reciclar os resíduos de equipamentos eletroeletrônicos (REEE), extraímos matérias-primas que são fornecidas a parceiros e outras indústrias. Dessa forma, promovemos a reversão logística do lixo de alta tecnologia, contribuindo para a economia circular.",
        },
      ],
      expandedItemId: null,
    };
  },
  methods: {
    formatContent(content) {
      const wordsToBold = [
        "jovens da quebrada",
        "olhar",
        "ferramentas de transformação social",
        "disruptivo",
        "crítico",
        "visão",
        "inclusiva",
        "diversificada",
        "inclusão digital de jovens",
        "economia circular",
        "logística reversa",
        "abordagem intuitiva",
        "comunicação",
        "expressão",
        "criativa",
        "percepção de si",
        "promover o acesso à cultura",
        "reciclagem de resíduos eletrônicos",
        "promovemos a reversão logística do lixo",
        "renda",
        "empregabilidade",
        "descarte",
        "Narrativas Periféricas Desconstruindo Fronteiras Culturais",
        "Empoderando a Periferia",
        "Promovendo a Inclusão Digital e Cultural",
        "Destinação Sustentável",
      ];

      wordsToBold.forEach((word) => {
        const regex = new RegExp(`\\b${word}\\b`, "gi");
        content = content.replace(regex, `<strong>${word}</strong>`);
      });

      return content;
    },
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
    closeCard(itemId) {
      this.expandedItemId = null;
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
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border: 20px solid #29aaaa;
  position: relative;
  background-color: #f9f9f9;
  box-shadow: 0 0 0 8px #29aaaa;
}

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

.collapse-title {
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

.collapse-subtitle {
  color: var(--Bsicas-Preto, #161616);
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 42px;
}

.sobre-projetos {
  display: flex;
  flex-direction: column;
  align-items: self-start;
  gap: 16px;
}

@media (max-width: 768px) {
  .logo {
    margin-bottom: 28px;
  }

  .text-pink {
    display: flex;
  }

  .text-grey-span-expanded-two,
  .close-button {
    display: none;
  }

  .collapse-title {
    font-size: 24px;
    line-height: 28px;
    padding: 0px 5px;
    margin: 5px 0 5px 0px;
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
  width: fit-content;
}

.item-container {
  display: flex;
  flex-direction: column;
  gap: 19px;
  margin-top: 24px;
}
.arrow-down {
  transform: rotate(90deg);
  transition: transform 0.3s ease;
}

.expanded {
  grid-column: span 6;
  margin-left: 87%;
  position: absolute;
  z-index: 10;
  width: 828.608px;
  transform: translateX(-75%);
  bottom: auto;
  top: -70px;
}

.card.info-project.expanded {
  border-radius: 28px;
  border-left: 20px solid var(--Primrias-Rosa, #f40080);
  background: var(--Bsicas-Branco, #f9f9f9);
  background-color: #f9f9f9;
  border-right: 0;
  border-top: 0;
  border-bottom: 0;
  box-shadow: 0px 32px 64px -12px rgba(16, 24, 40, 0.14);
}

.text-grey-span-expanded {
  width: 55%;
  display: flex;
  text-align: left;
}

.text-grey-span-expanded-two {
  width: 60%;
  text-align: left;
}

.item-diferente {
  width: 100%;
}

.projetos-container-expanded {
  margin-top: 80px !important;
  margin-bottom: 350px;
}

@media (max-width: 1280px) {
  .card.info-project.expanded {
    margin-left: 0;
    padding: 0;
    position: relative;
    width: auto;
    transform: none;
    bottom: 0;
    top: 0;
    box-shadow: none;
    border: none;
  }

  .text-grey-span-expanded {
    width: 100%;
  }

  .text-grey-span {
    margin: 0 !important;
  }

  .collapse-title {
    display: none;
  }

  .text-grey-span-expanded-two,
  .close-button {
    display: none;
  }

  .container {
    min-width: 100%;
  }

  .collapse-subtitle {
    font-size: 22px;
    font-weight: 600;
  }

  .projetos-container-expanded {
    margin: 0;
  }

  .projetos {
    margin: 8px;
    box-shadow: none;
  }

  .item-img {
    margin-top: 15px;
    width: -webkit-fill-available;
  }

  .text-grey {
    margin: 10px 0 10px 0 !important;
    font-size: 25px;
    line-height: 1.2;
    text-align: left;
    padding: 0 !important;
  }

  .text-pink {
    text-align: left;
  }
}

.close-button {
  position: absolute;
  top: 10px;
  right: 18px;
  cursor: pointer;
  background: none;
  border: none;
  color: #333;
}
</style>
