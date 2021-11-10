<template>
  <div :class="$style.main">
    <HeaderMain />
    <ChartsMain />
  </div>
</template>

<script>
export default {
  name: 'Pagesindex',
}
</script>

<style lang="scss" module>
.main {
  max-width: 1230px;
  margin: 0 auto;
}
</style>
