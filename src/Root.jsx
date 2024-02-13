import { Outlet } from 'react-router-dom'
import NavigationHeader from './NavigationHeader.jsx'
import Footer from './Footer.jsx'

export default function Root () {
  return (
    <>
      <NavigationHeader/>
      <Outlet/>
      <Footer/>
    </>
  )
}