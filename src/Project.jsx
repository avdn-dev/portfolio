// TODO:
// - Add in carousel for pictures
// - Add project code link
// - Add transition for project

import InfiniteScrollingTechnologies from './InfiniteScrollingTechnologies.jsx'

export default function Project ({
  name,
  description,
  picture,
  details,
  technologies,
  learnings,
}) {
  return (
    <main className="px-6 py-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-6xl">
        <section className="mb-16 flex flex-col gap-6">
          <h1 className="text-6xl mb-8 font-bold">
            {name}
          </h1>
          <p className="leading-7">
            {/*description*/}{'Under development.'}
          </p>
          <img src="https://via.placeholder.com/150" alt=""
               className="rounded-lg max-w-xl"/>
        </section>

        <section className="mb-8 flex flex-col">
          <h1 className="text-3xl mb-4 font-bold">
            Technical details
          </h1>
          <p className="leading-7 mb-6">
            {/*details*/}{'Under development.'}
          </p>
          <InfiniteScrollingTechnologies technologies={technologies}/>
        </section>

        <section className="mb-16">
          <h1 className="text-3xl mb-8 font-bold">
            Challenges and learnings
          </h1>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learnings.map((learning) => (
              <div key={learning.name}>
                <dt
                  className="text-lg font-semibold">{/*learning.name*/}{'Under development.'}</dt>
                <dd
                  className="mt-1 leading-7">{/*learning.description*/}{'Under development.'}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </main>
  )
}
