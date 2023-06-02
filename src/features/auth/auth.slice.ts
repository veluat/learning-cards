import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  AuthApi,
  LoginArgs,
  ProfileType,
  RegisterArgs,
} from "@/features/auth/auth.api"
import { createAppAsyncThunk } from "@/common"

const THUNK_PREFIXES = {
  REGISTER: "auth/register",
  LOGIN: "auth/login",
}

const register = createAppAsyncThunk<any, RegisterArgs>(
  THUNK_PREFIXES.REGISTER,
  (arg: RegisterArgs) => {
    AuthApi.register(arg)
      .then((res) => {})
      .catch((res) => {
        console.error(res)
      })
  },
)

const login = createAppAsyncThunk<{ profile: ProfileType }, LoginArgs>(
  THUNK_PREFIXES.LOGIN,
  async (arg: LoginArgs) => {
    const res = await AuthApi.login(arg)
    return { profile: res.data }
  },
)

const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileType | null,
    isLoading: false,
  },
  reducers: {
    setUser: (state, action: PayloadAction<{ profile: ProfileType }>) => {
      state.profile = action.payload.profile
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload?.profile) {
        state.profile = action.payload.profile
        state.isLoading = false
      }
    })
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const authReducer = slice.reducer
export const authThunks = { register, login }
