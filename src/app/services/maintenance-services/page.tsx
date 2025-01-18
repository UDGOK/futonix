'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/ui/PageHeader';
import {
  WrenchScrewdriverIcon,
  ClockIcon,
  ChartBarIcon,
  BoltIcon,
  ClipboardDocumentCheckIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const services = [
  {
    name: 'Preventive Maintenance',
    description: 'Regular maintenance programs to prevent issues before they occur.',
    icon: WrenchScrewdriverIcon,
    features: [
      'Scheduled inspections',
      'Equipment testing',
      'System optimization',
      'Performance monitoring',
      'Maintenance planning',
      'Documentation and reporting',
    ],
  },
  {
    name: 'Emergency Services',
    description: '24/7 emergency response for critical facility issues.',
    icon: ClockIcon,
    features: [
      'Round-the-clock availability',
      'Rapid response teams',
      'Emergency repairs',
      'Critical system support',
      'Immediate damage control',
      'Follow-up documentation',
    ],
  },
  {
    name: 'Facility Optimization',
    description: 'Comprehensive solutions to improve facility performance.',
    icon: ChartBarIcon,
    features: [
      'Energy efficiency upgrades',
      'System modernization',
      'Performance analysis',
      'Cost reduction strategies',
      'Sustainability improvements',
      'Technology integration',
    ],
  },
];

const advantages = [
  {
    name: 'Advanced Diagnostics',
    description: 'State-of-the-art tools for accurate problem identification.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Digital Tracking',
    description: 'Comprehensive digital maintenance records and reporting.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Energy Efficiency',
    description: 'Solutions to optimize energy usage and reduce costs.',
    icon: BoltIcon,
  },
];

export default function MaintenanceServices() {
  return (
    <div className="bg-black">
      <PageHeader
        title="Maintenance Services"
        subtitle="Keep your facility operating at peak performance with comprehensive maintenance solutions"
      />

      {/* Main Content */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-500">Comprehensive Care</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Complete Facility Maintenance Solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our experienced technicians provide comprehensive maintenance services for commercial and 
              industrial properties throughout northeastern Oklahoma, ensuring optimal performance and 
              longevity of your facilities.
            </p>
          </div>
        </div>
      </div>

      {/* Service Sections */}
      {services.map((service, index) => (
        <div
          key={service.name}
          className={`py-24 sm:py-32 ${index % 2 === 1 ? 'bg-blue-900/20' : ''}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-x-4">
                  <service.icon className="h-16 w-16 text-blue-500" />
                  <h2 className="text-3xl font-bold tracking-tight text-white">{service.name}</h2>
                </div>
                <p className="mt-6 text-lg leading-8 text-gray-300">{service.description}</p>
                <ul className="mt-8 space-y-4">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-center gap-x-3 text-gray-300 text-lg leading-relaxed"
                    >
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className={`lg:mt-0 mt-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-900 relative">
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
          </div>
        </div>
      ))}

      {/* Advantages Section */}
      <div className="py-24 sm:py-32 bg-blue-900/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Advantages</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Advanced tools and expertise for superior maintenance services
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col bg-white/5 p-8 rounded-2xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
                    <advantage.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{advantage.name}</h3>
                  <p className="mt-2 text-gray-300">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need Emergency Service?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our 24/7 emergency response team is ready to help. Contact us immediately for rapid assistance.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Contact Emergency Services
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}