<template>
  <div class="cell" :style="style">
    {{x}}, {{y}}
  </div>
</template>

<script>
export default {
  props: {
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    }
  },
  name: 'tile',
  computed: {
    style: function () {
      return `grid-area: ${this.x + 1} / ${this.y + 1} / span 1 / span 1`
    }
  }
}
</script>

<style scoped>
</style>
