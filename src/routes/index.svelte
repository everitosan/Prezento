<svelte:head>
  <title>EveSan</title>
</svelte:head>

<script context="module" >

  const infoSections = [
    "1", // Intro
    "3", // Formation
    "2", // Experience
    "5", // Certifications
    "4", // Achievements
    "6", // Courses
    "7", // Skills
  ]

  const lang ="en"

  export const load = async () => {
    try {
      const promisses = infoSections
        .map(section => `http://localhost:1337/api/infos/${section}?locale=${lang}`)
        .map(endpoint => fetch(`${endpoint}`).then(res => res.json()))

      const allData = await Promise.all(promisses)

      const filtered = allData.map(full => ({
        code: full.data.attributes.content,
        language: full.data.attributes.language
      }))

      return {
        props: {
          data: filtered
        }
      }
    } catch(e) {
      return { props: {data: {} }}
    }
  }

</script>

<script lang="ts">
  import CodeBox from "../components/CodeBox.svelte"

  
  type Data = {
    code: string,
    language: string
  } 
  
  export let data: Array<Data>
</script>

<main>
  <div class="overlay"></div>
  <div class="wrapper">
    {#each data as section, i}
      <div class={`Box Box-${i}`} >
        <CodeBox language={section.language} code={section.code} ></CodeBox>
      </div>
    {/each}
  </div>
</main>



<style lang="scss" >
  @import "../styles/_colors.scss";
  @import "../styles/global.scss";
  
  main {
    background: url("/sea.jpg");
    background-size: cover;
    padding: 5px;
    position: relative;
    height: 100vh;
  }

  .overlay {
    background: rgba(0, 0, 0, 0.7);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  
  .wrapper {
    align-items: flex-start;
    border: 3px solid $main;
    position: relative;
    height: calc(100vh - 40px);
    overflow-y: scroll;
    display: grid;
    grid-gap: 1em;
    justify-content: center;
  }


  @media screen and (min-width: 780px) and (max-width: 1299px) {
    .wrapper {
      grid-template-columns: 1fr 1fr;
      padding: 1em;
      .Box-2 {
        grid-column-start: 2;
        grid-row-start: 1;
        grid-row-end: 4;
      }

      .Box-6 {
        grid-column-start: 2;
        grid-row-start: 4;
        grid-row-end: 6;
      }
    }
  }

  @media screen and (min-width: 1300px) {
    .wrapper {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      padding: 1em;
      
      // Column 1
      .Box-1{
        grid-column-start: 1;
        grid-row-start: 2;
      }
      .Box-3{
        grid-column-start: 1;
        grid-row-start: 3;
      }
      .Box-4 {
        grid-column-start: 1;
        grid-row-start: 4;
      }

      // Column 2
      .Box-2 {
        grid-column-start: 2;
        grid-row-start: 1;
        grid-row-end: 4;
      }

      .Box-5{
        grid-row-start: 4;
        grid-column-start: 3;
        // grid-column-end: 3;
      }

      // Column 3
      .Box-6 {
        grid-column-start: 3;
        grid-row-start: 1;
        grid-row-end: 3;
      }
    }
  }
</style>