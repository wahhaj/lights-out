<template>
  <div id="app">
    <div class="header">
      <img src="./assets/logo.png" class="logo">
      <h1>Lights Out</h1>
    </div>

    <div class="sidebar">
    </div>

    <div class="main">
      <router-view></router-view>
    </div>

    <div class="footer">
      <p>Created by Wahhaj Ali</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  $primary: #35495e;
  $accent: #42b983;
  $dark: #2c3e50;

  body {
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $dark;

    display: grid;
    grid-gap: 1rem;
    grid-template-areas:
     "header"
     "board"
     "sidebar"
     "footer";

    grid-template-columns: 1fr;
    grid-auto-rows: minmax(100px, auto);

     @media (min-width: 600px) {
        grid-template-columns: 200px 1fr;
        grid-template-areas:
          "header   header"
          "sidebar  board"
          "footer   footer";
     }
  }

  .header {
    grid-area: header;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    border-bottom: 1px solid #eee;

    img.logo {
      margin-right: 1rem;
      max-width: 40px;
      max-height: 40px;
    }

    h1 {
      font-size: 1.4rem;
    }
  }
  .sidebar {
    grid-area: sidebar;
  }
  .main {
    grid-area: board;
    justify-self: center;
  }
  .footer {
    grid-area: footer;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    border-top: 1px solid #eee;
  }
</style>
