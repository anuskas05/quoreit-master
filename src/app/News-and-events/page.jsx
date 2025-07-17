'use client';

import React from 'react';
import Image from 'next/image';

const NewsEvent = () => {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/jobs_hero.jpg" // Replace with your actual hero background image
          alt="Candidates Hero Background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-wide">
          News and Event
        </h1>
      </div>
    </section>
  );
};

export default NewsEvent;