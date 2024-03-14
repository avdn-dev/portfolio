// TODO:
// - Add in carousel for technologies used
// - Add section for project learnings/challenges
// - Add project code link
// - Add transition for project

export default function Project ({ name, description, picture, technologies }) {
  return (
    <div
      className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg text-center shadow backdrop-blur bg-gray-800/10 ring-1 ring-white/10">
      <div className="flex flex-1 flex-col p-8">
        <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
             src={picture} alt=""/>
        <h3 className="mt-6 text-sm font-medium">{name}</h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-sm">{description}</dd>
        </dl>
      </div>
    </div>
  )
}