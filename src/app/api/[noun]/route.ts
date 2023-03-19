import { NextResponse } from 'next/server'

export async function GET(req: Request, { params }: { params: { noun: string } }) {
  let result
  const { searchParams } = new URL(req.url)
  const noun = params.noun
  const query = searchParams.get('query')

  result = await fetch('https://db.mw/' + noun + '?expand=', {
    headers: { Authorization: process.env.BETA_KEY! },
  })
    .then((res) => res.json())
    .then((d) => d.data)

  if (query) {
    console.log('result', result)
    result = Object.values(result)
      .map((item: any) =>
        Object.values(item).filter((t: any) =>
          t.toString().toLowerCase().includes(query?.toLowerCase()!)
        )
      )
      ?.flat()
  }

  return NextResponse.json({ result })
}
