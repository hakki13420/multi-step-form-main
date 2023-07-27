import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./pages/Home"
import StepTwo from "./pages/StepTwo"
import StepThree from "./pages/StepThree"
import StepFour from "./pages/StepFour"
import StepFive from "./pages/StepFive"
import { StepsContextProvider } from './context/stepsContext'

function App() {
 
  const router=createBrowserRouter([
    {
    path:'/',
    element: <Home />
    },
    {
      path:'/step2',
      element: <StepTwo />
    },
    {
      path:'/step3',
      element: <StepThree />
    },
    {
      path:'/step4',
      element: <StepFour />
    },
    {
      path:'/step5',
      element: <StepFive />
    },
    {
      path:'*',
      element: <h1>404</h1>
    }
  ])

  return (
    <StepsContextProvider>
      <RouterProvider router={router} />
    </StepsContextProvider>       
  )
}

export default App
