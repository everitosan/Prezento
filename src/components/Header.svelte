<script lang="ts" >

</script>

<header>
  <slot></slot>
</header>

<style lang="scss">
  @use "../styles/generic/sizing";
  @use "../styles/tokens/figma";
  
  header {
    align-items: center;
    padding: sizing.calculate(3);
    display: flex;
    flex-flow: column;
    justify-content: center;
    grid-gap: sizing.calculate(3);
  }

  @media screen and (min-width: figma.$base-breakpoint-md) {
    header {
      flex-flow: row;
      justify-content: space-between;
    }
  }

  @media print {
    header {
      padding: 0;
    }
  }
</style>