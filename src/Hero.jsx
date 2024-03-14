// TODO:
// Finalise copy
// Add text censor effect to experiences

import { Link } from 'react-router-dom'

export default function Hero () {
  return (
    <main
      className="flex flex-col text-center flex-grow relative px-8 justify-center items-center">
      <h1
        className="text-4xl font-bold tracking-tight sm:text-6xl">
        Hi, I'm Anh!
      </h1>
      <p className="mt-6 text-lg leading-8">
        I'm a final year computer science student with experience in
        backend, web, mobile development and UI/UX design.
      </p>
      <div className="mt-10 flex items-center justify-center">
        <Link to="projects"
              className="text-sm font-semibold leading-6 underline">
          See my work <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  )
}
