'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '@/components/ui/PageHeader';
import ImageCarousel from '@/components/ui/ImageCarousel';

const categories = ['All', 'Commercial'];

const projects = [
  {
    id: 1,
    name: 'Eye Institute of Tulsa',
    category: 'Commercial',
    location: 'Bixby, OK',
    year: '2024',
    description: 'State-of-the-art eye clinic featuring modern medical facilities, comfortable patient areas, and advanced diagnostic equipment.',
    images: [
      '/Doc-exterior.png',
      '/Doc-Lobby 1.jpg',
      '/Doc-Lobby 2.jpg',
      '/Doc-Lobby 3.jpg',
      '/Doc-Lobby 4.jpg',
      '/Doc-Examination Room (1).jpg',
      '/Doc-Examination Room-2.jpg',
      '/Doc-Testing Room.jpg',
      '/Doc-Meeting Room.jpg',
      '/Doc-Meeting Room 2.jpg',
      '/Doc-Employer Room.jpg',
      '/Doc-Lounge2.jpg',
      '/Doc.Lounge.jpg'
    ],
    stats: {
      size: '15,000 sq ft',
      duration: '12 months',
      value: '$8.5M',
    },
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <div className="bg-black">
      <PageHeader
        title="Our Projects"
        subtitle="Showcasing our commitment to excellence through successful project delivery"
      />

      {/* Category Filter */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors
                ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 rounded-2xl overflow-hidden"
              >
                <div className="aspect-[4/3] relative">
                  <ImageCarousel images={project.images} alt={project.name} />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {project.location} · {project.year}
                  </p>
                  <p className="mt-4 text-gray-300">{project.description}</p>
                  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-gray-800 pt-6">
                    <div>
                      <p className="text-sm text-gray-400">Size</p>
                      <p className="mt-1 text-sm font-medium text-white">{project.stats.size}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Duration</p>
                      <p className="mt-1 text-sm font-medium text-white">{project.stats.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Value</p>
                      <p className="mt-1 text-sm font-medium text-white">{project.stats.value}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-900/20 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Projects Completed', value: '200+' },
              { label: 'Square Feet Developed', value: '5M+' },
              { label: 'States Served', value: '12' },
              { label: 'Client Satisfaction', value: '98%' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}