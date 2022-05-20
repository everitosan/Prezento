<svelte:head>
  <meta name="description" property="og:description" content="Programming lover (Front, back, devops) | Photography enthusiast | Creative heart" />

  <meta name="twitter:description" content="Amante del código (Front, back, devops) | Entusiasta de la fotografía | Cora creativo" />
</svelte:head>

<script context="module" >
  import loadCvInfo from "../data/cv"
  import loadNetworkInfo from "../data/network"
  import { list } from "../data/locale"
  
  export const load = async () => {
    const cv = await loadCvInfo("en")
    const locales = await list()
    const networks = await loadNetworkInfo()
    
    return  {
      props: {
        data: {
          locales,
          networks,
          cv
        }
      }
    }
  }

  export const prerender = true
  
</script>

<script lang="ts">
  import MainWrapper from  "../components/MainWrapper.svelte"
  import Hero from "../components/Hero.svelte"
  import Header from "../components/Header.svelte"
  import LangSelector from "../components/Select.svelte"
  import NavLinks from "../components/NavLinks.svelte"
  import CV from "../components/CV.svelte"
  
  import type { Option, Network } from "../data/dtos"

  type Data = {
    locales: Option[],
    networks: Network[],
    cv: [
      {
        code: string,
        language: string
      }
    ]
  } 
  
  export let data: Data


</script>

<MainWrapper>
  <Header>
    <NavLinks networks={data.networks} />
    <LangSelector options={data.locales} onChange={(opt) => {
      if(opt.id === 2) {
        window.location.href = "/es"
      }
    }} />
  </Header>
  <Hero />
  <CV data={data.cv}/>
</MainWrapper>



<style lang="scss" global >
  @import "../styles/generic/_normalize.scss";
</style>