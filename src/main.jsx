import React from 'react'
import ReactDOM from 'react-dom/client'
import NavigationHeader from './NavigationHeader.jsx'
import Hero from './Hero.jsx'
import './index.css'
import Footer from './Footer.jsx'
import Projects from './Projects.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavigationHeader/>,
    errorElement: <div>404</div>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Hero/>
    <Projects/>
    <Footer/>
  </React.StrictMode>,
)
