'use client';

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
    city: 'Tulsa',
    address: '7739 E. 38th Street',
    state: 'OK',
    zip: '74145',
    phone: '877-388-6649',
    email: 'invoices@futonix.com',
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
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-white">Let&apos;s Connect</h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Ready to start your next project? Fill out the form below and one of our experts will get back to you within 24 hours.
                  </p>
                  <div className="mt-10">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations Section */}
            <div className="px-6 pb-24 pt-24 sm:pb-32 lg:px-8 lg:py-24">
              <div className="mx-auto max-w-xl lg:mx-0">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-white">Our Offices</h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Visit one of our offices or reach out to us directly.
                  </p>
                  <div className="mt-10 space-y-8">
                    {offices.map((office) => (
                      <div
                        key={office.city}
                        className="border border-gray-800 rounded-lg p-6 bg-slate-900/50"
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Transform Your Vision into Reality?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Partner with Futonix for your next construction project and experience the difference of working with industry leaders.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="tel:8773886649"
                  className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  Call Us Now
                </a>
                <a
                  href="mailto:invoices@futonix.com"
                  className="text-sm font-semibold leading-6 text-white hover:text-blue-400"
                >
                  Email Us <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}