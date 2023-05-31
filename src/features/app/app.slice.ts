import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "app",
  initialState: {
    error: null as null | string,
    isLoading: true,
    isAppInitialized: false,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

export const appReducer = slice.reducer
