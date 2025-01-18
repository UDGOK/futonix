'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    if (!autoplayEnabled) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, [images.length, autoplayEnabled]);

  const handleImageClick = () => {
    setAutoplayEnabled(false);
    setModalIndex(currentIndex);
    setIsModalOpen(true);
  };

  const handlePrevious = () => {
    setModalIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setModalIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setAutoplayEnabled(true);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') handleClose();
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, handleKeyDown]);

  return (
    <>
      <div
        className="relative w-full h-full overflow-hidden group cursor-pointer"
        onClick={handleImageClick}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10"
          >
            <Image
              src={images[currentIndex]}
              alt={`${alt} - Image ${currentIndex + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation dots */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-400/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* View Gallery Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
          <span className="bg-black/75 text-white px-4 py-2 rounded-full text-sm font-medium">
            View Gallery
          </span>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/95 z-[9999] p-4 overflow-hidden"
          >
            <div className="absolute top-4 right-4 z-[9999] flex gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close gallery"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-4 z-[9999] p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <motion.div
                key={modalIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full max-w-7xl max-h-[80vh] mx-auto">
                  <Image
                    src={images[modalIndex]}
                    alt={`${alt} - Image ${modalIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              </motion.div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 z-[9999] p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Next image"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === modalIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}