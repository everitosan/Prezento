<svelte:head>
  <title>EveSan</title>
  <meta name="title" property="og:title" content="EveSan Prezento Site" />
  <meta name="type" property="og:type" content="website" />
  <meta name="image" property="og:image" content="https://prezento.vercel.app/preview.png" />
  <meta name="url" property="og:url" content="https://prezento.vercel.app" />
  <meta name="description" property="og:description" content="Amante del código (Front, back, devops) | Entusiasta de la fotografía | Cora creativo" />
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

  type Data = {
    code: string,
    language: string
  } 
  
  export let data: Array<Data>
</script>

<MainWrapper>
  <CV data={data}/>
</MainWrapper>



<style lang="scss" >
  
</style>