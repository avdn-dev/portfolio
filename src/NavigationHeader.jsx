import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './Logo.jsx'
import { Link } from 'react-router-dom'
import Email from './Email.jsx'
import AnimatedMenuButton from './AnimatedMenuButton.jsx'

const navigationLinks = [
  { name: 'Projects', href: 'projects' },
  { name: 'Info', href: 'info' },
]

const contactLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/4nhus',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anh-nguyen-41870b156/',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          d="M22 3.47059V20.5294C22 20.9194 21.8451 21.2935 21.5693 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47059C3.08056 22 2.70651 21.8451 2.43073 21.5693C2.15494 21.2935 2 20.9194 2 20.5294V3.47059C2 3.08056 2.15494 2.70651 2.43073 2.43073C2.70651 2.15494 3.08056 2 3.47059 2H20.5294C20.9194 2 21.2935 2.15494 21.5693 2.43073C21.8451 2.70651 22 3.08056 22 3.47059ZM7.88235 9.64706H4.94118V19.0588H7.88235V9.64706ZM8.14706 6.41177C8.14861 6.18929 8.10632 5.96869 8.02261 5.76255C7.93891 5.55642 7.81542 5.36879 7.65919 5.21039C7.50297 5.05198 7.31708 4.92589 7.11213 4.83933C6.90718 4.75277 6.68718 4.70742 6.46471 4.70588H6.41177C5.95934 4.70588 5.52544 4.88561 5.20552 5.20552C4.88561 5.52544 4.70588 5.95934 4.70588 6.41177C4.70588 6.86419 4.88561 7.29809 5.20552 7.61801C5.52544 7.93792 5.95934 8.11765 6.41177 8.11765C6.63426 8.12312 6.85565 8.0847 7.06328 8.00458C7.27092 7.92447 7.46074 7.80422 7.62189 7.65072C7.78304 7.49722 7.91237 7.31346 8.00248 7.10996C8.09259 6.90646 8.14172 6.6872 8.14706 6.46471V6.41177ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7799 9.77345C13.2576 10.0397 12.8143 10.4383 12.4941 10.9294H12.4118V9.64706H9.64706V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.3681 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z"/>
      </svg>
    ),
  },
]

export default function NavigationHeader () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [closeMobileMenuIsHovered, setCloseMobileMenuIsHovered] = useState(
    false)

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', checkScroll)
    return () => {
      window.removeEventListener('scroll', checkScroll)
    }
  }, [])

  return (
    <header className={`isolate z-10 sticky top-0 transition-all ${isScrolled &&
    !mobileMenuOpen
      ? 'shadow backdrop-blur bg-gray-800/10 ring-1 ring-white/10'
      : ''}`}>
      <nav
        className="flex items-center justify-between p-6 lg:px-8 pr-8 md:pr-6"
        aria-label="Global">
        <div className="flex flex-1 justify-start">
          <Link to="/" className={`-m-3 -mx-5 p-1.5 enlarge ${mobileMenuOpen
            ? 'opacity-0'
            : 'opacity-100'}`}>
            <span className="sr-only">Anh Viet Duc Nguyen Logo</span>
            <Logo height="h-14"/>
          </Link>
        </div>
        <div className="flex md:hidden">
          <AnimatedMenuButton mobileMenuOpen={mobileMenuOpen}
                              setMobileMenuOpen={setMobileMenuOpen}
                              isHovered={closeMobileMenuIsHovered}/>
        </div>
        <div className="hidden md:flex flex-1 justify-center gap-x-12">
          {navigationLinks.map((item) => (
            <Link key={item.name} to={item.href}
                  className="text-lg font-semibold underline">
              {item.name}
            </Link>
          ))}
          {<a href="resume.pdf" download
              className="text-lg font-semibold underline">Resume</a>}
        </div>
        <div className="hidden md:flex flex-1 justify-end">
          <div className="flex justify-center space-x-6 md:order-2">
            {contactLinks.map((item) => (
              <a key={item.name} href={item.href} target="_blank"
                 rel="noopener noreferrer" className="enlarge">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-8 w-auto" aria-hidden="true"/>
              </a>
            ))}
            <Email/>
          </div>
        </div>
      </nav>
      <Transition appear
                  show={mobileMenuOpen}
                  as={Fragment}
      >
        <Dialog as="div" className="md:hidden"
                onClose={() => setMobileMenuOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-out duration-500"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-out duration-500"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div
              className="fixed inset-0 shadow backdrop-blur bg-gray-800/30 ring-1 ring-white/10 aria-hidden"/>
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-out duration-500"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-out duration-500"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel
              className="z-10 fixed inset-y-0 w-full px-6 py-6 space-y-6">
              <div
                className="flex items-center justify-between mb-4">
                <Link to="/" className="-m-3 -mx-5 p-1.5 enlarge"
                      onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Anh Viet Duc Nguyen Logo</span>
                  <Logo height="h-14"/>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  onMouseEnter={() => setCloseMobileMenuIsHovered(true)}
                  onMouseLeave={() => setCloseMobileMenuIsHovered(false)}
                  className="mr-2 -mb-1"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-8 w-auto invisible"
                             aria-hidden="true"/>
                </button>
              </div>
              <ul className="px-2 divide-y-2 divide-white/10 space-y-6">
                <div className="space-y-1 pt-6 border-t-2 border-t-white/10">
                  {navigationLinks.map((item) => (
                    <li key={item.name}><Link to={item.href}
                                              className="text-2xl font-semibold underline"
                                              onClick={() => setMobileMenuOpen(
                                                false)}>
                      {item.name}
                    </Link></li>
                  ))}
                  <li><a href="../public/resume.pdf" download
                         className="text-2xl font-semibold underline">Resume</a>
                  </li>
                </div>
                <div className="space-y-2 pt-6">
                  {contactLinks.map((item) => (
                    <li key={item.name}><a href={item.href} target="_blank"
                                           rel="noopener noreferrer">
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-8 w-auto enlarge"
                                 aria-hidden="true"/>
                    </a></li>
                  ))}
                  <li><Email/></li>
                </div>
              </ul>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  )
}
