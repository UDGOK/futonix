'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon, BuildingOffice2Icon, CpuChipIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { VideoBackground } from '@/components/ui/video-background';
import { HighlighterDemo } from '@/components/demo/highlighter-demo';

const services = [
  {
    name: 'Construction Management',
    description: 'Expert oversight and execution of construction projects from inception to completion.',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Industrial Solutions',
    description: 'Specialized solutions for manufacturing, warehousing, and industrial facilities.',
    icon: CpuChipIcon,
  },
  {
    name: 'Maintenance Services',
    description: 'Comprehensive maintenance and repair services for commercial properties.',
    icon: WrenchScrewdriverIcon,
  },
];

const stats = [
  { id: 1, name: 'Years of Experience', value: '25+' },
  { id: 2, name: 'Projects Completed', value: '500+' },
  { id: 3, name: 'Square Feet Developed', value: '5M+' },
  { id: 4, name: 'Client Satisfaction', value: '98%' },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section with Video Background */}
      <section className="relative">
        <VideoBackground>
          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 min-h-screen flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left max-w-2xl"
            >
              <div className="text-center lg:text-left max-w-full overflow-hidden">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Building Tomorrow&apos;s
                  <span className="text-primary"> Infrastructure</span>
                </h1>
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Futonix is a leading construction and development company, delivering excellence in commercial and industrial projects through innovation and expertise.
              </p>
              <div className="mt-10 flex gap-x-6 justify-center lg:justify-start">
                <Link
                  href="/quote-request"
                  className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Request Quote
                </Link>
                <Link
                  href="/projects"
                  className="text-sm font-semibold leading-6 text-white flex items-center gap-2 hover:text-primary"
                >
                  View Projects <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </VideoBackground>
      </section>

      {/* Rest of the content with Aurora Background */}
      <section>
        <AuroraBackground className="min-h-screen">
          {/* Services Section */}
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Services</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Comprehensive construction and development solutions tailored to your needs
                </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                  {services.map((service) => (
                    <motion.div
                      key={service.name}
                      whileHover={{ scale: 1.05 }}
                      className="group relative"
                    >
                      <Link
                        href={service.name === 'Construction Management'
                          ? '/services/construction-management'
                          : service.name === 'Industrial Solutions'
                          ? '/services/industry-solutions'
                          : '/services/maintenance-services'}
                        className="block h-full"
                      >
                        <div className="flex flex-col bg-black/50 p-8 rounded-2xl border border-gray-800 h-full cursor-pointer transition-colors group-hover:border-primary">
                          <dt className="text-base font-semibold leading-7 text-white">
                            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                              <service.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                            </div>
                            {service.name}
                          </dt>
                          <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                            <p className="flex-auto">{service.description}</p>
                            <p className="mt-6">
                              <span className="text-sm font-semibold leading-6 text-primary group-hover:text-primary/80">
                                Learn more <span aria-hidden="true">→</span>
                              </span>
                            </p>
                          </dd>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="relative isolate overflow-hidden py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Trusted by Industry Leaders
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Our track record speaks for itself
                  </p>
                </div>
                <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat) => (
                    <motion.div
                      key={stat.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="flex flex-col bg-white/5 p-8"
                    >
                      <dt className="text-sm leading-6 text-gray-300">{stat.name}</dt>
                      <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                        {stat.value}
                      </dd>
                    </motion.div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Highlighter Demo Section */}
          <HighlighterDemo />

          {/* CTA Section */}
          <div className="relative isolate overflow-hidden bg-black/20">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to Start Your Project?
                  <br />
                  Get a Free Quote Today
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                  Tell us about your construction needs and discover how Futonix can bring your vision to life with a detailed project quote.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="/quote-request"
                    className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Request Quote
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-semibold leading-6 text-white flex items-center gap-2 hover:text-primary"
                  >
                    Learn More <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AuroraBackground>
      </section>
    </main>
  );
}
