<svelte:head>
  <title>EveSan</title>
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