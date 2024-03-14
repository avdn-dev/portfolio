import { Link } from 'react-router-dom'
import projects from './projects.js'

export default function ProjectsList () {
  return (
    <ul role="list"
        className="flex-grow grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {projects.map((project) => (
        <li
          key={project.name}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg text-center shadow backdrop-blur bg-gray-800/10 ring-1 ring-white/10"
        >
          <Link to={project.route}>
            <div className="flex flex-1 flex-col p-8">
              <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                   src={project.picture} alt=""/>
              <h3
                className="mt-6 text-sm font-medium">{project.name}</h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm">{project.description}</dd>
              </dl>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}



