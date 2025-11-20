import React from 'react'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50 -z-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <FiCheckCircle className="mr-2" />
              Transform Your Career Today
            </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Master the Tech Skills That{' '}
            <span className="text-gradient">Matter Most</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Real-time online learning and mentorship. Not recorded videos—<span className="font-semibold text-gray-800">actual live sessions</span> with expert instructors in{' '}
            <span className="font-semibold text-gray-800">
              DevOps, Cloud Computing, Cybersecurity, AI/ML, and Web Development
            </span>
            . Get industry-ready in 3 or 6 months.
          </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <a
                href="#pricing"
                className="group bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center"
              >
                Start Learning Now
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#courses"
                className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-300 hover:border-primary-600 hover:text-primary-600 transition-all duration-200"
              >
                Explore Courses
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto lg:mx-0 mt-16">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">5</div>
                <div className="text-gray-600">Core Courses</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">3-6</div>
                <div className="text-gray-600">Month Programs</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-600">Live Sessions</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">1-on-1</div>
                <div className="text-gray-600">Mentorship</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block animate-slide-up">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/hero.png"
                  alt="Tech Academy Learning"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-primary-100 to-blue-100 text-primary-600">
                  <span className="text-lg font-semibold">Hero Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

