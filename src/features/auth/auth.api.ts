import { AuthInstance } from "@/features/auth/auth.instance"

export const AuthApi = {
  register: (params: RegisterArgs) => {
    return AuthInstance.post<RegisterResponse>("register", params)
  },
  login: (params: LoginArgs) => {
    return AuthInstance.post<ProfileType>("login", params)
  },
}

export type RegisterResponse = {
  addedUser: AddedUser
}
type PasswordToPick = { password: string }
export type AddedUser = Omit<ProfileType, "token" | "tokenDeathTime">
export type RegisterArgs = Pick<ProfileType, "email"> & PasswordToPick
export type LoginArgs = Pick<ProfileType, "email" | "rememberMe"> &
  PasswordToPick
export type PartialUser = Partial<ProfileType>

export type ProfileType = {
  _id: string
  email: string
  rememberMe: boolean
  isAdmin: boolean
  name: string
  verified: boolean
  publicCardPacksCount: number
  created: string
  updated: string
  token: string
  tokenDeathTime: number
  _v: number
}
