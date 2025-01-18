'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/ui/PageHeader';
import {
  BuildingOffice2Icon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  CubeIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const features = [
  {
    name: 'Pre-construction Planning',
    description: 'Comprehensive planning and budgeting to ensure project success from the start.',
    icon: ChartBarIcon,
  },
  {
    name: 'Project Coordination',
    description: 'Seamless coordination of all project stakeholders and resources.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Technology Integration',
    description: 'Advanced construction management software for optimal project efficiency.',
    icon: CubeIcon,
  },
];

const serviceAreas = [
  'Tulsa',
  'Jenks',
  'Broken Arrow',
  'Bixby',
  'Owasso',
  'Tahlequah',
  'Muskogee',
  'Enid',
];

export default function ConstructionManagement() {
  return (
    <div className="bg-black">
      <PageHeader
        title="Construction Management"
        subtitle="Expert construction management services across Greater Tulsa and northeastern Oklahoma"
      />

      {/* Main Content */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-x-4">
                <BuildingOffice2Icon className="h-16 w-16 text-blue-500" />
                <h2 className="text-3xl font-bold tracking-tight text-white">Comprehensive Solutions</h2>
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Our integrated approach combines cutting-edge technology with decades of local expertise to deliver 
                exceptional results. With construction costs expected to rise 3-6% in 2024, our proven management 
                systems help control expenses while maintaining the highest quality standards.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Pre-construction planning and budgeting',
                  'Project scheduling and coordination',
                  'Quality control and safety management',
                  'Cost tracking and reporting',
                  'Risk mitigation strategies',
                  'Sustainable building practices',
                  'Advanced construction management software integration',
                  'Cost control strategies',
                ].map((detail, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-center gap-x-3 text-gray-300 text-lg leading-relaxed"
                  >
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="lg:mt-0 mt-8">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-900 relative">
                <Image
                  src="/service-1.jpg"
                  alt="Construction Management"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32 bg-blue-900/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Key Features
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our comprehensive construction management approach ensures successful project delivery
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="mt-4 flex flex-auto flex-col">
                    <h3 className="text-xl font-semibold leading-8 text-white">{feature.name}</h3>
                    <p className="mt-2 flex flex-auto text-base leading-7 text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Service Areas</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Serving communities throughout northeastern Oklahoma with local expertise and dedication
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-center p-4 bg-white/5 rounded-lg"
                >
                  <span className="text-lg font-semibold text-white">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}