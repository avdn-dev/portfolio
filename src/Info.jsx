// TODO:
// - Replace placeholder image and alt text for it
// - Add technologies

import InfiniteScrollingTechnologies from './InfiniteScrollingTechnologies.jsx'

const stats = [
  { label: 'University students tutored', value: '100+' },
  { label: 'Year 12 students tutored with band 6 result', value: '10+' },
  {
    label: 'Average student satisfaction on 6 point Likert scale',
    value: '5.6/6',
  },
  { label: 'Pages of aesthetic medicine consulting written', value: '2000+' },
  { label: 'Grocery items stocked', value: '1000+' },
  { label: 'Projects completed', value: '40+' },
  { label: 'Course certificates obtained', value: '20+' },
]

const technologies = [
  {
    name: 'Tech 1',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Tech 2',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Tech 3',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Tech 4',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Tech 5',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Tech 6',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Tech 7',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Tech 8',
    image: 'https://via.placeholder.com/150',
  },
]

const interests = [
  {
    name: 'Piano',
    description:
      'I learned my first instrument - the violin - with the Suzuki method. For years I only learnt how to perform, with zero understanding of music theory. I started piano to learn music theory and for more versatility in music creation.',
  },
  {
    name: 'Guitar',
    description:
      'I started with a guitar that a family friend left behind after emigrating overseas. It sucked, but it was enough to get started. I now own a pair of solid guitars, a Squier Stratocaster and an acoustic dreadnought.',
  },
  {
    name: 'Tech',
    description:
      'I\'m a tech enthusiast and love to keep up with the latest tech news. The realm of AR/VR is particularly exciting to me, especially when I hear about integration of brain machine interfaces. I recently started tinkering with a 3D printer.',
  },
  {
    name: 'Bouldering',
    description:
      'My burgeoning career in basketball and football was cut short by a full ACL tear (obliteration). After rehabilitation I decided to pick up something new - bouldering was appealing since I had just started calisthenics. I was heel hooked after my first session.',
  },
  {
    name: 'Reading',
    description:
      'For my personal growth in university I delved into the self-improvement and psychology genres of non-fiction. Between those genres and now computer-science related readings, I never read fiction, though I\'m now keen for fiction recommendations!',
  },
  {
    name: 'Calisthenics',
    description:
      'Initially a firm believer in the church of iron, I never thought I could seriously train in calisthenics. I tried writing my own calisthenics program since we had a pull up bar in the backyard, and stuck with it when my first calisthenics workout gave me the best pump I had ever had.',
  },
]

export default function Info () {
  return (
    <main className="px-6 py-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-7xl">
        <h1 className="text-6xl mb-12 font-bold">
          About me
        </h1>
        <section
          className="mb-16 flex flex-col md:flex-row gap-10">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl mb-8 font-bold">
              My background
            </h2>
            <p className="leading-7">
              Originally from Sydney, I moved to Brisbane and started a
              bachelors of biomedical science at the University of Queensland at
              the start of 2018, with provisional entry into the doctor of
              medicine. While this was a big milestone in my personal growth, my
              goal was transferring to a medicine program back home in Sydney -
              a year later I was accepted into the medicine program at the
              University of New South Wales (UNSW). At the time I thought I was
              just at the beginning of a long career in medicine.</p>
            <br/>
            <p className="leading-7">
              Come 2021, I realised that a professional career in medicine
              ultimately didn&apos;t align with my long term plans. Leaving
              medicine was a very difficult decision to make, given pressure
              from family and the sunk cost fallacy. Reevaluation lead me to
              starting a bachelors of computer science at UNSW in 2022, as I was
              already very passionate about technology and enjoyed problem
              solving, and constant applied learning. Looking back, it&apos;s
              very clear that I made the right choice - I enjoy every aspect of
              my computer science degree, and am very keen to start my career.
              I&apos;m grateful to be truly passionate about this field, and owe
              much to the unending support my partner of my partner
              (shout out to Madison).
            </p>
          </div>
          <img src="https://via.placeholder.com/150" alt=""
               className="flex-1 rounded-lg max-w-xl"/>
        </section>

        <section className="mb-16 flex flex-col">
          <h2 className="text-3xl mb-8 font-bold">
            My experience
          </h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1">
              <p className="leading-7">
                Outside of studying computer science I&apos;ve been a private
                tutor, a writer for a boutique aesthetics consultancy, and a day
                fill team member at my local Coles. I&apos;m currently a casual
                academic at UNSW, tutoring fundamental courses in the computer
                science faculty. In this role I&apos;ve been able to utilise my
                experience in tutoring, writing, and mentoring to help students
                understand course materials and develop their own problem
                solving skills. It&apos;s been very fulfilling for me as it
                cements the effort I&apos;ve put into learning course content
                deeply, helping others achieve the same.
              </p>
              <br/>
              <p className="leading-7">
                Outside of study and work I&apos;ve been up-skilling in
                full stack development, exploring:
                <br/>
                - Mobile development via iOS applications built with Swift,
                SwiftUI, and other core Apple technologies like Core Data, Swift
                Data, MapKit and Core Image
                <br/>
                - Backend development via servers for RESTful APIs built with
                Java, Spring Boot, and relational databases
                <br/>
                - Web development via projects built with both the fundamentals
                of Javascript/HTML/CSS and libraries like React/Tailwind
              </p>
              <br/>
              <p className="leading-7">
                Full disclosure, the stats provided are padded by
                projects I did for the sake of fully completing some
                certifications - they weren&apos;t difficult but did serve as
                good practice. I&apos;m aware that I look like a corrupt
                dictatorship general who gave himself a bunch of medals 😂.
              </p>
            </div>
            <div
              className="flex-1 flex flex-col justify-between gap-6 ">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-lg font-medium">{stat.label}</dt>
                  <dd className="text-2xl font-semibold">{stat.value}</dd>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl mb-4 font-bold">
            Tools and technologies
          </h2>
          <InfiniteScrollingTechnologies technologies={technologies}/>
        </section>

        <section>
          <h2 className="text-3xl mb-8 font-bold">
            My interests
          </h2>
          <p className="leading-7 mb-6">
            Now that the professional introduction is over, here&apos;s what I
            do besides work.
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest) => (
              <div key={interest.name}>
                <dt className="text-lg font-semibold">{interest.name}</dt>
                <dd
                  className="mt-1 leading-7">{interest.description}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </main>
  )
}

