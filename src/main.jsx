import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Root from './Root.jsx'
import Hero from './Hero.jsx'
import Info from './Info.jsx'
import Error from './Error.jsx'
import Projects from './Projects.jsx'
import projects from './projects.js'
import Project from './Project.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'} element={<Root/>} errorElement={<Error/>}>
      <Route path={''} element={<Hero/>}/>
      <Route path={'projects'} element={<Outlet/>}>
        <Route path={''} element={<Projects/>}/>
        {projects.map(project => (
          <Route key={project.name} path={project.route}
                 element={<Project name={project.name}
                                   description={project.description}
                                   hasPicture={project.hasPictures}
                                   pictures={project.pictures}
                                   details={project.details}
                                   technologies={project.technologies}
                                   learnings={project.learnings}
                                   github={project.github}
                 />}/>

        ))}
      </Route>
      <Route path={'info'} element={<Info/>}/>
    </Route>,
  ), { basename: import.meta.env.DEV ? '/' : '/portfolio/' })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
