'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/ui/PageHeader';
import ContactForm from '@/components/forms/ContactForm';
import { Boxes } from '@/components/ui/background-boxes';
import {
  BuildingOfficeIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const offices = [
  {
    city: 'Chicago',
    address: '123 W Madison St, Suite 1500',
    state: 'IL',
    zip: '60602',
    phone: '+1 (312) 555-0123',
    email: 'chicago@futonix.com',
  },
  {
    city: 'Detroit',
    address: '456 Woodward Ave, Suite 800',
    state: 'MI',
    zip: '48226',
    phone: '+1 (313) 555-0123',
    email: 'detroit@futonix.com',
  },
  {
    city: 'Minneapolis',
    address: '789 Nicollet Mall, Suite 1200',
    state: 'MN',
    zip: '55402',
    phone: '+1 (612) 555-0123',
    email: 'minneapolis@futonix.com',
  },
];

export default function Contact() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-slate-900">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(circle_at_center,transparent_20%,black_80%)] pointer-events-none" />
      <Boxes />
      
      <div className="relative z-30">
        <PageHeader
          title="Contact Us"
          subtitle="Get in touch with our team to discuss your next project"
        />

        <div className="relative isolate">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            {/* Contact Form Section */}
            <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-24">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold tracking-tight text-white">Let&apos;s Connect</h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Ready to start your next project? Fill out the form below and one of our experts will get back to you within 24 hours.
                  </p>
                  <div className="mt-10">
                    <ContactForm />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Office Locations Section */}
            <div className="px-6 pb-24 pt-24 sm:pb-32 lg:px-8 lg:py-24">
              <div className="mx-auto max-w-xl lg:mx-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold tracking-tight text-white">Our Offices</h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Visit one of our offices or reach out to us directly.
                  </p>
                  <div className="mt-10 space-y-8">
                    {offices.map((office, index) => (
                      <motion.div
                        key={office.city}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        className="border border-gray-800 rounded-lg p-6 bg-slate-900/50 backdrop-blur-sm"
                      >
                        <h3 className="text-xl font-semibold text-white">{office.city}</h3>
                        <div className="mt-4 space-y-4">
                          <div className="flex gap-x-4">
                            <BuildingOfficeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                            <div className="text-gray-300">
                              <p>{office.address}</p>
                              <p>{office.city}, {office.state} {office.zip}</p>
                            </div>
                          </div>
                          <div className="flex gap-x-4">
                            <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                            <div className="text-gray-300">
                              <p>{office.phone}</p>
                            </div>
                          </div>
                          <div className="flex gap-x-4">
                            <EnvelopeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                            <div className="text-gray-300">
                              <p>{office.email}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-slate-900/50 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Transform Your Vision into Reality?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Partner with Futonix for your next construction project and experience the difference of working with industry leaders.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="tel:+13125550123"
                  className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  Call Us Now
                </a>
                <a
                  href="mailto:info@futonix.com"
                  className="text-sm font-semibold leading-6 text-white hover:text-blue-400"
                >
                  Email Us <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}