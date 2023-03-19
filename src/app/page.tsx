import GraphData from '@components/GraphData'
import SearchInput from '@components/SearchInput'
import { store } from '@store'
import LoadClientStore from '@store/LoadClientStore'
import { setStartupNoun } from '@store/searchSlice'

export default async function HomePage() {
  const req = await fetch('http://localhost:3000/api')
  const data = await req.json()
  const nouns = Object.keys(data.data)

  store.dispatch(setStartupNoun(data))

  return (
    <div className='px-8 items-start mt-8'>
      <LoadClientStore data={data} />
      <SearchInput nouns={nouns} />
      <GraphData />
    </div>
  )
}
