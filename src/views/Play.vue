<template>
  <div class="game">
    <button @click="newGame">New Game</button>

    <board :size="size" :initialState="boardState"></board>
  </div>
</template>

<script>
import Board from '@/components/Board.vue'

export default {

  components: {
    Board
  },

  data () {
    const size = 6
    let boardState = []

    // The initial board state can be received from the url as a base64 encoded string.
    // Decoding the board url param provides a 2d array with the board state.
    // This is done so the current game survives a page refresh and can be shared using the url.
    if (this.$route.params.board) {
      boardState = JSON.parse(atob(this.$route.params.board))
    }

    return {
      size,
      boardState
    }
  },

  methods: {
    newGame: function () {
      const boardState = []
      for (let i = 0; i < this.size; i++) {
        boardState.push(Array(this.size).fill(false))
      }

      // Generate a randomized but valid board by clicking random cells
      const minMoves = this.size * this.size
      const randomMoves = Math.floor(Math.random() * (minMoves * 2 - minMoves)) + minMoves
      for (let i = this.size; i < randomMoves; i++) {
        const row = Math.floor(Math.random() * this.size)
        const col = Math.floor(Math.random() * this.size)
        this.makeMove(boardState, row, col)
      }

      // Transition to play route with new boardState in url
      this.$router.replace({name: 'play', params: { board: btoa(JSON.stringify(boardState)) }})
    },

    makeMove: function (board, row, col) {
      this.toggleTile(board, row, col)
      this.toggleTile(board, row - 1, col)
      this.toggleTile(board, row + 1, col)
      this.toggleTile(board, row, col - 1)
      this.toggleTile(board, row, col + 1)
    },

    toggleTile: function (board, row, col) {
      if (row >= 0 && row < this.size && col >= 0 && col < this.size) {
        board[row].splice(col, 1, !board[row][col])
      }
    }
  },

  watch: {
    '$route' (to, from) {
      if (to.params.board) {
        // When the board url param changes, update the boardState so it's passed down to the board component
        this.boardState = JSON.parse(atob(to.params.board))
      } else {
        this.boardState = []
      }
    }
  }
}
</script>

<style lang="scss">
  .game {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
