import { baseUrl } from "./constants"

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
    const url = `${baseUrl}/api/infos?locale[$eq]=${lang}&sort[0]=order`

    const allData = await fetch(`${url}`).then(res => res.json())

    const filtered = allData.data.map((full: StrapiResponse) => ({
      code: full.attributes.content,
      language: full.attributes.language
    }))

    return filtered

  } catch(e) {
    return { props: {data: {} }}
  }
}