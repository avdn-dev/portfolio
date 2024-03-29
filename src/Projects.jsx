import { Link } from 'react-router-dom'
import projects from './projects.js'

const body = document.querySelector('body')

export default function Projects () {
  return (
    <ul role="list"
        className="max-w-7xl m-auto flex-grow grid gap-6 px-6 py-6 md:grid-cols-2 sm:gap-8 sm:px-8 lg:gap-10 lg:px-10 xl:gap-12 xl:px-12">
      {projects.map(project => (
        <Link to={project.route}
              className="flex overflow-hidden flex-col rounded-lg text-center shadow backdrop-blur bg-gray-800/40 ring-1 ring-white/10 transition-all duration-500 ease-in-out transform hover:scale-105 hover:ring-2 hover:ring-white"
              key={project.name}
              onClick={() => {body.scrollTop = 0}}>
          <div className="flex flex-1 flex-col">
            <div className="flex justify-center">
              <img src={project.thumbnail}
                   alt={project.thumbnailAlt} className="h-full"/>
              <style jsx>{`
                div {
                  background: linear-gradient(0deg, #006CFA 0%, #675CFF 33%, #A733FF 66%, #DB00A1 100%);
                }
              `}</style>
            </div>
            <h2
              className="text-2xl mt-4 font-bold mb-2 sm:mt-6 sm:mb-3 lg:mt-8 lg:mb-4">{project.name}</h2>
            <p
              className="mx-4 text-left mb-2 sm:mb-3 lg:mb-4 sm:mx-6 lg:mx-8">{project.summary}</p>
            <div className="flex center self-center gap-1 mb-4 sm:mb-6 lg:mb-8">
              {project.keyTechnologies.map(technology => (
                <img key={technology.name} src={technology.image}
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
        </Link>
      ))}
    </ul>
  )
}