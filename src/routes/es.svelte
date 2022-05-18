<svelte:head>
  <meta name="description" property="og:description" content="Amante del código (Front, back, devops) | Entusiasta de la fotografía | Cora creativo" />

  <meta name="twitter:description" content="Amante del código (Front, back, devops) | Entusiasta de la fotografía | Cora creativo" />
</svelte:head>

<script context="module" >
  import loadCvInfo from "../data/cv"

  export const load = async () => {
    return loadCvInfo("es") 
  }

</script>

<script lang="ts">
  import CV from "../components/CV.svelte"
  import MainWrapper from  "../components/MainWrapper.svelte"
  import Hero from "../components/Hero.svelte"


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