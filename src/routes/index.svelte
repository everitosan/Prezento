<svelte:head>
  <title>EveSan</title>
  <meta name="title" property="og:title" content="EveSan [code|opensource|linux|tech]" />
  <meta name="type" property="og:type" content="website" />
  <meta name="image" property="og:image" content="https://prezento.vercel.app/preview.png" />
  <meta name="url" property="og:url" content="https://prezento.vercel.app" />
  <meta name="description" property="og:description" content="Programming lover (Front, back, devops) | Photography enthusiast | Creative heart" />

  <meta name="twitter:creator" content="@everitosan" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="EveSan [code|opensource|linux|tech]" />
  <meta name="twitter:description" content="Amante del código (Front, back, devops) | Entusiasta de la fotografía | Cora creativo" />
  <meta name="twitter:image" content="https://prezento.vercel.app/preview.png" />

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



<style lang="scss" >
  
</style>