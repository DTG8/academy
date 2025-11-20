import React from 'react'
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    courses: [
      { name: 'Web Development', href: '#courses' },
      { name: 'DevOps', href: '#courses' },
      { name: 'Cybersecurity', href: '#courses' },
      { name: 'Applied AI & Generative AI', href: '#courses' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Success Stories', href: '#' },
      { name: 'Free Resources', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: <FiTwitter />, href: '#', label: 'Twitter' },
    { icon: <FiLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FiGithub />, href: '#', label: 'GitHub' },
    { icon: <FiMail />, href: 'mailto:info@techacademy.com', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Tech Academy</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Transforming careers through world-class tech education. 
              Empowering the next generation of developers, engineers, and tech professionals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold mb-4">Courses</h4>
            <ul className="space-y-2">
              {footerLinks.courses.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Tech Academy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

