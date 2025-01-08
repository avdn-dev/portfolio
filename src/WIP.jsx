import { Link } from 'react-router-dom'

export default function WIP () {
  return (
    <main
      className="flex flex-col text-center flex-grow px-8 justify-center items-center">

      <p className="text-xl sm:text-2xl font-semibold"></p>
      <h1
        className="mt-6 sm:mt-8 text-6xl font-bold sm:text-8xl">Under
        construction</h1>
      <p
        className="mt-6 sm:mt-8 text-xl sm:text-2xl">Old projects viewable&nbsp;
        <Link to="/projects" className="font-semibold underline">here</Link></p>
    </main>
  )
}
