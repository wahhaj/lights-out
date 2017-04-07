<template>
  <div class="board">
    <template v-for="(row, x) in board">
      <template v-for="(column, y) in row">
        <tile :on="column" :x="x" :y="y"></tile>
      </template>
    </template>

  </div>
</template>

<script>
export default {
  data () {
    const size = 5
    const board = Array(size).fill(Array(size).fill(false))

    return {
      board
    }
  }
}
</script>

<style lang="scss" scoped>
.board {
  display: grid;
  grid-template: repeat(5, 20%) / repeat(5, 20%);
  grid-gap: 10px;
  width: 400px;
  height: 400px;

  .cell {
    background-color: #42b983;
  }
}

a {
  color: #42b983;
}
</style>
