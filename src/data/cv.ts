export default async function (infoSections: Array<string>, lang: string) {
  try {
    const promisses = infoSections
      .map(section => `https://e5f2-2806-2f0-90e5-feee-5097-849d-cfbd-85e6.ngrok.io/api/infos/${section}?locale=${lang}`)
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