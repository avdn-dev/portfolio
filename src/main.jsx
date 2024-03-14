import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './Hero.jsx'
import './index.css'
import ProjectsList from './ProjectsList.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Info from './Info.jsx'
import Error from './Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <Error/>,
    children: [
      {
        path: '',
        element: <Hero/>,
      },
      {
        path: 'projects',
        element: <ProjectsList/>,
      },
      {
        path: 'info',
        element: <Info/>,
      },
    ],
  },
], { basename: import.meta.env.DEV ? '/' : '/portfolio/' })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
