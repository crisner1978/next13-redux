'use client'

import { useRef } from "react"
import { store } from "@store"
import { setStartupNoun } from "@store/searchSlice"
import { Noun } from "@utils/getGraph"

import React from 'react'

export default function LoadClientStore({ data }: { data: Noun<string, any> }) {
  const isClient = useRef(false)

  if (!isClient.current) {
    isClient.current = true
    store.dispatch(setStartupNoun(data))
  }
  return null
}
