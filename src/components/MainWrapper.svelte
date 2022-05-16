<main>
  <div class="overlay"></div>
  <div class="wrapper">

    <slot></slot>

  </div>
</main>

<style lang="scss" >
  @import "../styles/_colors.scss";
  @import "../styles/global.scss";
  
  main {
    background: url("/sea.jpg");
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
    align-items: flex-start;
    border: 3px solid $main;
    position: relative;
    height: calc(100vh - 40px);
    overflow-y: scroll;
    display: grid;
    grid-gap: 1em;
    justify-content: center;
  }


  @media screen and (min-width: 780px) and (max-width: 1299px) {
    .wrapper {
      grid-template-columns: 1fr 1fr;
      padding: 1em;
      
    }
  }

  @media screen and (min-width: 1300px) {
    .wrapper {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      padding: 1em;
    
    }
  }
</style>

