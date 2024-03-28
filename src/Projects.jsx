// TODO:
// - Change photos displayed
// - Add a quick link for each github repo
// - Make grid 2x2 on desktop breakpoint

import { Link } from 'react-router-dom'
import projects from './projects.js'

const body = document.querySelector('body')

export default function Projects () {
  return (
    <ul role="list"
        className="m-auto flex-grow grid gap-6 px-6 py-6 grid-rows-1 sm:grid-cols-2 sm:gap-8 sm:px-8 lg:grid-cols-3 lg:gap-10 lg:px-10 xl:grid-cols-4 xl:gap-12 xl:px-12">
      {projects.map(project => (
        <Link to={project.route}
              className="min-w-96 sm:min-w-72 flex overflow-hidden flex-col rounded-lg text-center shadow backdrop-blur bg-gray-800/40 ring-1 ring-white/10 transition-all duration-500 ease-in-out transform hover:scale-105 hover:ring-2 hover:ring-white"
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
              className="text-2xl mt-4 mb-2 font-medium sm:mt-6 sm:mb-3 lg:mt-8 lg:mb-4">{project.name}</h2>
            <p
              className="mb-4 mx-4 text-left sm:mb-6 sm:mx-6 lg:mb-8 lg:mx-8">{project.summary}</p>
          </div>
        </Link>
      ))}
    </ul>
  )
}