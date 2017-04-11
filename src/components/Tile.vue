<template>
  <div
    class="tile"
    :class="{ 'is-lit': lit }"
    :style="gridArea">
  </div>
</template>

<script>
export default {
  props: {
    lit: {
      type: Boolean,
      required: true,
      default: false
    },
    row: {
      type: Number,
      required: true
    },
    col: {
      type: Number,
      required: true
    }
  },
  computed: {
    gridArea: function () {
      return `grid-area: ${this.row + 1} / ${this.col + 1} / span 1 / span 1`
    }
  }
}
</script>

<style lang="scss">
  $primary: #35495e;
  $accent: #42b983;

  .tile {
    background-color: $primary;
    border-radius: 2px;
    transition: background-color 0.05s ease-in;

    &.is-lit {
      background-color: $accent;

      &:hover {
        background-color: lighten($accent, 20);
      }
    }

    &:hover {
      cursor: pointer;
      background-color: lighten($primary, 20);
    }
  }
</style>
