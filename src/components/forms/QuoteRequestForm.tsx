'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAddressAutocomplete } from '@/lib/useAddressAutocomplete';

export default function QuoteRequestForm() {
  const {
    setQuery,
    suggestions,
    isLoading,
    setSuggestions
  } = useAddressAutocomplete(300);
  
  const locationRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        // Only clear suggestions if clicking outside the entire input + dropdown area
        const isClickOnInput = (event.target as HTMLElement)?.id === 'location';
        if (!isClickOnInput) {
          setSuggestions([]);
          setSelectedIndex(-1);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setSuggestions]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          const selected = suggestions[selectedIndex];
          setFormData(prev => ({ ...prev, location: selected.display_name }));
          setSuggestions([]);
          setSelectedIndex(-1);
        }
        break;
      case 'Escape':
        setSuggestions([]);
        setSelectedIndex(-1);
        break;
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    projectSize: '',
    timeline: '',
    budget: '',
    location: '',
    requirements: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-quote-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.details || data.error || 'Failed to send email');
      }
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        projectSize: '',
        timeline: '',
        budget: '',
        location: '',
        requirements: '',
      });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error occurred';
      console.error('Form submission error:', message);
      setSubmitStatus('error');
      setErrorMessage(message);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      {/* Contact Information */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-6">Contact Information</h3>
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-0 bg-black/80 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-primary/20 focus:ring-2 focus:ring-inset focus:ring-primary hover:ring-primary/50 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-0 bg-black/80 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-primary/20 focus:ring-2 focus:ring-inset focus:ring-primary hover:ring-primary/50 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-0 bg-black/80 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-primary/20 focus:ring-2 focus:ring-inset focus:ring-primary hover:ring-primary/50 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300">
              Company *
            </label>
            <input
              type="text"
              name="company"
              id="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-0 bg-black/80 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-primary/20 focus:ring-2 focus:ring-inset focus:ring-primary hover:ring-primary/50 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-6">Project Details</h3>
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-300">
              Project Type *
            </label>
            <select
              name="projectType"
              id="projectType"
              required
              value={formData.projectType}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-0 bg-black/80 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-primary/20 focus:ring-2 focus:ring-inset focus:ring-primary hover:ring-primary/50 sm:text-sm sm:leading-6 [&>option]:bg-black [&>option]:text-white"
            >
              <option value="">Select Project Type</option>
              <option value="Commercial Construction">Commercial Construction</option>
              <option value="Industrial Construction">Industrial Construction</option>
              <option value="Renovation">Renovation</option>
              <option value="Infrastructure">Infrastructure</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="projectSize" className="block text-sm font-medium text-gray-300">
              Project Size (sq ft) *
            </label>
            <input
              type="text"
              name="projectSize"
              id="projectSize"
              required
              value={formData.projectSize}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-0 bg-black/80 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-primary/20 focus:ring-2 focus:ring-inset focus:ring-primary hover:ring-primary/50 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-300">
              Expected Timeline *
            </label>
            <select
              name="timeline"
              id="timeline"
              required
              value={formData.timeline}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-0 bg-black/80 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-primary/20 focus:ring-2 focus:ring-inset focus:ring-primary hover:ring-primary/50 sm:text-sm sm:leading-6 [&>option]:bg-black [&>option]:text-white"
            >
              <option value="">Select Timeline</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6-12 months">6-12 months</option>
              <option value="12+ months">12+ months</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-300">
              Budget Range
            </label>
            <select
              name="budget"
              id="budget"
              value={formData.budget}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-0 bg-black/80 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-primary/20 focus:ring-2 focus:ring-inset focus:ring-primary hover:ring-primary/50 sm:text-sm sm:leading-6 [&>option]:bg-black [&>option]:text-white"
            >
              <option value="">Select Budget Range</option>
              <option value="Under $100k">Under $100k</option>
              <option value="$100k-$500k">$100k-$500k</option>
              <option value="$500k-$1M">$500k-$1M</option>
              <option value="$1M-$5M">$1M-$5M</option>
              <option value="$5M+">$5M+</option>
            </select>
          </div>
          <div className="sm:col-span-2 relative" ref={locationRef}>
            <label htmlFor="location" className="block text-sm font-medium text-gray-300">
              Project Location *
            </label>
            <div className="relative">
              <input
                type="text"
                name="location"
                id="location"
                required
                value={formData.location}
                onChange={(e) => {
                  handleChange(e);
                  setQuery(e.target.value);
                  setSelectedIndex(-1);
                }}
                onFocus={() => setQuery(formData.location)}
                onKeyDown={handleKeyDown}
                className="mt-2 block w-full rounded-md border-0 bg-black/80 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-primary/20 focus:ring-2 focus:ring-inset focus:ring-primary hover:ring-primary/50 sm:text-sm sm:leading-6"
                aria-expanded={suggestions.length > 0}
                aria-autocomplete="list"
                aria-controls="location-suggestions"
                role="combobox"
              />
              {isLoading && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent"></div>
                </div>
              )}
            </div>
            {suggestions.length > 0 && (
              <div
                id="location-suggestions"
                className="absolute z-50 mt-1 w-full rounded-md bg-black/90 shadow-lg ring-1 ring-primary/20 backdrop-blur-sm"
                role="listbox"
              >
                <ul className="py-1 max-h-60 overflow-auto">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={suggestion.place_id}
                      onClick={() => {
                        setFormData(prev => ({ ...prev, location: suggestion.display_name }));
                        setSuggestions([]);
                        setSelectedIndex(-1);
                        setQuery(''); // Clear the query to prevent further searches
                      }}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`px-3 py-2.5 text-sm text-white cursor-pointer transition-colors ${
                        index === selectedIndex
                          ? 'bg-primary/40 text-white'
                          : 'hover:bg-primary/20'
                      } border-b border-primary/10 last:border-b-0`}
                      role="option"
                      aria-selected={index === selectedIndex}
                    >
                      {suggestion.display_name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Requirements */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-6">Project Requirements</h3>
        <div>
          <label htmlFor="requirements" className="block text-sm font-medium text-gray-300">
            Project Requirements and Specifications *
          </label>
          <textarea
            name="requirements"
            id="requirements"
            required
            rows={4}
            value={formData.requirements}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-0 bg-black/80 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-primary/20 focus:ring-2 focus:ring-inset focus:ring-primary hover:ring-primary/50 sm:text-sm sm:leading-6"
            placeholder="Please describe your project requirements, including any specific details or specifications..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className={`w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            isSubmitting
              ? 'bg-primary/70 cursor-not-allowed'
              : 'bg-primary hover:bg-primary/90 focus-visible:outline-primary'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Request Quote'}
        </motion.button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-md bg-green-500/10 p-4"
        >
          <p className="text-sm text-green-400">
            Thank you for your quote request. We&apos;ll review your project details and get back to you soon!
          </p>
        </motion.div>
      )}
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-md bg-red-500/10 p-4"
        >
          <p className="text-sm text-red-400">
            {errorMessage || 'There was an error sending your request. Please try again or contact us directly.'}
          </p>
        </motion.div>
      )}
    </form>
  );
}