<script lang="ts">
  import type { Network } from "../data/dtos";

  export let networks: Network[]

</script>

<nav>
  {#each networks as network }
    <a 
      href={network.link} 
      target="_blank"
      aria-label={network.name} >
      <div class="network" >
        <i class={`${network.icon}`}></i>  
      </div>
    </a>
  {/each}
</nav>

<style lang="scss" >
  @use "../styles/tokens/figma";
  @use "../styles/generic/sizing";

  nav {
    background: figma.$set-on-dark-color-back;
    display: flex;
    grid-gap:  sizing.calculate(0.5);
    padding:  sizing.calculate(0.5);

    a, a:visited {
      color: figma.$set-on-dark-color-comment;
      text-decoration: none;

      &:hover {
        color: figma.$set-on-dark-color-contraste-live;
      }
    }

    .network {
      align-items: center;
      background-color:  figma.$set-on-dark-color-comment-dark;
      height: sizing.calculate(4);
      width: sizing.calculate(4);
      display: flex;
      justify-content: center;
      i {
        font-size: 1em;
      }
    }
  }

  @media print {
    // nav { display: none;}
  }
</style>