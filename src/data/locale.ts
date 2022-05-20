import { baseUrl } from "./constants"

type StrapilocaleResponse = {
  id: number,
  code : string
}

export  async function list () {
  try {
    const url = `${baseUrl}/api/i18n/locales`

    const allData = await fetch(`${url}`).then(res => res.json())

    const locales = allData.map((locale: StrapilocaleResponse) => ({
      id: locale.id,
      text: locale.code
    }))


    return locales
  } catch(e) {
    return { props: {data: {} }}
  }
}