<template>
  <v-layout justify-center>
    <v-stepper v-model="e6" vertical>
      <h3 class="px-2">Escolha seu nível de compatibilidade com a pergunta</h3>
      <v-stepper-step
        :complete="e6 > 1"
        step="1"
      >De vez em quando eu me pego imaginando como determinada pessoa está se sentindo por dentro</v-stepper-step>

      <v-stepper-content step="1">
        {{ max1 }}
        <v-slider v-model="max1" min="1" max="5" label="Nível"></v-slider>
        <v-btn flat>Cancel</v-btn>
        <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
      </v-stepper-content>

      <v-stepper-step
        :complete="e6 > 2"
        step="2"
      >Eu gosto de passar o tempo admirando árvores, plantas e cenários da natureza</v-stepper-step>

      <v-stepper-content step="2">
        {{ max2 }}
        <v-slider v-model="max2" min="1" max="5" label="Nível"></v-slider>
        <v-btn flat>Cancel</v-btn>
        <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3">Pra mim é moleza fazer contas de cabeça</v-stepper-step>

      <v-stepper-content step="3">
        {{ max3 }}
        <v-slider v-model="max3" min="1" max="5" label="Nível"></v-slider>
        <v-btn flat>Cancel</v-btn>
        <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
      </v-stepper-content>

      <v-stepper-step step="4">Eu estou sempre lendo alguma coisa</v-stepper-step>
      <v-stepper-content step="4">
        {{ max4 }}
        <v-slider v-model="max4" min="1" max="5" label="Nível"></v-slider>

        <div class="text-xs-center">
          <v-dialog v-model="dialog">
            <template v-slot:activator="{ on }">
              <v-btn flat>Cancel</v-btn>
              <v-btn color="success" v-on="on">Concluir</v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>Parabéns!</v-card-title>

              <v-card-text>Seu nível de compatibilidade está de acordo com esse curso</v-card-text>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="$router.back()">OK</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-stepper-content>
    </v-stepper>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      e6: 1,
      max1: 1,
      max2: 1,
      max3: 1,
      max4: 1,
      dialog: false
    };
  }
};
</script>
