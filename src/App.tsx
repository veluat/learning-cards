import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Counter } from "@/features/counter/Counter"
import { store } from "@/app/store"
import { Provider } from "react-redux"
import { createTheme, ThemeProvider } from "@mui/material"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { useEffect } from "react"

export const Test = () => {
  const isLoading = useAppSelector((state) => state.app.isLoading)
  const dispatch = useAppDispatch()
  if (isLoading) return <div>loading...</div>

  useEffect(() => {
    setTimeout(() => {
      dispatch
    })
  })
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
