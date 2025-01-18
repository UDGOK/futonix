'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PageHeader from '@/components/ui/PageHeader';
import { AccordionDemo } from '@/components/demo/accordion-demo';
import {
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  CubeIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Construction Management',
    description: 'Comprehensive construction management services across Greater Tulsa, including Jenks, Broken Arrow, Bixby, Owasso, Tahlequah, Muskogee and Enid. Our integrated approach combines cutting-edge technology with decades of local expertise.',
    icon: BuildingOffice2Icon,
    details: [
      'Pre-construction planning and budgeting',
      'Project scheduling and coordination',
      'Quality control and safety management',
      'Cost tracking and reporting',
      'Risk mitigation',
      'Sustainable building practices',
      'Advanced construction management software integration',
      'Cost control strategies (3-6% projected increase in 2024)',
    ],
  },
  {
    name: 'Industry Solutions',
    description: 'Cutting-edge technology integration for enhanced security, efficiency, and connectivity in commercial and industrial facilities.',
    icon: CpuChipIcon,
    details: [
      'Access Control Systems:',
      '• Keycard and biometric systems',
      '• Remote management capabilities',
      '• Integration with building automation',
      '• Visitor management solutions',
      'Video Surveillance:',
      '• HD camera systems with analytics',
      '• Remote monitoring capabilities',
      '• Cloud storage solutions',
      'Custom Technology Solutions:',
      '• Building automation systems',
      '• Energy management integration',
      '• Network infrastructure',
      '• Smart building technologies',
    ],
  },
  {
    name: 'Maintenance Services',
    description: 'Keep your facility operating at peak performance with comprehensive maintenance solutions for commercial and industrial properties throughout northeastern Oklahoma.',
    icon: WrenchScrewdriverIcon,
    details: [
      'Preventive maintenance programs',
      'Emergency repairs with 24/7 response',
      'Building systems optimization',
      'Energy efficiency upgrades',
      'Facility assessments',
      'Digital maintenance tracking',
      'Advanced diagnostic tools',
      'Equipment life extension',
    ],
  },
];

const advantages = [
  {
    name: 'Local Expertise',
    description: 'Decades of experience serving Greater Tulsa and surrounding communities.',
    icon: ChartBarIcon,
  },
  {
    name: 'Technology-Driven',
    description: 'Advanced construction management software and analytics for optimal project efficiency.',
    icon: CubeIcon,
  },
  {
    name: 'Cost Control',
    description: 'Proven management systems to control expenses while maintaining quality standards.',
    icon: ClipboardDocumentCheckIcon,
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
                  <ul className="mt-8 space-y-4">
                    {service.details.map((detail, idx) => (
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