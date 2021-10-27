<template>
  <div :class="$style.main">
    <Header />
    <Chart />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Chart from '@/components/Charts/Charts.vue'
export default {
  components: {
    Header,
    Chart,
  },
}
</script>

<style lang="scss" module>
.main {
  max-width: 1230px;
  margin: 0 auto;
}
</style>
