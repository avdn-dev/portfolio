import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const areas = [
  'backend dev',
  'web dev 🌏👨🏻‍💻',
  'iOS dev 🍎📱',
  'UI design 👨🏻‍🎨']

export default function Hero () {
  const [area, setArea] = useState(areas[0])
  const [animate, setAnimate] = useState(false)
  const spanRef = useRef(null)

  useEffect(() => {
    // Event listener for ensuring text is censored between animation start and end phase
    const span = spanRef.current
    const ensureCensored = () => {
      if (span.classList.contains('censor-animate-start')) {
        span.classList.add('censored')
      }
    }
    span.addEventListener('animationend', ensureCensored)

    const interval = setInterval(() => {
      setAnimate(true)

      // Delay changing text to sync with animation
      setTimeout(() => {
        setArea(prevArea => {
          const currentIndex = areas.indexOf(prevArea)
          const nextIndex = (currentIndex + 1) % areas.length
          return areas[nextIndex]
        })

        setAnimate(false)
      }, 500)
    }, 2000)

    return () => {
      clearInterval(interval)
      span.removeEventListener('animationend', ensureCensored)
    }
  }, [])

  return (
    <main
      className="flex flex-col text-center flex-grow px-8 justify-center items-center">
      <h1
        className="text-6xl font-bold sm:text-8xl">
        Hi, I'm Anh!
      </h1>
      <p className="mt-6 sm:mt-8 text-xl sm:text-2xl leading-8">
        {'I\'m a final year computer science student with experience in '}
        <br/>
        <span
          className={`relative w-32 sm:w-36 text-xl sm:text-2xl`}>
                          {area}
        </span>
        <span ref={spanRef}
              className={`censor absolute left-[50%] transform translate-x-[-50%] w-[8.5rem] sm:w-[9.5rem] ${animate
                ? 'censor-animate-start'
                : 'censor-animate-end'}`}>&nbsp;
          </span>
      </p>
      <div className="mt-10 sm:mt-12">
        <Link to="projects"
              className="text-lg sm:text-xl font-semibold underline">
          See my work <span aria-hidden="true"
                            className="text-lg sm:text-xl">→</span>
        </Link>
      </div>
    </main>
  )
}

