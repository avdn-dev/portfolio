// TODO:
// - Rewrite copy
// - Replace placeholder images
// - Change image collage into single image
// - Add images for technologies
// - Add proper margins for all sizes
// - Ensure responsiveness

const stats = [
  { label: 'Projects completed', value: '13' },
  { label: 'Course certificates obtained', value: '8' },
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
    <main className="px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center">
      <div className="max-w-6xl">
        <section className="mb-16 mx-auto flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-3xl mb-6 font-bold">
              My background
            </h1>
            <p className="text-base leading-7">
              I'm not gonna yap on about my origin story so the TLDR is:
            </p>
          </div>
          <img src="https://via.placeholder.com/150" alt=""
               className="flex-1 rounded-lg max-w-xl"/>
        </section>


        <section className="mb-16 mx-auto flex flex-col gap-6">
          <h1 className="text-3xl mb-6 font-bold">
            My experience
          </h1>
          <div className="mb-16 flex flex-col md:flex-row gap-6">
            <p className="flex-1 text-base leading-7">
              I've worked with a variety of technologies across the spectrum of
              frontend to backend.
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
        </section>

        <section className="mb-16">
          <h1 className="text-3xl mb-6 font-bold">
            Technologies
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

            {new Array(6).fill(0).map((_, index) => (
              <img key={index} className="h-12 mx-auto"
                   src="https://via.placeholder.com/150" alt=""/>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h1 className="text-3xl mb-6 font-bold">
            My interests
          </h1>
          <p className="text-base leading-7 mb-6">
            Now that the professional introduction is over, here's more about
            what
            I do besides work.
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="text-lg font-semibold">{value.name}</dt>
                <dd
                  className="mt-1 text-base leading-7">{value.description}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </main>
  )
}

