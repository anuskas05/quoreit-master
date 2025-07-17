'use client';

import React from 'react';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <> 
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
          Contact us
        </h1>
      </div>
    </section>
 
    <div className="bg-white py-10 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">
        We operate from 40 offices covering the USA, <br /> Europe and Asia.
      </h2>

      <div className="flex justify-center items-center space-x-12 mb-10">
        <a href="/jobs" className="flex flex-col items-center hover:opacity-80 transition-opacity">
          <div className="text-red-600 text-2xl" aria-hidden="true">▼</div>
          <p className="font-bold mt-2">Jobs & Careers</p>
        </a>

        <a href="/contact" className="flex flex-col items-center hover:opacity-80 transition-opacity">
          <div className="text-red-600 text-2xl" aria-hidden="true">▼</div>
          <p className="font-bold mt-2">Client Query</p>
        </a>

        <a href="/locations" className="flex flex-col items-center hover:opacity-80 transition-opacity">
          <div className="text-red-600 text-2xl" aria-hidden="true">▼</div>
          <p className="font-bold mt-2">Our Locations</p>
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start md:items-center md:space-x-8 max-w-4xl mx-auto">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <Image
            src="/images/london_office.jpg" // Replace with your actual office image
            alt="London Office"
            width={500}
            height={350}
            className="w-full h-auto object-cover"
            priority // Optional: if this is above the fold
          />
        </div>

        <div className="text-left md:w-1/2 ">
          <h3 className="text-2xl font-bold mb-5 ">Our Head Office</h3>
          <address className="not-italic">
            LDN:W<br/>
            3 Noble Street<br/>
            London<br/>
            EC2V 7EE<br/>
            Tel: <a href="tel:+442073330033" className="text-blue-600">+44 (0)20 7333 0033</a><br/>
            <a href="mailto:info@harveynash.com" className="text-blue-600">info@harveynash.com</a>
          </address>
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-2 inline-block hover:text-blue-800"
          >
            Map and Directions
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
  

export default ContactUs;