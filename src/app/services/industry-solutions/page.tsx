'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/ui/PageHeader';
import {
  CpuChipIcon,
  KeyIcon,
  VideoCameraIcon,
  ServerIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const solutions = [
  {
    name: 'Access Control',
    description: 'Advanced security systems for comprehensive facility access management.',
    icon: KeyIcon,
    features: [
      'Keycard and biometric systems',
      'Remote management capabilities',
      'Integration with building automation',
      'Visitor management solutions',
      'Real-time monitoring and reporting',
      'Multi-location access control',
    ],
  },
  {
    name: 'Video Surveillance',
    description: 'State-of-the-art video monitoring and analytics for enhanced security.',
    icon: VideoCameraIcon,
    features: [
      'HD camera systems with analytics',
      'Remote monitoring capabilities',
      'Cloud storage solutions',
      'Motion detection and alerts',
      'Night vision capabilities',
      'Mobile app integration',
    ],
  },
  {
    name: 'Building Automation',
    description: 'Smart building solutions for improved efficiency and comfort.',
    icon: CpuChipIcon,
    features: [
      'Building automation systems',
      'Energy management integration',
      'Network infrastructure',
      'Smart building technologies',
      'Environmental controls',
      'Automated scheduling',
    ],
  },
];

const benefits = [
  {
    name: 'Enhanced Security',
    description: 'Comprehensive protection for your facility and assets.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Improved Efficiency',
    description: 'Streamlined operations through automation and integration.',
    icon: ChartBarIcon,
  },
  {
    name: 'Future-Ready',
    description: 'Scalable solutions that grow with your business needs.',
    icon: ServerIcon,
  },
];

export default function IndustrySolutions() {
  return (
    <div className="bg-black">
      <PageHeader
        title="Industry Solutions"
        subtitle="Cutting-edge technology integration for enhanced security, efficiency, and connectivity"
      />

      {/* Main Content */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-500">Technology Integration</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Advanced Solutions for Modern Facilities
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our certified technicians design and implement customized technology solutions tailored to 
              your specific needs and industry requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Sections */}
      {solutions.map((solution, index) => (
        <div
          key={solution.name}
          className={`py-24 sm:py-32 ${index % 2 === 1 ? 'bg-blue-900/20' : ''}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-x-4">
                  <solution.icon className="h-16 w-16 text-blue-500" />
                  <h2 className="text-3xl font-bold tracking-tight text-white">{solution.name}</h2>
                </div>
                <p className="mt-6 text-lg leading-8 text-gray-300">{solution.description}</p>
                <ul className="mt-8 space-y-4">
                  {solution.features.map((feature, idx) => (
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
                    src={`/service-${index + 2}.jpg`}
                    alt={solution.name}
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

      {/* Benefits Section */}
      <div className="py-24 sm:py-32 bg-blue-900/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Key Benefits</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Experience the advantages of our integrated technology solutions
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col bg-white/5 p-8 rounded-2xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
                    <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{benefit.name}</h3>
                  <p className="mt-2 text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}