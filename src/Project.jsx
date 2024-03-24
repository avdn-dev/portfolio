// TODO:
// - Add in carousel for pictures

import InfiniteScrollingTechnologies from './InfiniteScrollingTechnologies.jsx'

export default function Project ({
  name,
  description,
  hasPicture,
  picture,
  details,
  technologies,
  learnings,
  github,
}) {
  return (
    <main className="px-6 py-6 lg:px-8 flex flex-grow flex-col items-center">
      <div className="max-w-7xl">
        <section className="mb-16 flex flex-col">
          <h1 className="text-6xl mb-4 font-bold">
            {name}
          </h1>
          <div><a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline' }}
            className="text-3xl font-bold enlarge mb-12 inline-block">Github</a>
          </div>
          {name === 'Journey Genie' &&
            <p className="leading-7">This is a full stack project that
              leverages real-time weather data and location services to generate
              travel itineraries. The project was completed in a team of 4 over
              48 hours, as an entry in the 2024 Unihack Hackathon – you can
              watch the pitch <a
                href="https://www.youtube.com/watch?v=L7DXUDu195A"
                style={{ textDecoration: 'underline' }}>here</a>. I
              was solely responsible for the frontend native iOS application. I
              also
              coordinated the ideation and pitch creation, and assisted in
              developing the Flask backend.</p>
          }
          <p className="leading-7">
            {description}
          </p>
          {hasPicture && <img src="https://via.placeholder.com/150" alt=""
                              className="rounded-lg max-w-xl"/>}
        </section>

        <section className="mb-8 flex flex-col">
          <h2 className="text-3xl mb-8 font-bold">
            Technical details
          </h2>
          <p className="leading-7 mb-6">
            {details}
          </p>
          <InfiniteScrollingTechnologies technologies={technologies}/>
        </section>

        <section>
          <h2 className="text-3xl mb-8 font-bold">
            Challenges and learnings
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learnings.map((learning) => (
              <div key={learning.summary}>
                <dt
                  className="text-lg font-semibold">{learning.summary}</dt>
                <dd
                  className="mt-1 leading-7">{learning.description}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </main>
  )
}
