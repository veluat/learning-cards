import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Counter } from "@/features/counter/Counter"
import { store } from "@/app/store"
import { Provider } from "react-redux"
import { createTheme, ThemeProvider } from "@mui/material"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Counter />,
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
