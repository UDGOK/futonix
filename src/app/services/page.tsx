'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PageHeader from '@/components/ui/PageHeader';
import { AccordionDemo } from '@/components/demo/accordion-demo';
import {
  BuildingOffice2Icon,
  TruckIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  CubeIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Construction Management',
    description: 'Comprehensive oversight of construction projects from planning to completion.',
    icon: BuildingOffice2Icon,
    details: [
      'Project planning and scheduling',
      'Cost estimation and budgeting',
      'Quality control and assurance',
      'Site supervision and management',
      'Vendor and contractor coordination',
    ],
  },
  {
    name: 'Industrial Solutions',
    description: 'Specialized construction solutions for industrial and manufacturing facilities.',
    icon: TruckIcon,
    details: [
      'Manufacturing facility construction',
      'Warehouse development',
      'Industrial retrofitting',
      'Equipment installation',
      'Facility expansion projects',
    ],
  },
  {
    name: 'Maintenance Services',
    description: 'Ongoing maintenance and repair services for commercial properties.',
    icon: WrenchScrewdriverIcon,
    details: [
      'Preventive maintenance programs',
      'Emergency repair services',
      'Facility upgrades',
      'System optimization',
      'Regular inspections',
    ],
  },
];

const advantages = [
  {
    name: 'Expert Team',
    description: 'Highly skilled professionals with decades of combined experience.',
    icon: ChartBarIcon,
  },
  {
    name: 'Quality Assurance',
    description: 'Rigorous quality control processes ensuring excellence in every project.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Innovation',
    description: 'Utilizing cutting-edge technology and construction methods.',
    icon: CubeIcon,
  },
];

export default function Services() {
  return (
    <div className="bg-black">
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive construction and development solutions tailored to your needs"
      />

      {/* Services Overview */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-24 last:mb-0"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                <div>
                  <div className="flex items-center gap-x-4">
                    <service.icon className="h-16 w-16 text-blue-500" />
                    <h2 className="text-3xl font-bold tracking-tight text-white">{service.name}</h2>
                  </div>
                  <p className="mt-6 text-lg leading-8 text-gray-300">{service.description}</p>
                  <ul className="mt-8 space-y-3">
                    {service.details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-center gap-x-3 text-gray-300"
                      >
                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="relative lg:mt-0 mt-8">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-900">
                    <Image
                      src={`/service-${index + 1}.jpg`}
                      alt={service.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Advantages Section */}
      <div className="py-24 sm:py-32 bg-blue-900/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why Choose Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Experience the Futonix difference with our commitment to excellence and innovation.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col bg-white/5 px-8 py-10 rounded-2xl"
              >
                <advantage.icon className="h-12 w-12 text-blue-500" />
                <h3 className="mt-6 text-xl font-semibold text-white">{advantage.name}</h3>
                <p className="mt-4 text-gray-300 flex-1">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Process</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              A systematic approach to delivering exceptional results
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              {['Consultation', 'Planning', 'Execution', 'Delivery'].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex items-center justify-center">
                    <div className="rounded-full bg-blue-500 p-4 text-white text-2xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="mt-6 text-center text-xl font-semibold text-white">{step}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 sm:py-32 bg-blue-900/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Get answers to common questions about our construction services and processes
            </p>
          </div>
          <div className="mt-16 max-w-3xl mx-auto">
            <AccordionDemo />
          </div>
        </div>
      </div>
    </div>
  );
}