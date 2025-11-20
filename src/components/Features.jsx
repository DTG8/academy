import React from 'react'
import { FiUsers, FiTarget, FiVideo, FiTrendingUp, FiBook, FiLifeBuoy, FiMonitor } from 'react-icons/fi'

const Features = () => {
  const features = [
    {
      icon: <FiVideo className="w-6 h-6" />,
      title: 'Real-Time Learning',
      description: 'Live interactive sessions with expert instructors—not pre-recorded videos. Get instant feedback and personalized guidance.',
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'Personal Mentorship',
      description: '1-on-1 mentorship sessions to help you grow. Direct access to industry professionals throughout your journey.',
    },
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: 'Project-Based Learning',
      description: 'Build portfolio-worthy projects that showcase your skills with hands-on, real-world applications.',
    },
    {
      icon: <FiMonitor className="w-6 h-6" />,
      title: 'In-Person Option',
      description: 'Available on request at an additional cost. Get face-to-face learning for those who prefer classroom settings.',
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: 'Career Growth',
      description: 'From beginner to professional with structured career support. We help with interview preparation, skilling up, and job opening application assistance.',
    },
    {
      icon: <FiBook className="w-6 h-6" />,
      title: 'Latest Curriculum',
      description: 'Stay current with cutting-edge technologies and industry best practices. Curriculum updated regularly.',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose{' '}
            <span className="text-gradient">Tech Academy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to your success, providing the tools and support you need to excel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Feature Image */}
              <div className="w-full h-32 bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center overflow-hidden">
                {feature.title === 'Real-Time Learning' ? (
                  <img 
                    src="/images/realtime.png"
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : feature.title === 'Personal Mentorship' ? (
                  <img 
                    src="/images/mentorship.png"
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : feature.title === 'Project-Based Learning' ? (
                  <img 
                    src="/images/projects.png"
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : feature.title === 'In-Person Option' ? (
                  <img 
                    src="/images/inperson.png"
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : feature.title === 'Career Growth' ? (
                  <img 
                    src="/images/career.png"
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : feature.title === 'Latest Curriculum' ? (
                  <img 
                    src="/images/curriculum.png"
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : (
                  <img 
                    src={`https://via.placeholder.com/400x150/0ea5e9/FFFFFF?text=${feature.title.replace(/\s+/g, '+')}`}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                )}
                <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-primary-50 to-blue-50 text-primary-300 text-xs">
                  Feature Image
                </div>
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

