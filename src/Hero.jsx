// TODO:
// Finalise copy
// Add text censor effect to experiences

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const areas = ['backend dev.', 'web dev.', 'iOS dev.', 'UI design.']

export default function Hero () {
  const [area, setArea] = useState(areas[0])
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true) // Start the animation

      // Delay the call to setArea until after the animation has started
      setTimeout(() => {
        setArea(prevArea => {
          const currentIndex = areas.indexOf(prevArea)
          const nextIndex = (currentIndex + 1) % areas.length
          return areas[nextIndex]
        })

        setAnimate(false) // Remove the animation class
      }, 500) // Delay in milliseconds (equal to the duration of the animation)
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <main
      className="flex flex-col text-center flex-grow relative px-8 justify-center items-center">
      <h1
        className="text-6xl font-bold sm:text-8xl">
        Hi, I'm Anh!
      </h1>
      <p className="mt-6 text-lg leading-8">
        {'I\'m a final year computer science student with experience in '}

        <span
          className={`censor inline-block w-28 text-left ${animate
            ? 'censor-animate'
            : ''}`}>
                  {area}
                </span>
      </p>
      <div className="mt-10 flex items-center justify-center">
        <Link to="projects"
              className="text-lg font-semibold leading-6 underline">
          See my work <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  )
}

