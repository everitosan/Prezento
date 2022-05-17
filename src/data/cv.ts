type StrapiResponse = {
  id: number,
  attributes: {
    content: string,
    language: string,
    order: number
  }
}

export default async function (lang: string) {
  try {
    const url = `https://prezento-strapi.herokuapp.com/api/infos?locale[$eq]=${lang}`

    const allData = await fetch(`${url}`).then(res => res.json())

    const filtered = allData.data.map((full: StrapiResponse) => ({
      code: full.attributes.content,
      language: full.attributes.language
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