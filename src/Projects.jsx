import { Link } from 'react-router-dom'
import projects from './projects.js'

const body = document.querySelector('body')

export default function Projects () {
  return (
    <div
      className="max-w-7xl m-auto flex-grow px-6 py-6 sm:px-8 lg:px-10 xl:px-12">
      <ul role="list"
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10 xl:gap-12"
      >
        {projects.map(project => (
          <Link to={project.route}
                className="flex overflow-hidden flex-col rounded-lg text-center shadow backdrop-blur bg-gray-800/40 ring-1 ring-white/10 transition-all duration-500 ease-in-out transform hover:scale-105 hover:ring-2 hover:ring-white relative"
                key={project.name}
                onClick={() => {
                  body.scrollTop = 0
                }}>
            <div className="flex flex-1 flex-col">
              <div className="flex justify-center">
                <img src={project.thumbnail}
                     alt={project.thumbnailAlt}
                     className="max-h-96 object-cover"/>
              </div>
              <div
                className="absolute h-full flex gap-2 sm:gap-3 lg:gap-4 flex-col justify-center items-center bg-gray-800 bg-opacity-90 text-white opacity-0 hover:opacity-100 transition-opacity duration-500">
                <h2
                  className="text-2xl">{project.name}</h2>
                <p
                  className="text-left mx-4 sm:mx-6 lg:mx-8">{project.summary}</p>
                <div
                  className="flex center self-center gap-2">
                  {project.keyTechnologies.map(technology => (
                    <img key={technology.name}
                         src={technology.image}
                         alt={`${technology.name} logo`}
                         className="h-6 w-6 object-contain"/>
                  ))}
                  <style jsx>{`
                    img {
                      filter: grayscale(100%);
                    }
                  `}</style>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  )
}