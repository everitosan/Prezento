import { baseUrl } from "./constants"
import type { Network } from "./dtos"

type StrapiResponse = {
  id: number,
  attributes: Network
}

export default async function () {
  try {
    const url = `${baseUrl}/api/networks?sort[0]=order`

    const allData = await fetch(`${url}`).then(res => res.json())

    const filtered: Network[] = allData.data.map((full: StrapiResponse) => ({
      link: full.attributes.link,
      icon: full.attributes.icon,
      name: full.attributes.name
    }))

    return filtered

  } catch(e) {
    return { props: {data: {} }}
  }
}