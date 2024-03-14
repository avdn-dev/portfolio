// TODO:
// - Change photos displayed
// - Add a quick link for each github repo
// - Add transitions for cards

import { Link } from 'react-router-dom'
import projects from './projects.js'

export default function Projects () {
  return (
    <ul role="list"
        className="m-auto flex-grow grid gap-6 px-6 sm:grid-cols-2 sm:gap-8 sm:px-8 lg:grid-cols-3 lg:gap-10 lg:px-10 xl:grid-cols-4 xl:gap-12 xl:px-12">
      {projects.map(project => (
        <Link to={project.route}
              className="min-w-96 sm:min-w-72  col-span-1 flex overflow-hidden max-w-mbd flex-col divide-y rounded-lg text-center shadow backdrop-lur bg-gray-800/5 ring-1 ring-white/10 transition-all duration-500 ease-in-out transform hover:scale-105 hover:ring-2 hover:ring-white"
              key={project.name}>
          <div className="flex flex-1 flex-col">
            <img className="mx-auto w-full"
                 src={project.picture}
                 alt=""/>
            <h2
              className="text-2xl mt-4 mb-2 font-medium sm:mt-6 sm:mb-3 lg:mt-8 lg:mb-4">{project.name}</h2>
            <p
              className="mb-4 mx-4 text-left sm:text-lg sm:mb-6 sm:mx-6 lg:mb-8 lg:mx-8">{project.description}</p>
          </div>
        </Link>
      ))}
    </ul>
  )
}