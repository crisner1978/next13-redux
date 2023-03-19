'use client'

import { AppDispatch, RootState } from '@store'
import { setSearch, setStartupNoun } from '@store/searchSlice'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import GraphData from './GraphData'
import { nounApi } from '../store/apiSlice'
import { useState } from 'react'
import { Noun } from '../utils/getGraph'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default function SearchInput({ nouns }: { nouns: string[] }) {
  const dispatch = useAppDispatch()
  const search = useAppSelector((state) => state?.search.search)
  const [noun, setNoun] = useState('')

  const data = useAppSelector((state) => state.nounApi.queries[`search("${search}")`]?.data)

  console.log("search: ", data)

  return (
    <>
      <select className='bg-gray-100 w-full py-2 px-8 rounded-full mb-4 outline-none'>
        {nouns.map((noun) => (
          <option key={noun} value={noun} onSelect={() => setNoun(noun)}>
            {noun}
          </option>
        ))}
      </select>
      <div className='bg-gray-200 py-2 pl-8 px-4 rounded-full'>

        <input
          onChange={(e) => dispatch(setSearch(e.target.value))}
          value={search}
          type='text'
          className='bg-transparent font-medium text-lg text-gray-900 outline-none'
          placeholder='Search'
        />

      </div>
    </>
  )
}
