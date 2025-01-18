'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHeader({ title, subtitle, backgroundImage = '/construction-header.jpg' }: PageHeaderProps) {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-[0_0_0.3rem_#ffffff70] sm:text-6xl">{title}</h1>
          {subtitle && (
            <p className="mt-6 text-lg leading-8 text-gray-100">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}