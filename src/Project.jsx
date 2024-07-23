import InfiniteScrollingTechnologies from './InfiniteScrollingTechnologies.jsx'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'

export default function Project({
                                    name,
                                    description,
                                    hasPicture,
                                    pictures,
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
                        style={{textDecoration: 'underline'}}
                        className="text-3xl font-bold enlarge mb-12 inline-block">Github</a>
                    </div>
                    {name === 'Journey Genie' &&
                        <p className="leading-7">This is a full stack project that
                            leverages real-time weather data and location services to generate
                            travel itineraries. The project was completed in a team of 4 over
                            48 hours, as an entry in the 2024 Unihack Hackathon – you can
                            watch the pitch <a
                                href="https://www.youtube.com/watch?v=L7DXUDu195A"
                                style={{textDecoration: 'underline'}}>here</a>. I
                            was solely responsible for the frontend native iOS application. I
                            also
                            coordinated the ideation and pitch creation, and assisted in
                            developing the Flask backend.</p>
                    }
                    <p className={`leading-7 ${hasPicture ? 'mb-8' : ''}`}>
                        {description}
                    </p>
                    {hasPicture &&
                        <div
                            className={`${name === 'Journey Genie'
                                ? 'max-w-3xl'
                                : ''} self-center xl:m-0 -mx-6 lg:-mx-8`}>
                            <Carousel showThumbs={false} showStatus={false}
                                      autoPlay={true} infiniteLoop={true}
                                      dynamicHeight={true}>
                                {pictures.map((picture) => (
                                    <div key={picture.alt}>
                                        <img src={`${import.meta.env.BASE_URL + picture.src}`}
                                             alt={`Screen in ${name} showing: ${picture.alt}`}/>
                                        <p
                                            className="legend">{picture.alt}</p>
                                    </div>
                                ))}
                            </Carousel></div>}
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
                            <div key={learning.summary}
                                 className="rounded-lg shadow backdrop-blur bg-gray-800/40 ring-1 ring-white/10 p-6">
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
