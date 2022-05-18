<main>
  <div class="overlay"></div>
  <div class="wrapper">

    <slot></slot>

  </div>
</main>

<style lang="scss" >
  @import "../styles/settings/_colors.scss";
  
  main {
    background: url("https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    background-size: cover;
    padding: 5px;
    position: relative;
    height: 100vh;
  }

  .overlay {
    background: rgba(0, 0, 0, 0.7);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  
  .wrapper {
    border: 3px solid $main;
    position: relative;
    height: calc(100vh - 40px);
    overflow-y: scroll;
  }


  @media screen and (min-width: 780px) and (max-width: 1299px) {
    .wrapper {
      padding: 1em;
    }
  }

  @media screen and (min-width: 1300px) {
    .wrapper {
      padding: 1em;
    }
  }
</style>

