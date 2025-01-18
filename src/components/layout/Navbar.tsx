'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Construction Management', href: '/services/construction-management' },
      { name: 'Industry Solutions', href: '/services/industry-solutions' },
      { name: 'Maintenance Services', href: '/services/maintenance-services' },
      { name: 'Project Planning', href: '/project-planning' },
    ],
  },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <motion.span
              className="text-2xl font-bold text-white hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              FUTONIX
            </motion.span>
          </Link>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-8 md:items-center">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-semibold leading-6 transition-colors ${
                    pathname === item.href ? 'text-primary' : 'text-white hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === item.name ? 'rotate-180 text-primary' : 'text-white'
                    }`}
                  />
                )}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 rounded-md bg-black/90 backdrop-blur-sm shadow-lg ring-1 ring-primary/20 focus:outline-none"
                  >
                    <div className="py-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className={`block px-4 py-2 text-sm ${
                            pathname === dropdownItem.href
                              ? 'text-primary bg-primary/10'
                              : 'text-white hover:bg-primary/5'
                          }`}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/quote-request"
              className="rounded-md bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Request Quote
            </Link>
          </motion.div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            static
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/90 backdrop-blur-sm px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-primary/20"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="text-2xl font-bold text-white">FUTONIX</span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <motion.div
                          whileHover={{ x: 10 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-between"
                          onClick={() => item.dropdown && setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        >
                          <Link
                            href={item.href}
                            className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                              pathname === item.href
                                ? 'text-primary bg-primary/10'
                                : 'text-white hover:bg-primary/5'
                            }`}
                          >
                            {item.name}
                          </Link>
                          {item.dropdown && (
                            <ChevronDownIcon
                              className={`h-5 w-5 text-white transition-transform ${
                                activeDropdown === item.name ? 'rotate-180' : ''
                              }`}
                            />
                          )}
                        </motion.div>
                        {item.dropdown && activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <motion.div
                                key={dropdownItem.name}
                                whileHover={{ x: 10 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Link
                                  href={dropdownItem.href}
                                  className={`block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                                    pathname === dropdownItem.href
                                      ? 'text-primary bg-primary/10'
                                      : 'text-white hover:bg-primary/5'
                                  }`}
                                >
                                  {dropdownItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ))}
                    <motion.div
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4"
                    >
                      <Link
                        href="/quote-request"
                        className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        Request Quote
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}