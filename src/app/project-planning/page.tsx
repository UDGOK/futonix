'use client';

import PageHeader from '@/components/ui/PageHeader';
import { motion } from 'framer-motion';
import {
  DocumentMagnifyingGlassIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';

const planningSteps = [
  {
    name: 'Site Analysis',
    description: 'Comprehensive site evaluation and feasibility studies to ensure project viability.',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    name: 'Budget Development',
    description: 'Detailed cost estimation and financial planning for project success.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Schedule Creation',
    description: 'Strategic timeline development with resource allocation planning.',
    icon: CalendarIcon,
  },
  {
    name: 'Risk Assessment',
    description: 'Thorough evaluation of potential challenges and mitigation strategies.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Permit Coordination',
    description: 'Expert handling of all necessary permits and regulatory requirements.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Stakeholder Communication',
    description: 'Clear and consistent communication with all project stakeholders.',
    icon: UserGroupIcon,
  },
];

const technologies = [
  {
    name: 'Building Information Modeling (BIM)',
    description: 'Advanced 3D modeling and visualization for optimal project planning.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Project Management Software',
    description: 'State-of-the-art tools for scheduling, tracking, and coordination.',
    icon: ClipboardDocumentCheckIcon,
  },
];

export default function ProjectPlanning() {
  return (
    <div className="bg-black">
      <PageHeader
        title="Project Planning"
        subtitle="Comprehensive planning and coordination for successful project delivery"
      />

      {/* Main Content */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-500">Strategic Approach</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Thorough Planning for Project Success
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our comprehensive approach ensures projects stay on schedule and within budget through
              detailed planning and coordination at every stage.
            </p>
          </div>

          {/* Planning Steps Grid */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {planningSteps.map((step, index) => (
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
                    <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="mt-4 flex flex-auto flex-col">
                    <h3 className="text-xl font-semibold leading-8 text-white">{step.name}</h3>
                    <p className="mt-2 flex flex-auto text-base leading-7 text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="py-24 sm:py-32 bg-blue-900/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-500">Advanced Technology</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Cutting-Edge Planning Tools
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We leverage advanced technology and software solutions to optimize planning and
              coordination across all project phases.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col bg-white/5 p-8 rounded-2xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
                    <tech.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{tech.name}</h3>
                  <p className="mt-2 text-gray-300">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}