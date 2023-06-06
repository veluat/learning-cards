import { useAppDispatch } from "@/app/hooks"
import { authThunks } from "@/features/auth/auth.slice"
import s from "./Login.module.css"

export const Login = () => {
  const dispatch = useAppDispatch()

  const loginHandler = () => {
    const payload = {
      email: "veluat@gmail.com",
      password: "123123123",
      rememberMe: false,
    }
    dispatch(authThunks.login(payload))
  }
  return (
    <div className={s.container}>
      <h1>Login</h1>
      <button onClick={loginHandler}>sing up</button>
    </div>
  )
}
