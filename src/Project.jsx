// TODO:
// - Add in carousel for technologies used
// - Add section for project learnings/challenges
// - Add project code link
// - Add transition for project

const stats = [
  { label: 'Projects completed', value: '13' },
  { label: 'Course certificates obtained', value: '8' },
]

export default function Project ({
  name,
  description,
  picture,
  details,
  technologies,
  learnings,
}) {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center">
      <div className="max-w-6xl">
        <section className="mb-16 mx-auto flex flex-col gap-6">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-6xl mb-6 font-bold">
              {name}
            </h1>
            <p className="text-base leading-7">
              {description}
            </p>
          </div>
          <img src="https://via.placeholder.com/150" alt=""
               className="flex-1 rounded-lg max-w-xl"/>
        </section>


        <section className="mb-16 mx-auto flex flex-col gap-6">
          <h1 className="text-3xl mb-6 font-bold">
            Technical details
          </h1>
          <div className="mb-16 flex flex-col md:flex-row gap-6">
            <p className="flex-1 text-base leading-7">
              {details}
            </p>
            <div
              className="flex-1 flex flex-wrap justify-start gap-6 ">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-lg font-medium">{stat.label}</dt>
                  <dd className="text-2xl font-semibold">{stat.value}</dd>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

            {new Array(6).fill(0).map((_, index) => (
              <img key={index} className="h-12 mx-auto"
                   src="https://via.placeholder.com/150" alt=""/>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h1 className="text-3xl mb-6 font-bold">
            What I learnt
          </h1>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learnings.map((learning) => (
              <div key={learning.name}>
                <dt className="text-lg font-semibold">{learning.name}</dt>
                <dd
                  className="mt-1 text-base leading-7">{learning.description}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </main>
  )
}
