'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold text-white">404</h1>
          <h2 className="mt-4 text-2xl font-semibold text-white">Page Not Found</h2>
          <p className="mt-4 text-gray-400">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}