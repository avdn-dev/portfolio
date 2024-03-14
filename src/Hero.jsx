// TODO:
// Make hero section responsive (make the splash centered)
// Add animation to the see more button
// Finalise copy

import { Link } from 'react-router-dom'

export default function Hero () {
  return (
    <div className="flex-grow relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1
            className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I'm Anh!
          </h1>
          <p className="mt-6 text-lg leading-8">
            I'm a final year computer science student with experience in
            backend, web, mobile development and UI/UX design.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="projectsList"
                  className="text-sm font-semibold leading-6">
              See my work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
