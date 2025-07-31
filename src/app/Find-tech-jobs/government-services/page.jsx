'user client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GovernmentServices() {
return(
    <>
    
            {/* Government Services Section */}
          <section className="py-12 lg:py-20 mt-18 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-6 lg:mb-8">
                    Government Services
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                    Understanding how to efficiently navigate regulated and compliance-driven government 
                    environments allows us to move quickly to meet your staffing and recruiting needs.
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      Proudly serving those <span className="text-green-500">who serve.</span>
                    </h3>
                    <p className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
                      Seneca is proud to be a provider of crucial recruitment support to the US government and 
                      Department of Defense. We also work closely with countless agencies at local, state and federal 
                      levels to develop specialized experience in Government solutions across IT, infrastructure, 
                      engineering and more.
                    </p>
                  </div>
                  
                  <p className="text-xl font-semibold text-gray-900 mb-12">
                    Some key areas of our expertise include:
                  </p>
                </div>
    
                {/* Defense & Intel Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
                  <div className="relative order-2 lg:order-1">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src="/images/it9.png"
                        alt="Defense and intelligence team collaborating on government technology solutions"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Defense & Intel</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Ranging from Enterprise IT to both Full Spectrum and Software Engineering, we're fluent across ERP 
                      (SAP and Oracle), System Engineering & Admin, App Development, Data Analytics, Cloud 
                      Computing and Cyber.
                    </p>
                    <Link 
                      href="/services/defense-intel"
                      className="inline-flex items-center px-8 py-4 bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6]  text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105"
                      aria-label="Get started with Defense & Intel services"
                    >
                      GET STARTED
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
    
                {/* Federal Civilian, Homeland, & Justice Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
                  <div className="space-y-6 lg:space-y-8">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                      Federal Civilian, Homeland, & Justice
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      With a deep understanding of the IT and talent needs of large government organizations, Seneca 
                      Resources is a proven partner delivering a wide variety of services and solutions to Fed Civilian, 
                      DOH and DOJ customers, such as: Data Analysis, Cybersecurity, Application Development, Project 
                      Management, ETL Engineering, Quality Assurance, etc.
                    </p>
                    <Link 
                      href="/services/federal-civilian"
                      className="inline-flex items-center px-8 py-4 bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6]  text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105"
                      aria-label="Get started with Federal Civilian, Homeland & Justice services"
                    >
                      GET STARTED
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  
                  <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src="/images/it10.png"
                        alt="Federal civilian employees working on homeland security and justice technology projects"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
    
                {/* Federal Health Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
                  <div className="relative order-2 lg:order-1">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src="/images/it11.png"
                        alt="Healthcare professional working with advanced medical technology and data systems"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Federal Health</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      We provide support, planning, implementation, transitioning, operating and maintenance 
                      expertise to keep health initiatives running smoothly. From maintaining CMS applications to 
                      providing support Cloud Computing Services for Infrastructure as a Service (IaaS) and scalable 
                      Cloud based Platform as a Service (PaaS) applications.
                    </p>
                    <Link 
                      href="/services/federal-health"
                      className="inline-flex items-center px-8 py-4 bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6]  text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105"
                      aria-label="Get started with Federal Health services"
                    >
                      GET STARTED
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
    
                {/* State, Local & Education Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div className="space-y-6 lg:space-y-8">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                      State, Local & Education
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Challenges are always evolving. So State & Local Government entities have to stay nimble. With over 
                      30 years of deep public sector experience, Seneca Resources partners with numerous SLED 
                      organizations to strengthen their capabilities in talent scalability, project/program management, 
                      cybersecurity, data science, app development, and more.
                    </p>
                    <Link 
                      href="/services/state-local-education"
                      className="inline-flex items-center px-8 py-4 bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6]  text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105"
                      aria-label="Get started with State, Local & Education services"
                    >
                      GET STARTED
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  
                  <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src="/images/it12.png"
                        alt="State and local government officials collaborating on education and community initiatives"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
              <section className="bg-white py-8 sm:py-12 lg:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                    When working with the government and their agencies, Seneca Resources assures that all 
                    employees are fully compliant with state and federal regulations, including{' '}
                    <Link 
                      href="/section-508-compliance" 
                      className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
                      aria-label="Learn more about Section 508 compliance"
                    >
                      Section 508 of the Rehabilitation Act
                    </Link>
                    {' '}which requires Federal agencies to make their electronic and information 
                    technology accessible to people with disabilities.
                  </p>
                </div>
              </div>
            </section>
</>
    )
}