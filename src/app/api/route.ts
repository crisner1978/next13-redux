import { getGraph, getResource } from '@utils/getGraph'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  let data
  const { searchParams } = new URL(req.url)
  const noun = searchParams.get('noun')

  if (noun) {
    data = await getResource(noun)
  } else {
    data = await getGraph()
  }
  return NextResponse.json({ data })
}
