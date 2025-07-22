import Link from 'next/link';
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";
export default function PrivacyNotice() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
              <span className="block">Data Privacy</span>
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Notice
              </span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-2xl">
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
                  <p>
                    Nash Squared, including all Nash Squared subsidiary companies together, (which includes 
                    Harvey Nash, Flexhuis, Spinks (We Are Spinks), Crimson, Talent-IT, Team4Talent, Talent2Test, 
                    Pro-Cured, eMenKa NV), referred to here as 'Nash Squared' is a leading global recruitment 
                    consultancy and outsourcing company working on an annual basis with thousands of 
                    candidates and clients worldwide.
                  </p>
                  
                  <p>
                    This website offers you a platform to upload your CV and other personal data to improve 
                    your user experience, and to use functions such as job alerts, CV registration and job 
                    applications. You are responsible for the accuracy of the personal data inputted. If you use 
                    functions on the website which access data from external sources, such as LinkedIn, please 
                    be aware that the website will access your personal data from these sources.
                  </p>
                  
                  <p>
                    Our reputation as a recruiter is reliant on the trust of people we work with, and 
                    consequently the effective and professional use of the information you provide us is 
                    paramount.
                  </p>
                  
                  <p>
                    Your privacy is important to us, and we are committed to protecting and safeguarding your 
                    data privacy rights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        
        {/* Overview Card */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Overview
              </h2>
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <p>
                  This privacy notice explains what we do with your personal data, whether as part of 
                  helping you find a job, developing your career, providing you with a service that may be of 
                  interest, or simply as a result of you visiting our website.
                </p>
                
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border-l-4 border-emerald-500">
                  <p className="font-medium text-emerald-800">We respect your right to privacy.</p>
                </div>
                
                <p>
                  Our overall aim is to ensure that our collection and use of personal information is 
                  appropriate to the provision of services to you and is in accordance with applicable data 
                  protection laws.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contents Navigation */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Contents
              </h2>
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <Link href="#definitions" className="group bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300">
                  <span className="text-violet-700 group-hover:text-violet-900 font-medium text-base sm:text-lg">
                    Important definitions in this policy
                  </span>
                </Link>
                <Link href="#what-we-do" className="group bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300">
                  <span className="text-violet-700 group-hover:text-violet-900 font-medium text-base sm:text-lg">
                    What does Nash Squared do?
                  </span>
                </Link>
                <Link href="#data-sources" className="group bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300">
                  <span className="text-violet-700 group-hover:text-violet-900 font-medium text-base sm:text-lg">
                    Where does Nash Squared collect data from?
                  </span>
                </Link>
                <Link href="#candidate-info" className="group bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300">
                  <span className="text-violet-700 group-hover:text-violet-900 font-medium text-base sm:text-lg">
                    What information do we collect on Candidates?
                  </span>
                </Link>
                <Link href="#client-info" className="group bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300">
                  <span className="text-violet-700 group-hover:text-violet-900 font-medium text-base sm:text-lg">
                    What information do we collect on Client contacts?
                  </span>
                </Link>
                <Link href="#lawful-basis" className="group bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300">
                  <span className="text-violet-700 group-hover:text-violet-900 font-medium text-base sm:text-lg">
                    What is our lawful basis for processing your personal data?
                  </span>
                </Link>
                <Link href="#sharing" className="group bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300">
                  <span className="text-violet-700 group-hover:text-violet-900 font-medium text-base sm:text-lg">
                    How do we share your personal information and who do we share it with?
                  </span>
                </Link>
                <Link href="#international" className="group bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300">
                  <span className="text-violet-700 group-hover:text-violet-900 font-medium text-base sm:text-lg">
                    International transfers
                  </span>
                </Link>
                <Link href="#cookies" className="group bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300">
                  <span className="text-violet-700 group-hover:text-violet-900 font-medium text-base sm:text-lg">
                    Personal information, cookies and websites
                  </span>
                </Link>
                <Link href="#safeguards" className="group bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300">
                  <span className="text-violet-700 group-hover:text-violet-900 font-medium text-base sm:text-lg">
                    How we safeguard your personal data
                  </span>
                </Link>
                <Link href="#retention" className="group bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300">
                  <span className="text-violet-700 group-hover:text-violet-900 font-medium text-base sm:text-lg">
                    Data retention
                  </span>
                </Link>
                <Link href="#rights" className="group bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300">
                  <span className="text-violet-700 group-hover:text-violet-900 font-medium text-base sm:text-lg">
                    Your rights, complaints, questions and suggestions
                  </span>
                </Link>
                <Link href="#marketing" className="group bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300">
                  <span className="text-violet-700 group-hover:text-violet-900 font-medium text-base sm:text-lg">
                    Marketing activities
                  </span>
                </Link>
                <Link href="#profiling" className="group bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300">
                  <span className="text-violet-700 group-hover:text-violet-900 font-medium text-base sm:text-lg">
                    Profiling, Anonymous data & Third party sites
                  </span>
                </Link>
                <Link href="#harvey-nash" className="group bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300 md:col-span-2">
                  <span className="text-violet-700 group-hover:text-violet-900 font-medium text-base sm:text-lg">
                    Harvey Nash Inc.'s CPRA Privacy Policy
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 sm:space-y-16">
          
          {/* Important Definitions Section */}
          <div id="definitions" className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Important definitions in this notice
              </h2>
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-l-4 border-amber-500">
                  <p>
                    "You" are a candidate, potential candidate, consultant, client contact or contact at any 
                    other organisation involved in the introduction and/or supply of a candidate's services, 
                    such as a contact at a recruitment process outsourcing company, personal service 
                    company or umbrella company.
                  </p>
                </div>
                
                <p>References in this notice to:</p>
                
                <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-500 mt-3"></div>
                      <p>
                        "hirer" and "client" mean any hiring organisation to which we offer and/or provide 
                        temporary and/or permanent recruitment services;
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-500 mt-3"></div>
                      <p>"client contact" means a responsible owner at a client;</p>
                    </div>
                    
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-500 mt-3"></div>
                      <p>"candidate" means a potential or actual candidate for a permanent or temporary role;</p>
                    </div>
                    
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-500 mt-3"></div>
                      <p>
                        "consultant" means a person whose services are supplied via Nash Squared to work on 
                        temporary assignments with a hirer;
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-500 mt-3"></div>
                      <p>
                        "referee and/or emergency contact" means a person whose personal details a 
                        candidate provides for the purposes of providing a reference or acting as their 
                        emergency contact.
                      </p>
                    </div>
                  </div>
                </div>
                
                <p>
                  Specifically, this privacy notice provides you with details about the personal information we 
                  collect and hold about you, how we use your personal information and your rights 
                  regarding your personal information.
                </p>
                
                <p>It does not cover any use of your personal information by:</p>
                
                <div className="bg-red-50 rounded-2xl p-6 sm:p-8 border-l-4 border-red-400">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-400 mt-3"></div>
                      <p>an actual or potential employer or hirer;</p>
                    </div>
                    
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-400 mt-3"></div>
                      <p>an umbrella company;</p>
                    </div>
                    
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-400 mt-3"></div>
                      <p>
                        or any other organisation involved in the supply of your services via us to a hirer, to 
                        whom we may provide your personal information as part of the recruitment process.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-500">
                  <p className="font-medium text-blue-800">That use will be governed by the relevant employer's or hirer's privacy policy.</p>
                </div>
              </div>
            </div>
          </div>

          {/* What does Nash Squared do Section */}
          <div id="what-we-do" className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                What does Nash Squared do?
              </h2>
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-800">The core of what we do is twofold.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <h3 className="text-xl font-semibold text-green-800">Client Services</h3>
                    </div>
                    <p>
                      Firstly, we work with clients to provide consultancy, outsourcing and recruitment services to 
                      help them solve technology, talent, recruitment and other related challenges.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 sm:p-8 border border-purple-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                      <h3 className="text-xl font-semibold text-purple-800">Candidate Services</h3>
                    </div>
                    <p>
                      Secondly, it is to provide services to help candidates develop their careers. We do this 
                      through assessing and matching people with potential job opportunities, as well as 
                      providing wider services to help them in their careers, such as invitations to networking 
                      events and opportunities to take part in research.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Where does Nash Squared collect data from Section */}
          <div id="data-sources" className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-rose-500 to-pink-600 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Where does Nash Squared collect data from?
              </h2>
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <p>
                  This privacy notice applies to the collection, storage and use of personal information 
                  collected by Nash Squared ("we" or "us"):
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-3 h-3 rounded-full bg-blue-500 mt-2"></div>
                      <p>
                        via our website at{' '}
                        <Link 
                          href="https://www.nashsquared.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium"
                        >
                          www.nashsquared.com
                        </Link>{' '}
                        or any other website operated by us (the "Site");
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 border border-green-200">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-3 h-3 rounded-full bg-green-500 mt-2"></div>
                      <p>
                        or as a result of you responding to an advertisement posted by us on a job board, 
                        online CV library or via social media;
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 sm:p-6 border border-purple-200">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-3 h-3 rounded-full bg-purple-500 mt-2"></div>
                      <p>
                        or as a result of us matching your CV, as uploaded by you onto a job board, online CV 
                        library or a social media site, to a vacancy we are seeking to fill for one of our clients;
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 sm:p-6 border border-orange-200">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-3 h-3 rounded-full bg-orange-500 mt-2"></div>
                      <p>or as a result of personal recommendations; or from company websites;</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 sm:p-6 border border-teal-200">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-3 h-3 rounded-full bg-teal-500 mt-2"></div>
                      <p>or from your business card;</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-4 sm:p-6 border border-indigo-200">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-3 h-3 rounded-full bg-indigo-500 mt-2"></div>
                      <p>
                        or in the course of us providing recruitment, resourcing, outsourcing or consultancy 
                        services to you ("Services")
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What information do we collect on Candidates Section */}
         <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-blue-600 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          What information do we collect on Candidates?
        </h2>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 lg:p-10">
        <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
          
          {/* Definition */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 border-l-4 border-indigo-500">
            <p>
              <span className="font-semibold text-indigo-800">Candidates:</span>{' '}
              <em className="text-indigo-700">
                the personal information we collect about you where "you" are a candidate or placed consultant.
              </em>
            </p>
          </div>

          {/* Nash Squared approach */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-500">
            <p className="font-medium text-green-800">
              Nash Squared aims to collect the minimum data it needs to perform its role.
            </p>
          </div>

          {/* Basic information */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            <p>
              Typically, this is name, address, job title and contact details. In addition, if you are a 
              candidate being considered for a role it may also include your CV / resume as well as other 
              details about your skills and experience.
            </p>
          </div>

          {/* Additional data collection */}
          <p>
            We may also collect other personally identifiable data, for instance we may be engaged in 
            equal opportunity monitoring or need information to complete a contract for you or our client.
          </p>

          {/* Extended data collection */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-amber-200">
            <p className="mb-6">
              This data can include age, identity card number, passport number, driver license number, 
              address, email address, user ID and passwords, gender, date of birth, marital status, 
              occupation, income range, bank account details, financial information, contact information 
              such as telephone, mobile, nationality, personal website or social media links or other 
              data which may be required by local regulations.
            </p>
          </div>

          {/* Referees and emergency contacts */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">
              Referees and emergency contacts:
            </h3>
            <p className="text-purple-700">
              we collect basic contact details (such as name, title, address, email and tel) so that we 
              can contact you for a reference or as an emergency contact for one of our candidates/or contractors.
            </p>
          </div>

        </div>
      </div>
    </div>
        </div>
        
        <div className="py-12 sm:py-16">
      
      {/* What information do we collect on Client contacts Section */}
      <div id="client-info" className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-500 to-green-600 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            What information do we collect on Client contacts?
          </h2>
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border-l-4 border-emerald-500">
              <p>
                <span className="font-semibold text-emerald-800">Client contacts:</span>{' '}
                <em className="text-emerald-700">the personal information we collect about you where "you" are a contact at one of our clients or at an MSP, umbrella company or personal service company involved in the supply of a person's services to a hirer.</em>
              </p>
            </div>
            
            <p>
              We need to collect information about you as an essential part of providing our Services.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">We may collect personal information about you when:</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 mt-3"></div>
                  <p>we contact you with a view to providing Services to you;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 mt-3"></div>
                  <p>or you email us expressing an interest in working with us;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 mt-3"></div>
                  <p>you provide us with your business card or other information provided to us, given to our employees at sales and marketing events;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 mt-3"></div>
                  <p>you post information or advertisements on job boards or social media websites;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 mt-3"></div>
                  <p>we provide Services to you as an actual or a potential hirer of your services;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 mt-3"></div>
                  <p>or we complete contractual documentation relevant to the Services, we will usually collect the following information from or about you: your name; your postal address; your phone and e-mail details; details of your role, title and responsibilities within your organisation;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 mt-3"></div>
                  <p>where "you" are a client: any opinion or feedback you share with us regarding a candidate or consultant;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 mt-3"></div>
                  <p>details of any queries you raise with us regarding the Services;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 mt-3"></div>
                  <p>details of any recruitment and/or resourcing requirements or plans you share with us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lawful Basis Section */}
      <div id="lawful-basis" className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            What is our lawful basis for processing your personal data?
          </h2>
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            <p>We use the data we gather to perform a number of tasks, including:</p>
            
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <div className="space-y-4">
                <p>- placement of a candidate into a particular employment role as defined by our clients;</p>
                <p>or the provision of resourcing, outsourcing or consultancy maintaining our records of our candidates, clients and contacts;</p>
                <p>- conducting marketing, profiling and business development activities as well as market research and statistical analysis regarding our products and/or services;</p>
                <p>- complying with any legal or regulatory requirements and to make the necessary disclosure under the requirements of any applicable law, regulation, direction, court order, guideline, circular or code which are applicable to us for the prevention of crime.</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Reporting requirements to clients where we offer Managed Services (RPO / MSP)</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-blue-700 mb-2">Client contacts:</p>
                  <p>We use the information collected from clients to ensure that we provide business services to you. This will involve identifying candidates that will meet your requirements or providing other business services from our portfolio.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-blue-700 mb-2">Suppliers:</p>
                  <p>we use the data collected to ensure the business arrangements between us run smoothly.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-blue-700 mb-2">Referees and emergency contacts:</p>
                  <p>we use the data collected to contact you for a reference or to contact you as a candidate's emergency contact in the event of an accident or other emergency.</p>
                </div>
              </div>
            </div>
            
            <p>We consider that it is necessary for our legitimate interests as a recruitment business to process your personal data.</p>
            
            <p>At different stages in the recruitment processes we also have other lawful grounds for processing your data such as compliance with our legal obligations and where it is necessary for the performance of contracts related to the recruitment process.</p>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-500">
              <p>We think you will have an expectation that if you are looking for employment or have posted your CV or other professional information on a job board or professional networking site, that you are happy for us to collect and use your personal data to provide our services.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sharing Information Section */}
      <div id="sharing" className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            How do we share your personal information and who do we share it with?
          </h2>
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border-l-4 border-orange-500">
              <p className="font-semibold text-orange-800">We may share your personal information with various third parties as detailed below.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Clients & Hirers</h3>
                <p>We share candidate information with potential employers and clients who may be interested in hiring them for permanent or temporary positions.</p>
              </div>
              
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Service Providers</h3>
                <p>We work with trusted third-party service providers who help us deliver our services, including background checking companies and payroll providers.</p>
              </div>
              
              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Legal Requirements</h3>
                <p>We may share information when required by law, regulation, or legal process, or to protect our rights and interests.</p>
              </div>
              
              <div className="bg-teal-50 rounded-2xl p-6 border border-teal-200">
                <h3 className="text-xl font-semibold text-teal-800 mb-4">Group Companies</h3>
                <p>We may share information within the Nash Squared group of companies for business purposes and service delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* International Transfers Section */}
      <div id="international" className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            International transfers
          </h2>
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 border-l-4 border-teal-500">
              <p>As a global organization, we may transfer your personal data to countries outside your home country to provide our services effectively.</p>
            </div>
            
            <p>We ensure appropriate safeguards are in place when transferring personal data internationally, including:</p>
            
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-teal-500 mt-3"></div>
                  <p>Adequacy decisions by relevant data protection authorities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-teal-500 mt-3"></div>
                  <p>Standard contractual clauses approved by relevant authorities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-teal-500 mt-3"></div>
                  <p>Binding corporate rules and other appropriate safeguards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cookies and Websites Section */}
      <div id="cookies" className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-pink-500 to-rose-600 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Personal information, cookies and websites
          </h2>
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            <p>Our website uses cookies and similar technologies to enhance your browsing experience and provide personalized content.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Essential Cookies</h3>
                <p className="text-sm">Required for basic website functionality and security.</p>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Analytics Cookies</h3>
                <p className="text-sm">Help us understand how visitors use our website.</p>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Marketing Cookies</h3>
                <p className="text-sm">Used to deliver personalized advertisements and content.</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border-l-4 border-pink-500">
              <p>You can manage your cookie preferences through your browser settings or our cookie preference center.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Safeguards Section */}
      <div id="safeguards" className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            How we safeguard your personal data
          </h2>
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border-l-4 border-indigo-500">
              <p className="font-semibold text-indigo-800">We take the security of your personal data seriously and implement appropriate technical and organizational measures.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Safeguards</h3>
                <div className="space-y-3 text-base">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <p>Encryption of data in transit and at rest</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <p>Secure access controls and authentication</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <p>Regular security monitoring and updates</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Organizational Safeguards</h3>
                <div className="space-y-3 text-base">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <p>Staff training on data protection</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <p>Access limitations on a need-to-know basis</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <p>Regular security assessments and audits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Retention Section */}
      <div id="retention" className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-amber-500 to-yellow-600 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Data retention
          </h2>
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 border-l-4 border-amber-500">
              <p>We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected and to comply with legal requirements.</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Retention Periods</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-amber-700">Candidate Data:</p>
                  <p>Typically retained for up to 7 years after last contact, unless longer retention is required by law or for legitimate business interests.</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700">Client Data:</p>
                  <p>Retained for the duration of the business relationship and for up to 7 years afterwards for legal and business purposes.</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700">Marketing Data:</p>
                  <p>Retained until you withdraw consent or object to processing, or for up to 3 years of inactivity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Your Rights Section */}
      <div id="rights" className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Your rights, complaints, questions and suggestions
          </h2>
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border-l-4 border-emerald-500">
              <p className="font-semibold text-emerald-800">You have various rights regarding your personal data under applicable data protection laws.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Access</h3>
                <p className="text-sm">Request a copy of the personal data we hold about you.</p>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Rectification</h3>
                <p className="text-sm">Request correction of inaccurate or incomplete data.</p>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Erasure</h3>
                <p className="text-sm">Request deletion of your personal data in certain circumstances.</p>
              </div>
              
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Portability</h3>
                <p className="text-sm">Request transfer of your data to another organization.</p>
              </div>
              
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Restriction</h3>
                <p className="text-sm">Request limitation of processing in certain situations.</p>
              </div>
              
              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                <h3 className="text-lg font-semibold text-indigo-800 mb-3">Objection</h3>
                <p className="text-sm">Object to processing based on legitimate interests.</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">How to Exercise Your Rights</h3>
              <p>To exercise any of these rights or if you have questions about this privacy notice, please contact us using the details provided on our website or email us directly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing Activities Section */}
      <div id="marketing" className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Marketing activities
          </h2>
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-6 border-l-4 border-violet-500">
              <p>We may use your personal information for marketing purposes to keep you informed about our services and opportunities that may interest you.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">What We Send</h3>
                <div className="space-y-3 text-base">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p>Job opportunities and career advice</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p>Industry insights and market updates</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p>Event invitations and networking opportunities</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p>Company news and service updates</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Your Control</h3>
                <div className="space-y-3 text-base">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p>Opt-out anytime via unsubscribe links</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p>Update your preferences online</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p>Contact us to change settings</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p>Choose specific communication types</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Profiling, Anonymous data & Third-party sites */}
      <div id="profiling" className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-blue-600 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Profiling, Anonymous data & Third-party sites
          </h2>
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            
            {/* Automated Decision-Making */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 border-l-4 border-indigo-500">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">Automated Decision-Making:</h3>
              <p><strong>Nash Squared</strong> does not utilise any form of automated profiling currently. All our recruitment activities involve human decision-making during the process. This may change in the future if we implement automated technologies or machine learning, but we will only do so where appropriate and in accordance with local laws and regulations. Any changes to this notice will be notified as set out below.</p>
            </div>

            {/* Profiling */}
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">Profiling:</h3>
              <p><strong>Nash Squared</strong> utilises psychometric testing providers to conduct tests for our clients. Candidates sign into the testing provider and carry out this test. Specialists within Nash Squared will review the results of the tests and conduct what may be described in the GDPR as profiling on the personal data. You have the right to object to profiling and can do this by refusing or withdrawing your consent to processing in the testing process at any time.</p>
            </div>

            {/* Anonymous data */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Anonymous data:</h3>
              <p>We collect anonymised details about visitors to our website for the purposes of aggregate statistics or reporting purposes. However, no single individual will be identifiable from the anonymised details we collect for these purposes.</p>
            </div>

            {/* Third party sites */}
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Third party sites:</h3>
              <p>This website contains links to other websites operated by third parties. Please note that this privacy notice applies only to the personal information that we collect through the Site or the Services, and we cannot be responsible for personal information that third parties may collect, store and use through their website. You should always read the privacy policy of each website you visit carefully.</p>
            </div>

          </div>
        </div>
      </div>

      {/* Changes to Privacy Notice */}
      <div id="changes" className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-rose-500 to-pink-600 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Changes to this Privacy Notice
          </h2>
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-6 border-l-4 border-rose-500">
              <p className="text-lg font-semibold text-rose-800 mb-4">This privacy notice was updated in January 2020.</p>
              <p>We will publish changes to this privacy notice from time to time. If significant changes are made to our processing activities, we will take reasonable measures to notify data subjects accordingly.</p>
            </div>

          </div>
        </div>
      </div>

      {/* Appendix */}
      <div id="appendix" className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Appendix
          </h2>
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            
            {/* Appendix 1 */}
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">Appendix 1</h3>
              <p className="font-semibold mb-6">We may collect personal data when:</p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>you access and browse the Site (including when you submit personal information to us through data entry fields on the Site);</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>or you respond to an advert posted by us whether via a job board, LinkedIn or other social networking site;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>or we download details uploaded by you onto a job board, LinkedIn or other social networking site in relation to a vacancy we are seeking to fill for one of our clients;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>or we download details uploaded by you onto a job board, LinkedIn or other social networking site in connection with our internal market research;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>or you contact us by phone, email or otherwise;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>or we provide Services to you or to an actual or a potential hirer of your services;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>or we contact you with a view to providing Services to you;</p>
                </div>
              </div>
              
              <div className="mt-6 bg-white rounded-xl p-6 border border-emerald-200">
                <p className="mb-4">or we provide on-boarding services to a hirer of your services, we may collect the following information from or about you:</p>
                <p className="text-sm leading-relaxed">your name; your postal address; your phone and e-mail details; your bank details a copy of your passport details including your passport photograph; your current and previous employment/work details, including job title and employer; recruitment-specific details such as any professional certifications, education and qualifications, skills, career history, salary range, right to work status, citizenship, referee details and any other information relevant or required by law to enable us to provide the Services;</p>
              </div>
              
              <div className="mt-4 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>any other information which you include in your CV or a completed application form;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>any information which has been published or made available on a social media profile or job board (whether by you or a third party), or in any news media;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>details of your umbrella company or personal service company;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>the contract for services we hold with your umbrella company or personal service company relating to the work you do or will do for our client, including timesheet data and charge rates relating to the work you perform under that contract;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>details of your referees and emergency contacts references from third parties such as previous employers and nominated referees;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>the results of pre-employment screening or vetting checks which we are asked or required to undertake in relation to you (including the results of any Disclosure and Barring checks and any information you provide relating to current and/or spent criminal convictions carried out on behalf of the hirer during the on boarding process);</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>any e mail communications, including attachments, which you send to us the results of right to work checks.</p>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-200">
                <p className="text-base">You can update your CV or personal data at any time by forwarding a copy to <a href="mailto:info@nashsquared.com" className="text-blue-600 hover:text-blue-800 font-medium">info@nashsquared.com</a></p>
              </div>
            </div>

            {/* Appendix 2 */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Appendix 2</h3>
              <p className="font-semibold mb-6">We collect, store and use information that we obtain in relation to you for our legitimate interests:</p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>so that we can contact you (via email, SMS or phone) about opportunities and assignments that we believe you may be interested in;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>to help us to provide suitable candidates and consultants for our clients who engage us to assist them fulfil their recruitment and resourcing requirements;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>to provide a channel through which you may submit your CV for general applications, to apply for specific jobs or to subscribe to our job alerts;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>to match your details with vacancies, to assist us in finding a position that is most suitable for you and to send your information to clients for potential jobs.</p>
                </div>
              </div>

              <div className="mt-6 bg-white rounded-xl p-6 border border-blue-200">
                <p className="font-medium text-blue-800 mb-3">Please note that we will always obtain verbal or written consent before presenting your personal details to a client.</p>
                
                <div className="space-y-4 mt-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>to enter into contracts which are necessary for your service to be supplied or made available to a hirer;</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>to provide recruitment-related support; to carry out market research for our internal use;</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>to develop an industry-relevant database of candidates and clients to help meet our clients' resourcing requirements and connect candidates with work opportunities; for internal record keeping purposes;</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>to carry out services that we, you or our client have requested including work-related references, qualifications and criminal references checking services, verification of the details you have provided from third party sources, psychometric evaluations or skills tests.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="mb-4">This storage and use of your personal information allows you to be contacted about roles which may be of interest to you, now or in the future, and we do not believe that this storage and use will unduly prejudice your rights or freedoms.</p>
                
                <p className="mb-4">We will store and use your personal information in order to comply with relevant legal obligations to which Nash Squared is subject, including carrying out:</p>
                
                <div className="space-y-3 mt-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>verification of your identity to comply with The Conduct of Employment Agencies and Employment Businesses Regulations 2003;</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>right to work checks to comply with relevant immigration legislation; In other, relatively limited circumstances, we will carry out further relevant background checks as may be requested by our client.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <p className="mb-4">In these circumstances we will be acting on behalf of our client and the handling of your personal data will be governed by the client's privacy policy.</p>
                
                <p className="mb-4">Where you are successful in securing temporary assignment work with one of our clients we will store and use your personal information for the purposes of completing and administering contracts with your chosen personal service company or umbrella company and for processing payment to such company in respect of services you have performed for our client.</p>
                
                <p className="mb-4">Such processing will be for our legitimate interests so that we can provide Services to you and our client.</p>
                
                <p className="mb-4">We do not believe that this storage and use of your personal information will unduly prejudice your rights or freedoms. Such processing will also be necessary for the performance of a contract to which you are party (i.e. your contract with the umbrella company or your personal service company relating to the supply of assignment services) and/or in order to take steps prior to you entering into such contract.</p>
                
                <p>If our client requires us to collect, store and use your health data and/or any Disclosure and Barring Checks we will, on our client's behalf, seek your consent to processing such data.</p>
              </div>

              <div className="mt-4 bg-red-50 rounded-xl p-4 border border-red-200">
                <p className="text-red-700">You can withdraw your consent at any stage, but this may prevent us from being able to deliver our recruitment services to you.</p>
              </div>
            </div>

            {/* Appendix 3 */}
  <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
              <h3 className="text-2xl font-bold text-purple-800 mb-6">Appendix 3</h3>
              <p className="font-semibold mb-4">The relevant circumstances are:</p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>detecting and preventing fraud;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>keeping our Site, apps, products and IT systems secure;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>ensuring that our own processes, procedures and systems are as efficient as possible; analysing and enhancing the information that we collect;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>determining the effectiveness of our promotional campaigns and advertising; and contacting you with products and services which we think may interest you.</p>
                </div>
              </div>

              <div className="mt-6 bg-white rounded-xl p-6 border border-purple-200">
                <p className="mb-4">In some, relatively limited, circumstances we need to handle your personal information in a certain way to be able to comply with our legal obligations.</p>
                
                <p className="font-medium mb-4">For example, if we:</p>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>are requested to disclose your personal information to regulatory bodies;</p>
                </div>
              </div>
            </div>
                {/* <!-- Appendix 4A --> */}
<div className="bg-teal-50 rounded-2xl p-6 border border-teal-200 mt-8">
  <h3 className="text-2xl font-bold text-teal-800 mb-6">Appendix 4A</h3>
  
  <div className="space-y-6">
    <p>Cookies (small text files that store information on your hard drive) may be used in the processing of your personal data.</p>
    
    <p>A copy of this text file is sent to your computer and/or device whenever it communicates with our server. Cookies help us to understand which sections of our websites are frequently visited. With this information we can adapt our website to suit your demands and provide you with a more customised and personalised user experience.</p>
    
    <div className="bg-white rounded-xl p-6 border border-teal-200">
      <p className="mb-4">We may collect the following information during your visit to our website and/or the fully qualified domain name from which you accessed our site, or alternatively, your IP address:</p>
      <p>the date and time you access each page of our website the URL of any web page from which you accessed our site (the referrer) the web browser that you are using and the pages you accessed.</p>
    </div>
    
    <p>Some webpages may require you to provide a limited amount of personal information in order to enjoy certain services on a website (system login credentials, email addresses and contact information). This personal information will only be used for its intended purpose, i.e. to respond to your message or deliver the requested services.</p>
    
    <p>You may configure your browser to accept all cookies, reject all cookies, or notify you when a cookie is sent.</p>
  </div>
</div>

{/* <!-- Appendix 5 --> */}
<div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200 mt-8">
  <h3 className="text-2xl font-bold text-indigo-800 mb-6">Appendix 5</h3>
  
  <div className="space-y-6">
    <p className="font-semibold">You have the right to request that we:</p>
    
    <div className="space-y-4">
      <div className="flex items-start space-x-3">
        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
        <p>provide access to any personal information we hold about you;</p>
      </div>
      <div className="flex items-start space-x-3">
        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
        <p>update any of your personal information which is out of date or incorrect; delete any personal information which we are holding about you;</p>
      </div>
      <div className="flex items-start space-x-3">
        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
        <p>restrict the way that we process your personal information;</p>
      </div>
      <div className="flex items-start space-x-3">
        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
        <p>prevent the processing of your personal information for direct-marketing purposes;</p>
      </div>
      <div className="flex items-start space-x-3">
        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
        <p>provide your personal information to a third-party provider of services;</p>
      </div>
      <div className="flex items-start space-x-3">
        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
        <p>provide you with a copy of any personal information which we hold about you;</p>
      </div>
      <div className="flex items-start space-x-3">
        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
        <p>or consider any valid objections which you have to our use of your personal information: and/or Do not conduct profiling on your personal data, if you have consented to undergoing testing with our third-party providers, by refusing or withdrawing your consent at any time.</p>
      </div>
    </div>
    
    <div className="bg-white rounded-xl p-6 border border-indigo-200">
      <p className="mb-4">We will consider all such requests and provide our response within a reasonable period (and in any event within any time period required by applicable law).</p>
      
      <p className="mb-4">Please note, however, that certain personal information may be exempt from such requests in certain circumstances.</p>
      
      <p className="mb-4">If an exception applies, we will tell you this when responding to your request. We may request you provide us with information necessary to confirm your identity before responding to any request you make. If you have made a request for erasure of your personal data records, we will usually retain a copy of your given email address on a 'do not contact' list to comply with our obligations under the GDPR.</p>
      
      <p className="mb-4">For more information, please contact the Data Protection Officer.</p>
    </div>
    
    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
      <p>You may request to unsubscribe from job alerts and marketing material at any time. If you wish to contact us with respect to the above matters, please email us at <a href="mailto:DPO@nashsquared.com" className="text-blue-600 hover:text-blue-800 font-medium">DPO@nashsquared.com</a>.</p>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>

      </div>
      </div>
    </div>
    <Footer />
     </>
  );
}