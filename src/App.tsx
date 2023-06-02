import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Counter } from "@/features/counter/Counter"
import { store } from "@/app/store"
import { Provider } from "react-redux"
import { createTheme, ThemeProvider } from "@mui/material"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { useEffect } from "react"
import { appActions } from "@/features/app/app.slice"
import { authThunks } from "@/features/auth/auth.slice"

export const Test = () => {
  const isLoading = useAppSelector((state) => state.app.isLoading)
  const isAppInitialized = useAppSelector((state) => state.app.isAppInitialized)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }))
    }, 3000)
    dispatch(authThunks.register())
  }, [dispatch])

  if (isLoading) return <div>loading...</div>
  return (
    <div>
      <Counter />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
  },
  {
    path: "/login",
    element: <h1>Login</h1>,
  },
  {
    path: "/register",
    element: <h1>Register</h1>,
  },
  {
    path: "/packs",
    element: <h1>Packs</h1>,
  },
])

const theme = createTheme()

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
