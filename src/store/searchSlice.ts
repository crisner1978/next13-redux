import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Noun } from '@utils/getGraph'

export interface SearchState {
  search: string
  startupNoun: Noun<string, any>
}

const initialState: SearchState = {
  search: '',
  startupNoun: {} as Noun<string, any>,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setStartupNoun: (state, action: PayloadAction<Noun<string, any>>) => {
      state.startupNoun = action.payload
    },
  },
})

export const { setSearch, setStartupNoun } = searchSlice.actions
export default searchSlice.reducer
