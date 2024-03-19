import { useState } from 'react'

export default function InfiniteScrollingTechnologies ({ technologies }) {
  // 6 is the max number of 150px wide cards that can be shown at once
  const duplications = Math.ceil(6 / technologies.length) + 1

  // Duplicate the technologies to make the carousel "infinite"
  const duplicatedTechnologies = Array.from({ length: duplications },
    () => technologies).flat()

  const [hoveredTechnology, setHoveredTechnology] = useState(null)

  return (
    <div
      className="overflow-hidden relative h-56 pt-2 xl:[mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)] xl:m-0 -mx-8">
      <div
        className="technologies-carousel-track absolute flex ">
        {duplicatedTechnologies.map((technology) => (
          <div
            className="w-48 h-48 flex flex-col justify-center items-center transition-all duration-500 ease-in-out transform hover:scale-105"
            onMouseEnter={() => setHoveredTechnology(technology)}
            onMouseLeave={() => setHoveredTechnology(null)}>
            <img src={technology.image} alt={technology.name}></img>
            {hoveredTechnology === technology && (
              <div
                className="absolute font-semibold w-full h-full bg-gray-800/10 rounded-xl backdrop-blur flex justify-center items-center shadow">
                {technology.name}
              </div>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes slide {
          0% {
            /* This needs to be moved back num cards * card width */
            left: ${-technologies.length * 192}px;
          }
          100% {
            left: 0%;
          }
        }

        .technologies-carousel-track {
          /* Length is num cards * 4 */
          animation: slide ${technologies.length * 4}s linear infinite;
        }

        .technologies-carousel-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}