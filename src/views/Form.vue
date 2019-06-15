<template>
  <v-layout justify-center>
    <v-flex md6>
      <form class="w-100">
        <v-text-field label="Name" value="Pedro Gomes Silva" required></v-text-field>
        <v-text-field label="E-mail" value="pedro.silva@gmail.com" required></v-text-field>
        <v-text-field
          disabled
          label="Curso"
          :value="cursosDesc[$route.params.cursoId].nome"
          required
        ></v-text-field>
        <v-text-field label="Data Nascimento" value="23/05/2001" required></v-text-field>
        <v-text-field disabled label="Valor mensalidade" :value="valorFormatado" required></v-text-field>
        <v-checkbox
          value="1"
          label="Aceitar os termos"
          data-vv-name="checkbox"
          type="checkbox"
          required
        ></v-checkbox>
        <div class="text-xs-center">
          <v-dialog v-model="dialog">
            <template v-slot:activator="{ on }">
              <v-btn class="btn-termos" flat small dark v-on="on">Ler termos</v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>Termos</v-card-title>

              <v-card-text class="justify-text">
                Por meio do documento de Termos e Condições de Uso um site ou um aplicativo explica aos usuários quais são as condições de utilização do serviço disponibilizado, seja ele gratuito ou pago.
                Dessa forma, este documento é como um contrato estabelecido entre o site e seu usuário, determinando os seus direitos e suas responsabilidades como organização e também os direitos e responsabilidades do seu consumidor.
              </v-card-text>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="dialog = !dialog">OK</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <v-layout justify-end>
          <v-btn @click="$router.push('/')" class="error">Cancelar</v-btn>
          <v-dialog v-model="dialog2">
            <template v-slot:activator="{ on }">
              <v-btn class="success" v-on="on">Matricular</v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>Matrícula confirmada</v-card-title>

              <v-card-text class="justify-text">
                Sua matrícula foi enviada a faculdade.
              </v-card-text>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="matricular()">OK</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      dialog2: false
    };
  },
  computed: {
    ...mapState(["cursos", "cursosDesc"]),
    valorFormatado() {
      let valor = "";
      this.cursos[this.$route.params.cursoId].faculdades[
        this.$route.params.faculdadeId
      ].desconto == "sem desconto"
        ? (valor = this.cursos[this.$route.params.cursoId].faculdades[
            this.$route.params.faculdadeId
          ].mensalidade)
        : (valor = this.cursos[this.$route.params.cursoId].faculdades[
            this.$route.params.faculdadeId
          ].desconto);
      return valor;
    }
  },
  methods: {
    matricular() {
      this.$router.push("/");
    }
  }
};
</script>


<style scoped>
.w-100 {
  width: 100%;
}
.btn-termos {
  color: blue !important;
  margin: -10px 0px 20px 0px !important;
  padding: 0px !important;
}
.text-xs-center {
  text-align: left !important;
}
.justify-text {
  text-align: justify;
}
</style>
