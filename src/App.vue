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
  $transition: 0.15s ease-in;

  body {
    margin: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: $dark;
  }

  #app {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(100px, auto);

    grid-template-areas:
     "header"
     "sidebar"
     "board"
     "footer";
    @media (min-width: 600px) {
      grid-template-columns: 200px 1fr;
      grid-template-areas:
        "header   header"
        "sidebar  board"
        "footer   footer";
    }
  }

  .header, .footer {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;

    border-color: #eee;
    border-style: solid;
    border-width: 0;
  }

  .header {
    grid-area: header;
    border-bottom-width: 1px;

    img.logo {
      margin-right: 1rem;
      max-width: 40px;
      max-height: 40px;
    }

    h1 {
      font-size: 1.4rem;
    }
  }

  .footer {
    grid-area: footer;
    border-top-width: 1px;
  }

  .sidebar {
    grid-area: sidebar;
    padding: 1rem 1rem;

    ul.links {
      list-style: none;
      margin: 0;
      padding: 0;

      li > a {
        display: block;
        font-size: 1.2rem;
        margin: 0.5rem 0;
        padding: 0.5rem 1rem;
        border-radius: 3px;

        transition: background-color 0.15s ease;
        &:hover {
          background-color: lighten($accent, 40);
        }
      }
    }
  }

  .main {
    grid-area: board;
    justify-self: center;
    padding: 1rem 1rem;
  }

  a {
    color: $accent;
    text-decoration: none;
  }

  button {
    background-color: $accent;
    color: #fff;
    font-size: 1rem;

    margin: 1rem;
    padding: 0.5rem 1rem;

    border: none;
    border-radius: 3px;
    box-shadow: 0 5px $primary;

    cursor: pointer;
    outline: none;

    transition: background-color 0.05s ease-in, transform $transition, box-shadow $transition;

    &:hover {
      background-color: lighten($accent, 20);
    }

    &:active {
      box-shadow: 0 2px $primary;
      transform: translateY(2px);
    }
  }
</style>
