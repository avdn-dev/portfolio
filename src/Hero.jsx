export default function Hero () {
  return (
    <div className="flex-grow relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1
            className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I'm Anh!
          </h1>
          <p className="mt-6 text-lg leading-8">
            I'm a final year computer science student with experience in
            backend, web, mobile development and UI/UX design. Don't believe me?
            Check out my work.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#"
               className="text-sm font-semibold leading-6">
              See more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
