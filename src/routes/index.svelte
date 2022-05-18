<svelte:head>
  <meta name="description" property="og:description" content="Programming lover (Front, back, devops) | Photography enthusiast | Creative heart" />

  <meta name="twitter:description" content="Amante del código (Front, back, devops) | Entusiasta de la fotografía | Cora creativo" />
</svelte:head>

<script context="module" >
  import loadCvInfo from "../data/cv"
  import Hero from "../components/Hero.svelte"

  export const load = async () => {
    return loadCvInfo("en") 
  }

</script>

<script lang="ts">
  import CV from "../components/CV.svelte"
  import MainWrapper from  "../components/MainWrapper.svelte"

  type Data = {
    code: string,
    language: string
  } 
  
  export let data: Array<Data>
</script>

<MainWrapper>
  <Hero />
  <CV data={data}/>
</MainWrapper>



<style lang="scss" global >
  @import "../styles/generic/_normalize.scss";
</style>