// TODO:
// Make error section responsive (make the splash centered)
// Add animation to the go home button
// Finalise copy

import Footer from './Footer.jsx'
import { Link } from 'react-router-dom'
import NavigationHeader from './NavigationHeader.jsx'

export default function Error () {
  return (
    <>
      <NavigationHeader/>
      <main className="flex flex-grow relative isolate min-h-full">
        <div
          className="self-center mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <p className="text-base font-semibold leading-8 text-white">404</p>
          <h1
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page
            not found</h1>
          <p
            className="mt-4 text-base text-white/70 sm:mt-6">Uh oh
            spaghettio</p>
          <div className="mt-10 flex justify-center">
            <Link to="/" className="text-sm font-semibold leading-7 text-white">
              <span
                aria-hidden="true">&larr;</span> {'There\'s no place like home...'}
            </Link>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
