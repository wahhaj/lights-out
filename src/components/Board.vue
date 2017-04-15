<template>
  <div class="game" v-if="boardState.length">

    <div class="board" :style="gridTemplate">
      <template v-for="(row, r) in boardState">
        <template v-for="(col, c) in row">
          <tile :lit="col" :row="r" :col="c" @click.native="makeMove(r,c)"></tile>
        </template>
      </template>
    </div>

    <p v-if="finished">Congratulations!</p>
    <p>Tiles remaining: {{remaining}}</p>
    <p>Number of moves: {{moves}}</p>

    <button @click="restart">Restart</button>

  </div>
</template>

<script>
import Tile from './Tile.vue'

export default {

  components: {
    Tile
  },

  props: {
    initialState: {
      type: Array,
      required: true
    },
    size: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      boardState: this.cloneInitialState(),
      moves: 0
    }
  },

  computed: {
    finished: function () {
      return this.remaining === 0
    },
    gridTemplate: function () {
      return `grid-template: repeat(${this.size}, 1fr) / repeat(${this.size}, 1fr)`
    },
    remaining: function () {
      return [].concat(...this.boardState) // flatten boardState array
          .filter((lit) => lit).length // count number of `true` values
    }
  },

  methods: {
    cloneInitialState: function () {
      const boardState = []
      if (this.initialState.length) {
        this.initialState.forEach((row) => {
          boardState.push(row.slice())
        })
      }
      return boardState
    },
    makeMove: function (row, col) {
      this.toggleTile(row, col)
      this.toggleTile(row - 1, col)
      this.toggleTile(row + 1, col)
      this.toggleTile(row, col - 1)
      this.toggleTile(row, col + 1)

      this.moves += 1
    },
    restart: function () {
      this.boardState = this.cloneInitialState()
      this.moves = 0
    },
    toggleTile: function (row, col) {
      if (row >= 0 && row < this.size && col >= 0 && col < this.size) {
        this.boardState[row].splice(col, 1, !this.boardState[row][col])
      }
    }
  },

  watch: {
    initialState: function () {
      this.boardState = this.cloneInitialState()
      this.moves = 0
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
