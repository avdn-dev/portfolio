import Project from './Project.jsx'

const projects = [
  {
    name: 'Project 1',
    description: 'Description 1',
    picture: 'https://via.placeholder.com/150',
  },
  {
    name: 'Project 2',
    description: 'Description 2',
    picture: 'https://via.placeholder.com/150',
  },
  {
    name: 'Project 3',
    description: 'Description 3',
    picture: 'https://via.placeholder.com/150',
  },
]

export default function Projects () {
  return (
    <div
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {projects.map((project) => (<Project key={project.name} {...project}/>))}
    </div>
  )
}