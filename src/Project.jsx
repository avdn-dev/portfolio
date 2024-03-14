// TODO:
// - Add in technologies used

export default function Project ({ name, description, picture, technologies }) {
  return (
    <div
      className="mx-auto flex flex-col backdrop-blur bg-gray-800/10 ring-1 ring-white/10">
      <div className="px-4 sm:px-6">
        {name}
      </div>
      <div className="px-4 sm:p-6">
        {description}
      </div>
      <div className="px-4 sm:px-6">
        <img src={picture}/>
      </div>
      <div className="px-4 sm:px-6">
        <h3>Technologies Used:</h3>
        <ul>
          {technologies.map((technology) => (
            <li key={technology.name}>
              <strong>{technology.name}:</strong> {technology.usage}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}