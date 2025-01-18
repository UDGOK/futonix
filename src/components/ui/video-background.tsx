'use client';

import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  children: React.ReactNode;
}

export function VideoBackground({ children }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set playback rate slower for better effect
    video.playbackRate = 0.75;

    const handlePlay = () => {
      console.log('Video started playing');
    };

    const handleError = () => {
      console.error('Video error:', video.error);
      // Hide video on error to show fallback
      video.style.display = 'none';
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('error', handleError);

    // Start playing
    video.play().catch(error => {
      console.error('Error playing video:', error);
    });

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background container with fallback image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/construction-header.jpg)' }}
      >
        {/* Video element */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ zIndex: 1 }}
            preload="metadata"
          >
            <source src="/construction-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark overlay */}
        <div 
          className="absolute inset-0 bg-black/60"
          style={{ zIndex: 2 }}
          aria-hidden="true"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}