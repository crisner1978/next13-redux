import GraphData from '@components/GraphData'
import React from 'react'
import { store } from '@store'
import { setStartupNoun } from '@store/searchSlice'
import SSRGraphData from '@components/SSRGraphData'

export default async function HomePage() {
  const req = await fetch('http://localhost:3000/api')
  const data = await req.json()

  store.dispatch(setStartupNoun(data))

  return (
    <div className='max-w-fit mx-auto flex flex-col min-h-screen px-4 items-start mt-8'>
      <SSRGraphData />
    </div>
  )
}
