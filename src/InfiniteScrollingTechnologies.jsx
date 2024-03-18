export default function InfiniteScrollingTechnologies ({ technologies }) {
  return (
    <div
      className="relative overflow-hidden h-48 shadow backdrop-lur bg-gray-800/5 ring-1 ring-white/10">
      <div
        className="technologies-carousel-track absolute flex">
        {technologies.map((technology) => (
          <div
            className="w-48 h-48 flex flex-col justify-center items-center transition-all duration-500 ease-in-out transform hover:scale-105 hover:ring-2 hover:ring-white">
            <img src={technology.image} alt={technology.name}></img>
            {technology.name}
          </div>
        ))}
        {/* Duplicate the technologies to make the carousel "infinite" */}
        {technologies.map((technology) => (
          <div
            className="w-48 h-48 flex flex-col justify-center items-center transition-all duration-500 ease-in-out transform hover:scale-105 hover:ring-2 hover:ring-white">
            <img src={technology.image} alt={technology.name}></img>
            <span>{technology.name}</span>
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
          animation: slide 10s linear infinite;
        }

        .technologies-carousel-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}