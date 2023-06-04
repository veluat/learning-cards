import { useAppDispatch } from "@/app/hooks"
import { authThunks } from "@/features/auth/auth.slice"
import s from "./Registration.module.css"

export const Registration = () => {
  const dispatch = useAppDispatch()

  const registrationHandler = () => {
    const payload = {
      email: "veluat@gmail.com",
      password: "123123123",
    }
    dispatch(authThunks.register(payload))
  }
  return (
    <div className={s.container}>
      <h1>Registration</h1>
      <button onClick={registrationHandler}>register</button>
    </div>
  )
}
