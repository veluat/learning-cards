import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "app",
  initialState: {
    error: null as null | string,
    isLoading: true,
    isAppInitialized: false,
  },
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading
    },
    setIsAppInitialized: (
      state,
      action: PayloadAction<{ isAppInitialized: boolean }>,
    ) => {
      state.isAppInitialized = action.payload.isAppInitialized
    },
  },
})

export const appReducer = slice.reducer
export const appActions = slice.actions
