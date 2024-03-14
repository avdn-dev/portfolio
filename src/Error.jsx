import Footer from './Footer.jsx'
import { Link } from 'react-router-dom'
import NavigationHeader from './NavigationHeader.jsx'

export default function Error () {
  return (
    <>
      <NavigationHeader/>
      <main
        className="flex flex-col text-center flex-grow relative px-8 justify-center items-center">

        <p className="text-base font-semibold leading-8">404</p>
        <h1
          className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page
          not found</h1>
        <p
          className="mt-4 text-base text-white/70 sm:mt-6">Nothing to see here
          ¯\_(ツ)_/¯</p>
        <div className="mt-10 flex justify-center">
          <Link to="/" className="text-sm font-semibold leading-7 underline">
              <span
                aria-hidden="true">&larr;</span> {'There\'s no place like home...'}
          </Link>
        </div>
      </main>
      <Footer/>
    </>
  )
}
