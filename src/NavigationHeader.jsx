// TODO:
// - Update logo image
// - Update navigation links
// - Update styling
// - Make mobile menu disappear?

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './Logo.jsx'

const navigation = [
  { name: 'Projects', href: '#' },
  { name: 'About me', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function NavigationHeader () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 sm:px-8"
        aria-label="Global">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Anh Viet Duc Nguyen Logo</span>
          <Logo/>
        </a>
        <div className="flex sm:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>
        <div className="hidden sm:flex sm:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href}
               className="text-sm font-semibold leading-6">
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog as="div" className="small:hidden" open={mobileMenuOpen}
              onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10"/>
        <Dialog.Panel
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-800 bg-opacity-70 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Anh Viet Duc Nguyen Logo</span>
              <Logo/>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
