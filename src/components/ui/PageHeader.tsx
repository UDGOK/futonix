'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHeader({ title, subtitle, backgroundImage = '/construction-header.jpg' }: PageHeaderProps) {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{title}</h1>
          {subtitle && (
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}