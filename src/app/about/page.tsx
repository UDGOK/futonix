'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/ui/PageHeader';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { AccordionDemo } from '@/components/demo/accordion-demo';

const values = [
  {
    name: 'Excellence',
    description: 'We strive for excellence in every project, delivering superior quality and craftsmanship.',
  },
  {
    name: 'Innovation',
    description: 'Embracing cutting-edge technology and methods to provide innovative construction solutions.',
  },
  {
    name: 'Integrity',
    description: 'Operating with honesty, transparency, and ethical business practices in all our dealings.',
  },
  {
    name: 'Safety',
    description: 'Maintaining the highest standards of safety for our employees, clients, and project sites.',
  },
];

const timeline = [
  {
    name: 'Founded',
    description: 'Futonix was established with a vision to transform the construction industry.',
    date: '1998',
  },
  {
    name: 'First Major Project',
    description: 'Completed our first multi-million dollar commercial development project.',
    date: '2003',
  },
  {
    name: 'Expansion',
    description: 'Expanded operations to include industrial and manufacturing facilities.',
    date: '2008',
  },
  {
    name: 'Innovation Leader',
    description: 'Pioneered sustainable construction practices in the industry.',
    date: '2015',
  },
  {
    name: 'Present Day',
    description: 'Leading the industry with innovative solutions and exceptional service.',
    date: '2024',
  },
];

export default function About() {
  return (
    <div className="bg-black">
      <PageHeader
        title="About Futonix"
        subtitle="Building excellence through innovation and expertise since 1998"
      />

      {/* Company Overview */}
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Story</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  For over 25 years, Futonix has been at the forefront of the construction industry, 
                  delivering exceptional results and building lasting relationships with our clients. 
                  Our commitment to quality, innovation, and customer satisfaction has made us a trusted 
                  partner in commercial and industrial construction.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Mission</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  To deliver innovative construction solutions that exceed client expectations while 
                  maintaining the highest standards of quality, safety, and sustainability. We strive 
                  to create lasting value for our clients, employees, and communities through excellence 
                  in construction and development.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 sm:py-32 bg-blue-900/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Values</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our core values guide every decision we make and every project we undertake.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {values.map((value) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-9"
              >
                <dt className="inline font-semibold text-white">
                  <CheckCircleIcon className="absolute left-1 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                  {value.name}
                </dt>
                <dd className="inline text-gray-300"> · {value.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
            Frequently Asked Questions
          </h2>
          <AccordionDemo />
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Journey</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              A timeline of growth, innovation, and excellence in construction.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-500" />
              <ul className="space-y-16">
                {timeline.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-2 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-lg">{item.date}</div>
                      <div className="font-semibold text-blue-400 mt-1">{item.name}</div>
                      <p className="mt-2 text-gray-300">{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}