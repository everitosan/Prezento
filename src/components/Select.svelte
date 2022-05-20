<script lang="ts">
  import { fly } from 'svelte/transition'
  import type { Option } from "../data/dtos"
  
  export let options: Option[]
  export let label = "lang"
  export let onChange: (opt: Option) => void

  let selected:  null | Option = options.length > 0 ? options[0] : null
  let isOpen = false

  const onSelect = (opt: Option) => {
    onChange(opt)
    selected = opt
    isOpen = false
  }

</script>

<div class="Select">
  <div class="wrapper">
    <div class="label"> 
      <div>
        {label}
      </div>
    </div>
    <div class="selected" on:click={() => { isOpen = !isOpen }} >
      { selected && selected.text }

      <i class:isOpen={isOpen} class="fa-solid fa-chevron-down"></i>
    </div>
    {#if isOpen }
      <ul transition:fly="{{ y: -15, x: 5 }}" >
        {#each options as option }
          <li 
            on:click={() => { onSelect(option) }} > 
            {option.text}
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>

<style lang="scss" >
  @use "../styles/tokens/figma.scss";
  @use "../styles/settings/typography.scss";
  @use "../styles/generic/sizing.scss";

  $g-padding: sizing.calculate(1) sizing.calculate(2);

  .Select {
    @include typography.codeText;
    border: 1px solid figma.$set-on-dark-color-contrast;
    box-sizing: border-box;
    color: figma.$set-on-dark-color-text;
    transform: skewX(-15deg);
    display: inline-block;

    
    .wrapper {
      font-size: figma.$base-fontFamily-sm;
      grid-column-gap: sizing.calculate(2);
      transform: skewX(15deg);
      position: relative;
      
      .label {
        background: figma.$set-on-dark-color-contrast;
        padding: $g-padding;
        transform: skewX(-15deg);
        div {
          transform: skewX(15deg);
        }
        display: inline-block;
      }
      .selected {
        display: inline-block;
        padding: $g-padding;
        cursor: pointer;
        .fa-chevron-down {
          transition: all 0.3s;
        }
        .isOpen {
          transform: rotateZ(180deg);
        }
      }

      ul {
        background: figma.$set-on-dark-color-back;
        position: absolute;
        top: calc(100% + 2px);
        right: 1em;
        margin: 0;
        padding: 0;
        transform: skewX(-15deg);
        
        li {
          list-style: none;
          font-size: 1em;
          padding: 0.4em 2em;
          transform: skewX(15deg);
          cursor: pointer;
        }
      }
    }
  }

</style>