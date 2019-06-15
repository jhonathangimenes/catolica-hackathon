<template>
  <ve-line :data="chartData"></ve-line>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        columns: ["Idade", "Média geral", "Sua média"],
        rows: [
          { Idade: "15", "Média geral": 6, "Sua média": 9.2 },
          { Idade: "16", "Média geral": 7, "Sua média": 9.2 },
          { Idade: "17", "Média geral": 6.9, "Sua média": 9.2 },
          { Idade: "18", "Média geral": 7.5, "Sua média": 9.2 },
          { Idade: "19", "Média geral": 8.0, "Sua média": 9.2 },
          { Idade: "20", "Média geral": 8.5, "Sua média": 9.2 }
        ]
      }
    };
  },
  
};
</script>