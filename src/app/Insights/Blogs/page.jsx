'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";
const newsItems = [
  {
    date: 'April 9, 2024',
    title: 'Ramadan 2024',
    image: '/news/comment1.png',
  },
  {
    date: 'March 22, 2024',
    title:
      'Ramadan 2024 - The Half Way Point',
    image: '/news/comment2.png',
  },
  {
    date: 'March 11, 2024',
    title: 'Ramadan 2024 – The Start of the Journey',
    image: '/news/comment3.png',
  },
  {
    date: 'November 22, 2023',
    title: 'Transgender Awareness Week 2023',
    image: '/news/comment4.png',
  },
  {
    date: 'May 25, 2023',
    title: 'Is there increased urgency for tangible action from women working in the tech sector?',
    image: '/news/comment5.png',
  },
  {
    date: 'April 19, 2023',
    title: 'Ramadan 2023',
    image: '/news/comment6.png',
  },
]

export default function Comment() {
  return (<>
  <Navbar/>
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-2">
          Blogs
        </h2>
        <div className="w-20 h-1 bg-[#00d9a6] mx-auto mb-10 rounded"></div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={280}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-[#00d9a6] font-semibold uppercase mb-2">
                  {item.date.toUpperCase()}
                </p>
                <h3 className="text-black font-bold text-lg leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
<Footer/>
    </>
  )
}