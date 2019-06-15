<template>
  <v-layout align-start>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="faculdade in cursos[$route.params.id].faculdades" :key="faculdade.nome">
        <template v-slot:header>
          <div>
            <v-avatar color="grey lighten-4" size="60">
              <img :src="require('../assets/'+faculdade.logo)" alt="avatar">
            </v-avatar>
            <span class="subheading ml-2">{{ faculdade.nome }}</span>
          </div>
        </template>
        <v-card>
          <v-card-text>
            <p>Mensalidade: {{ faculdade.mensalidade }}</p>
            <p class="font-weight-bold color-red">{{ faculdade.desconto == 'sem desconto' ? 'Sem desconto' : 'Com desconto: ' + faculdade.desconto }}</p>
            <p>{{ faculdade.endereco }}</p>
            <v-layout justify-end>
              <v-btn class="success">Matricule-se</v-btn>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      cursos: [
        {
          id: 0,
          faculdades: [
            {
              nome: "Católica do Tocantins",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/catolica.jpg",
              mensalidade: "R$ 958,99",
              desconto: "R$ 682,85"
            },
            {
              nome: "CEULP/ULBRA",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/ulbra.png",
              mensalidade: "R$ 818,99",
              desconto: "R$ 625,10"
            },
            {
              nome: "Faculdade Objetivo",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/objetivo.jpg",
              mensalidade: "R$ 756,99",
              desconto: "R$ 525,26"
            }
          ]
        },
        {
          id: 1,
          faculdades: [
            {
              nome: "Católica do Tocantins",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/catolica.jpg",
              mensalidade: "R$ 858,99",
              desconto: "R$ 582,85"
            },
            {
              nome: "CEULP/ULBRA",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/ulbra.png",
              mensalidade: "R$ 718,99",
              desconto: "R$ 525,10"
            },
            {
              nome: "Faculdade Objetivo",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/objetivo.jpg",
              mensalidade: "R$ 656,99",
              desconto: "R$ 425,26"
            }
          ]
        },
        {
          id: 2,
          faculdades: [
            {
              nome: "Católica do Tocantins",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/catolica.jpg",
              mensalidade: "R$ 1008,99",
              desconto: "R$ 882,85"
            },
            {
              nome: "CEULP/ULBRA",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/ulbra.png",
              mensalidade: "R$ 938,99",
              desconto: "R$ 765,10"
            },
            {
              nome: "Faculdade Objetivo",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/objetivo.jpg",
              mensalidade: "R$ 896,99",
              desconto: "R$ 755,26"
            }
          ]
        },
        {
          id: 3,
          faculdades: [
            {
              nome: "Católica do Tocantins",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/catolica.jpg",
              mensalidade: "R$ 668,99",
              desconto: "sem desconto"
            },
            {
              nome: "CEULP/ULBRA",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/ulbra.png",
              mensalidade: "R$ 898,99",
              desconto: "sem desconto"
            },
            {
              nome: "Faculdade Objetivo",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/objetivo.jpg",
              mensalidade: "R$ 556,99",
              desconto: "sem desconto"
            }
          ]
        },
        {
          id: 4,
          faculdades: [
            {
              nome: "Católica do Tocantins",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/catolica.jpg",
              mensalidade: "R$ 1208,99",
              desconto: "sem desconto"
            },
            {
              nome: "CEULP/ULBRA",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/ulbra.png",
              mensalidade: "R$ 998,99",
              desconto: "sem desconto"
            },
            {
              nome: "Faculdade Objetivo",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/objetivo.jpg",
              mensalidade: "R$ 996,99",
              desconto: "sem desconto"
            }
          ]
        },
        {
          id: 5,
          faculdades: [
            {
              nome: "Católica do Tocantins",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/catolica.jpg",
              mensalidade: "R$ 1008,99",
              desconto: "sem desconto"
            },
            {
              nome: "CEULP/ULBRA",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/ulbra.png",
              mensalidade: "R$ 778,99",
              desconto: "sem desconto"
            },
            {
              nome: "Faculdade Objetivo",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/objetivo.jpg",
              mensalidade: "R$ 856,99",
              desconto: "sem desconto"
            }
          ]
        },
        {
          id: 6,
          faculdades: [
            {
              nome: "Católica do Tocantins",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/catolica.jpg",
              mensalidade: "R$ 1018,99",
              desconto: "R$ 982,85"
            },
            {
              nome: "CEULP/ULBRA",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/ulbra.png",
              mensalidade: "R$ 998,99",
              desconto: "R$ 945,10"
            },
            {
              nome: "Faculdade Objetivo",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/objetivo.jpg",
              mensalidade: "R$ 856,99",
              desconto: "R$ 775,26"
            }
          ]
        },
        {
          id: 7,
          faculdades: [
            {
              nome: "Católica do Tocantins",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/catolica.jpg",
              mensalidade: "R$ 936,99",
              desconto: "R$ 852,85"
            },
            {
              nome: "CEULP/ULBRA",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/ulbra.png",
              mensalidade: "R$ 999,99",
              desconto: "R$ 935,10"
            },
            {
              nome: "Faculdade Objetivo",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/objetivo.jpg",
              mensalidade: "R$ 956,99",
              desconto: "R$ 895,26"
            }
          ]
        },
        {
          id: 8,
          faculdades: [
            {
              nome: "Católica do Tocantins",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/catolica.jpg",
              mensalidade: "R$ 958,99",
              desconto: "R$ 902,85"
            },
            {
              nome: "CEULP/ULBRA",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/ulbra.png",
              mensalidade: "R$ 918,99",
              desconto: "R$ 865,10"
            },
            {
              nome: "Faculdade Objetivo",
              endereco:
                "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
              logo: "img/faculdades/objetivo.jpg",
              mensalidade: "R$ 956,99",
              desconto: "R$ 915,26"
            }
          ]
        },
      ]
    };
  }
};
</script>


<style scoped>
.w-100 {
  width: 100%;
}
.color-red {
  color: red;
}
</style>
