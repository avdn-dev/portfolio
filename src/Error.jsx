import Footer from './Footer.jsx'
import {Link} from 'react-router-dom'
import NavigationHeader from './NavigationHeader.jsx'

export default function Error() {
    return (
        <>
            <NavigationHeader/>
            <main
                className="flex flex-col text-center flex-grow px-8 justify-center items-center">

                <p className="text-xl sm:text-2xl font-semibold">404</p>
                <h1
                    className="mt-6 sm:mt-8 text-6xl font-bold sm:text-8xl">Page
                    not found</h1>
                <p
                    className="mt-6 sm:mt-8 text-xl sm:text-2xl">Nothing to
                    see here
                    ¯\_(ツ)_/¯</p>
                <div className="mt-10 sm:mt-12">
                    <Link to="/" className="text-lg sm:text-xl font-semibold underline">
              <span
                  aria-hidden="true">&larr;</span> {'There\'s no place like home...'}
                    </Link>
                </div>
            </main>
            <Footer/>
        </>
    )
}
