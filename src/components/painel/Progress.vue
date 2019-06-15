

<template>
  <v-progress-circular
    :rotate="180"
    :size="100"
    :width="15"
    :value="percentage"
    color="pink"
  >{{ percentage }}%</v-progress-circular>
</template>


<script>
export default {
  props: {
    value: 0
  },
  data() {
    return {
      interval: {},
      percentage: 0
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    //this.percentage = this.value;
    this.interval = setInterval(() => {
      if (this.percentage === this.value) {
        return;
      }
      this.percentage += 10;
    }, 150);
  }
};
</script>