export type Noun<K extends keyof any, T> = {
  [P in K]: T
}

export const betaKey = process.env.BETA_KEY

export async function getGraph() {
  const graph = await fetch('https://db.mw/api', {
    headers: { Authorization: betaKey! },
  }).then((res) => res.json())
  const { nouns } = graph.data as { nouns: Noun<string, any> }
  return nouns
}

export async function getResource(noun: string) {
  const resource = await fetch('https://db.mw/' + noun , {
    headers: { Authorization: betaKey! },
  }).then((res) => res.json())
  console.log(resource)
  const { data } = await resource
  return data
}
