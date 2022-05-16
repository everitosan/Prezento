<svelte:head>
  <title>EveSan</title>
</svelte:head>

<script context="module" >
  import loadCvInfo from "../data/cv"

  const infoSections = [
    "8", // Intro
    "10", // Formation
    "9", // Experience
    "11", // Certifications
    "12", // Achievements
    "13", // Courses
    "14", // Skills
  ]

  export const load = async () => {
    return loadCvInfo(infoSections, "es") 
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