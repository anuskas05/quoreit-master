'use client';

import React from 'react';
import Image from 'next/image';
 
import Link from 'next/link';

const NewsEvent = () => {
   const cards = [
    {
      id: 1,
      image: '/images/card1.webp',
      title: 'Egyptian HVN.TV – Beware of entity unlawfully trying  associate with us',
      link: 'https://www.harveynash.com/latest-news/egyptian-hvn-tv---a-scam-warning',
    },
    {
      id: 2,
      image: '/images/card2.webp',
      title: "Nash Squared CEO, Bev White shortlisted for Computer Weekly’s 50 Most Influential Women in UK Tech",
      link: 'https://www.harveynash.com/news/bev-white-shortlisted-computer-weekly-influential-women',
    },
    {
      id: 3,
      image: '/images/card3.webp',
      title: 'Where are all the technologists? Talent shortages and what to do about them?',
      link: 'https://www.harveynash.com/news/where-are-the-technologists',
    },
      {
      id: 4,
      image: '/images/card4.webp',
      title: 'Rachel Watts joins Harvey Nash Group as Global Marketing Director for the Harvey Nash business',
      link: 'https://www.harveynash.com/news/rachel-watts-marketing-director',
    },
    {
      id: 5,
      image: '/images/card5.webp',
      title: 'Harvey Nash Group pledge to use renewable energy in European offices by 2023 on the way to achieve Net Zero',
      link: 'https://www.harveynash.com/news/renewable-energy-net-zero',
    },
    {
      id: 6,
      image: '/images/card6.webp',
      title: 'Harvey Nash Group appoints cyber expert as Global CISO to support growth and establish new virtual CISO practice',
      link: 'https://www.harveynash.com/news/global-ciso-cyber-expert',
    },
    {
      id: 7,
      image: '/images/card7.webp',
      title: 'Harvey Nash wins prestigious Best Company to Work for Award',
      link: 'https://www.harveynash.com/news/harvey-nash-best-company-award',
    },
    {
      id: 8,
      image: '/images/card8.webp',
      title: 'Growth in global tech threatened as skills crisis reaches all-time high, finds world’s largest digital leadership survey',
      link: 'https://www.harveynash.com/news/global-tech-skills-crisis',
    },
    {
      id: 9,
      image: '/images/card9.webp',
      title: 'National Coming Out Day',
      link: 'https://www.harveynash.com/news/national-coming-out-day',
    },
  ];
  return (
    <> 
    <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <Image
        src="/images/news.webp" // Make sure the image is large/high-res
        alt="Candidates Hero Background"
        fill
        quality={100} // Max quality for HD
        priority
        className="object-cover object-center"
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
     <section className="py-10 px-4 bg-gray-50">
  <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">

        {cards.map((card) => (
          <div key={card.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <Image
              src={card.image}
              alt={card.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover rounded-t-lg"
              quality={100}
            />
            <div className="p-6 flex flex-col justify-between h-60">
              <h3 className="text-lg font-semibold text-blue-700 mb-4 hover:underline">
                <Link href={card.link} target="_blank">{card.title}</Link>
              </h3>
              <Link href={card.link} target="_blank">
                <button className="cursor-pointer bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] font-semibold py-3 px-6 rounded transition-all duration-300 shadow-md">
                  FIND OUT MORE
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
     <div className="w-full flex justify-center mt-12 mb-24">
  <Link href="#article-archive" passHref>
    <button className="cursor-pointer bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] font-semibold py-3 px-6 rounded transition-all duration-300 shadow-md">
      FULL ARTICLE ARCHIVE
    </button>
  </Link>
</div>



    </>
  );
};

export default NewsEvent;