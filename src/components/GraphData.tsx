'use client'

import { nounApi } from '@store/apiSlice'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './SearchInput'

export default function GraphData() {
  const dispatch = useAppDispatch()
  const startupNoun = useAppSelector((state) => state.search.startupNoun)
  const search = useAppSelector((state) => state.search.search)

  const data = useAppSelector((state) => state.nounApi.queries[`search("${search})`]?.data)

  console.log("search: ", data)

  useEffect(() => {
    const sear = {
      noun: 'SaaS',
      q: search
    }
    dispatch(nounApi.endpoints.search.initiate(sear))
  }, [dispatch, search])
  
  return (
    <div className='mt-8'>
      {startupNoun && Object.values(startupNoun)?.map((item: any) =>
        Object.entries<any>(item).map((p) => {
          if (search && p[1]?.includes(search) || p[0].includes(search))
            return (
              <p key={p[0]} className='flex items-center justify-start flex-wrap'>
                <span className='font-bold'>{p[0]}</span>
                <span className='text-base ml-3'>{p[1]}</span>
              </p>
            )
        })
      )}
    </div>
  )
}
