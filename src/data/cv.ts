export default async function (infoSections: Array<string>, lang: string) {
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