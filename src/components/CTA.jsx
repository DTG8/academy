import React from 'react'
import { FiArrowRight, FiMail, FiPhone } from 'react-icons/fi'

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-primary-700 relative overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://via.placeholder.com/1920x1080/0ea5e9/FFFFFF?text=Tech+Academy"
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Career?
        </h2>
        <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
          Join hundreds of students who are already building successful careers in tech. 
          Start your journey today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#pricing"
            className="group bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center"
          >
            View Pricing Plans
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="mailto:info@techacademy.com"
            className="bg-primary-500 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-primary-400 hover:bg-primary-400 transition-all duration-200 flex items-center"
          >
            <FiMail className="mr-2" />
            Get in Touch
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-primary-100">
          <div className="flex items-center">
            <FiPhone className="mr-2" />
            <span>Call us: (555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <FiMail className="mr-2" />
            <span>Email: info@techacademy.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

