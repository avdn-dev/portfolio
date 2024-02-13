const stats = [
  { label: 'JetBrains Academy tracks 100% completed', value: '13' },
  { label: 'Educative.io courses taken', value: '8' },
]
const values = [
  {
    name: 'Guitar',
    description:
      'Claimed a pretty crappy guitar left behind by a family friend, and have been playing it ever since.',
  },
  {
    name: 'Bouldering',
    description:
      'Enjoy bouldering at the Sydney Indoor Climbing Gym',
  },
  {
    name: 'Reading',
    description:
      'I\'ve read exclusively non-fiction (self-help, psychology) but am looking to get into the wonderful world of fiction.',
  },
  {
    name: 'Tech',
    description:
      'I\'m a tech enthusiast and love to keep up with the latest tech news and gadgets. Have been doing some prints on a 3D printer I was gifted recently.',
  },
  {
    name: 'Piano',
    description:
      'The first instrument I learned to play was the violin, following the Suzuki method. My understanding of music theory was terrible until I started learning the piano.',
  },
  {
    name: 'Calisthenics',
    description:
      'Initially a gym rat, I started calisthenics after the amount of weights at home were\'nt enough',
  },
]

export default function Info () {
  return (
    <div>
      <main className="isolate">
        <div className="relative isolate -z-10">
          <div className="overflow-hidden">
            <div
              className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div
                className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1
                    className="text-4xl font-bold tracking-tight sm:text-6xl">
                    My story
                  </h1>
                  <p
                    className="relative mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
                    I'm not gonna yap on about my origin story so the TLDR is:
                  </p>
                </div>
                <div
                  className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div
                    className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="https://via.placeholder.com/150"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                    </div>
                  </div>
                  <div
                    className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="https://via.placeholder.com/150"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                    </div>
                    <div className="relative">
                      <img
                        src="https://via.placeholder.com/150"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="https://via.placeholder.com/150"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                    </div>
                    <div className="relative">
                      <img
                        src="https://via.placeholder.com/150"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl">My
              experience</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8">
                  I've worked with a variety of technologies across from
                  spectrum of frontend to backend.
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div key={stat.label}
                         className="flex flex-col-reverse gap-y-4">
                      <dt
                        className="text-base leading-7">{stat.label}</dt>
                      <dd
                        className="text-5xl font-semibold tracking-tight">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="relative isolate -z-10 mt-32 sm:mt-48">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2
              className="text-center text-lg font-semibold leading-8">
              Technologies I've worked with
            </h2>
            <div
              className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://via.placeholder.com/150"
                alt=""
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://via.placeholder.com/150"
                alt=""
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://via.placeholder.com/150"
                alt=""
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://via.placeholder.com/150"
                alt=""
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://via.placeholder.com/150"
                alt=""
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl">My
              interests</h2>
            <p className="mt-6 text-lg leading-8">
              Now that the professional introduction is over, here's more about
              what I do besides work.
            </p>
          </div>
          <dl
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold">{value.name}</dt>
                <dd className="mt-1">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </div>
  )
}
