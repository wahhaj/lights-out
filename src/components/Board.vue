<template>
  <div class="board" :style="gridTemplate">

    <template v-for="(row, r) in board">
      <template v-for="(col, c) in row">
        <tile :lit="col" :row="r" :col="c" @click.native="makeMove(r,c)"></tile>
      </template>
    </template>

  </div>
</template>

<script>
export default {
  methods: {
    makeMove: function (row, col) {
      this.toggleTile(row, col)
      this.toggleTile(row - 1, col)
      this.toggleTile(row + 1, col)
      this.toggleTile(row, col - 1)
      this.toggleTile(row, col + 1)
    },
    toggleTile: function (row, col) {
      if (row >= 0 && row < this.size && col >= 0 && col < this.size) {
        this.board[row].splice(col, 1, !this.board[row][col])
      }
    }
  },
  data () {
    const size = 6
    const board = []
    for (let i = 0; i < size; i++) {
      board.push(Array(size).fill(false))
    }

    return {
      board,
      size
    }
  },

  computed: {
    gridTemplate: function () {
      return `grid-template: repeat(${this.size}, 1fr) / repeat(${this.size}, 1fr)`
    }
  }
}
</script>

<style lang="scss" scoped>
  .board {
    display: grid;
    grid-template: 1fr / 1fr;
    grid-gap: 0.5rem;
    width: 400px;
    height: 400px;
  }
</style>
