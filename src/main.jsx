import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './Hero.jsx'
import './index.css'
import Projects from './Projects.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Info from './Info.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <div>404</div>,
    children: [
      {
        path: '',
        element: <Hero/>,
      },
      {
        path: 'projects',
        element: <Projects/>,
      },
      {
        path: 'info',
        element: <Info/>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
