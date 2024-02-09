import React from 'react'
import ReactDOM from 'react-dom/client'
import NavigationHeader from './NavigationHeader.jsx'
import Hero from './Hero.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavigationHeader/>
    <Hero/>
  </React.StrictMode>,
)
