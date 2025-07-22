import React from 'react';
import Navbar from "@/components/newNavbar";
import Footer from "@/components/newFooter";
const ModernSlaveryStatement = () => {
  return (
    <>
     <Navbar />
    <div className="min-h-screen bg-gray-50">
      {/* Container with consistent left and right padding */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border  border-blue-100 rounded-lg">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text ">
              Modern Slavery Statement for Nash Squared
            </h1>

            {/* Optimized Hero Image */}
            <div className="w-full mb-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/modern-slave.jpg"
                alt="Blurred city lights reflecting on water at night"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
              {/* Introduction Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Nash Squared is committed to preventing modern slavery and human trafficking in all its
                    forms. Our offer means we are in a unique position where we have significant impact on
                    people's lives and careers, and the organisations and communities we work with. It's a
                    responsibility we take very seriously. We believe that everyone has the right to work freely
                    and without coercion, and we are committed to ensuring that our operations and supply
                    chains are free from any form of modern slavery.
                  </p>

                  <p>
                    Modern slavery is a crime and a violation of fundamental human rights. It takes various
                    forms, such as slavery, servitude, forced and compulsory labour and human trafficking, all
                    of which have in common the deprivation of a person's liberty by another in order to
                    exploit them for personal or commercial gain. We have a zero-tolerance approach to
                    modern slavery, and we are committed to acting ethically and with integrity in all our
                    business dealings and relationships and to implementing and enforcing effective systems
                    and controls to ensure modern slavery is not taking place anywhere in our own business
                    or in any of our supply chains.
                  </p>

                  <p className="font-medium">
                    This statement relates to actions and activities to 31 January 2025.
                  </p>
                </div>
              </div>

              {/* Organisational Structure Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Organisational Structure</h2>
                <div className="text-lg text-gray-700 leading-relaxed">
                  <p>
                    Nash Squared is the leading global provider of technology and talent solutions. Our
                    supply chains include a wide range of organisations including technology providers. We
                    understand that modern slavery can occur at any stage of the supply chain. We expect
                    the same high standards from all our contractors, suppliers and other business partners,
                    and as part of our contracting processes, we include specific prohibitions against the use
                    of forced, compulsory or trafficked labour, or anyone held in slavery or servitude, whether
                    adults or children, and we expect that our suppliers will hold their own suppliers to the
                    same high standards.
                  </p>
                </div>
              </div>

              {/* Supply Chain Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Supply Chain</h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    As an organisation we deal with a diverse portfolio of suppliers that support all aspects of
                    the group's operations. We expect our suppliers to adhere to our Supplier Code of
                    Conduct, which always outlines the minimum expectation of suppliers.
                  </p>

                  <p>
                    Nash Squared takes its responsibilities across Modern Slavery very seriously and will
                    continue to monitor suppliers closely and ensure compliance to the Supplier Code of
                    Conduct within its supply base. Violations of the Supplier Code of Conduct will be
                    pursued and dealt with according to their severity.
                  </p>

                  <p>
                    We actively pursue ways across our supply chain to identify any possible modern slavery
                    or human trafficking risks.
                  </p>
                </div>
              </div>

              {/* Policies and Procedures Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Policies and Procedures</h2>
                <div className="text-lg text-gray-700 leading-relaxed mb-6">
                  <p>
                    Nash Squared has a zero-tolerance approach to modern slavery, and we have
                    developed policies and procedures to ensure compliance with relevant legislation and
                    ethical standards. These include:
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <p className="text-lg text-gray-700">
                      A <span className="font-semibold">Whistleblowing policy</span> that shares our commitment to maintaining the highest
                      standards of openness, probity and accountability. This connects with our code of
                      conduct and other policies as listed.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <p className="text-lg text-gray-700">
                      A <span className="font-semibold">Code of Conduct</span> that outlines our expectations for ethical behaviour and
                      professional standards.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <p className="text-lg text-gray-700">
                      A <span className="font-semibold">Supplier Code of Conduct</span> that is integrated with modern slavery, human trafficking
                      to ensure a clean supply chain free of exploited labour.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-6">
                    <div>
                      <p className="text-lg text-gray-700 mb-2">
                        <span className="font-semibold">Due Diligence and Risk Assessment</span> – We conduct due diligence and risk
                        assessments to identify and mitigate any potential risks related to modern slavery in
                        our operations and supply chains. This includes:
                      </p>
                      <ul className="ml-6 space-y-2 text-gray-700">
                        <li>• Conducting risk assessments of our supply chains to identify high-risk suppliers and contractors.</li>
                        <li>• Regularly reviewing and updating our policies and procedures to ensure they remain effective and up to date.</li>
                        <li>• Engaging with suppliers and contractors to ensure they understand our expectations and requirements regarding modern slavery and ethical conduct.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <div>
                      <p className="text-lg text-gray-700 mb-2">
                        <span className="font-semibold">Training and Awareness:</span> We provide training and awareness-raising activities to
                        ensure that all employees, suppliers, and stakeholders understand the risks and
                        impacts of modern slavery and human trafficking. This includes:
                      </p>
                      <p className="text-gray-700 ml-4">
                        Raising awareness among our stakeholders and the wider community through public
                        reporting and communication.
                      </p>
                      <ul className="ml-6 mt-4 space-y-1 text-gray-700">
                        <li>• Anti-Bribery and Corruption</li>
                        <li>• HR Policies and Procedures</li>
                        <li>• Safeguarding</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reporting and Monitoring Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Reporting and Monitoring</h2>
                <div className="text-lg text-gray-700 leading-relaxed mb-4">
                  <p>We monitor and report on our progress in addressing modern slavery in our operations and supply chains. This includes:</p>
                </div>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 flex-shrink-0">•</span>
                    <span>Conducting regular audits and assessments of our supply chains to ensure compliance with our policies and procedures.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 flex-shrink-0">•</span>
                    <span>Monitoring and reviewing our performance and progress in addressing modern slavery.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 flex-shrink-0">•</span>
                    <span>Reporting on our progress in our annual sustainability and corporate responsibility reports.</span>
                  </li>
                </ul>
              </div>

              {/* Conclusion Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Nash Squared is committed to preventing modern slavery and human trafficking in all its
                  forms. We believe that by working together with our employees, suppliers, and
                  stakeholders, we can help create a world where modern slavery no longer exists.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Board of Directors:</h3>
                  <p className="text-gray-700 mb-4">
                    This statement was approved on April 2023 by our board of directors, who review and
                    update it annually.
                  </p>

                  <div className="space-y-2">
                    <p className="font-semibold text-gray-800">Director's name and job title:</p>
                    <p className="text-gray-700">Andrew Neal, Chief People Officer</p>

                    <p className="font-semibold text-gray-800 mt-4">Date:</p>
                    <p className="text-gray-700">January 2024</p>
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
};

export default ModernSlaveryStatement;