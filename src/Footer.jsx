/*
TODO:
- Add more navigation links (LinkedIn, Email)
- Reduce height of footer (less vertical padding)
- Rewrite copy
- Change min width of viewport so that footer is never pushed off page
*/

export default function Footer () {
  return (
    <footer>
      <div
        className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5">
            &copy; 2024 Anh Nguyen.
          </p>
        </div>
      </div>
    </footer>
  )
}