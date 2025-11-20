import React from 'react'
import { FiCode, FiShield, FiCpu, FiServer, FiCloud } from 'react-icons/fi'

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Web Development',
      icon: <FiCode className="w-8 h-8" />,
      description: 'Master modern web technologies including React, Node.js, and full-stack development. Build real-world projects and deploy them to production through live, interactive sessions.',
      skills: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Next.js', 'AWS'],
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-50',
      accentColor: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'DevOps',
      icon: <FiServer className="w-8 h-8" />,
      description:
        'Learn Linux fundamentals, Git & GitHub workflows, CI/CD pipelines, infrastructure as code, monitoring, and automation. Become proficient in Docker, Kubernetes, and cloud platforms with hands-on mentorship.',
      skills: [
        'Linux',
        'Git & GitHub',
        'CI/CD',
        'Docker',
        'Kubernetes',
        'AWS/GCP',
        'Terraform',
        'Jenkins',
        'Ansible',
        'Monitoring & Observability',
      ],
      color: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-500',
      bgColor: 'bg-green-50',
      accentColor: 'bg-green-500',
    },
    {
      id: 3,
      title: 'Cloud Computing',
      icon: <FiCloud className="w-8 h-8" />,
      description:
        'Master Linux for servers, hybrid and multi-cloud architectures, cloud automation, migration strategies, and backup/disaster recovery. Learn AWS, Azure, and GCP through real-time sessions with cloud experts.',
      skills: [
        'Linux',
        'AWS',
        'Azure',
        'GCP',
        'Hybrid Cloud',
        'Cloud Architecture',
        'Serverless',
        'Automation',
        'Cloud Migration',
        'Backup & DR',
        'Cloud Security',
      ],
      color: 'from-cyan-500 to-blue-500',
      borderColor: 'border-cyan-500',
      bgColor: 'bg-cyan-50',
      accentColor: 'bg-cyan-500',
    },
    {
      id: 4,
      title: 'Cybersecurity',
      icon: <FiShield className="w-8 h-8" />,
      description:
        'Dive deep into Linux for security, ethical hacking, network security, penetration testing, and security analysis. Learn to protect systems and identify vulnerabilities with expert guidance.',
      skills: ['Linux', 'Ethical Hacking', 'Penetration Testing', 'Network Security', 'Cryptography', 'Security Analysis', 'Compliance'],
      color: 'from-red-500 to-pink-500',
      borderColor: 'border-red-500',
      bgColor: 'bg-red-50',
      accentColor: 'bg-red-500',
    },
    {
      id: 5,
      title: 'Applied AI & Generative AI',
      icon: <FiCpu className="w-8 h-8" />,
      description:
        'Stop studying theory and start building. Learn to integrate powerful AI models into real-world applications. Master prompt engineering, create custom chatbots with your own data, and build intelligent tools using APIs. Focus on practical development, not complex mathematics.',
      skills: [
        'Python',
        'OpenAI API & LLMs',
        'LangChain',
        'Hugging Face',
        'Prompt Engineering',
        'Streamlit',
        'AI-Assisted Software Development',
      ],
      color: 'from-purple-500 to-indigo-500',
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-50',
      accentColor: 'bg-purple-500',
    },
  ]

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Core{' '}
            <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time online learning and mentorship programs. Live interactive sessions—not recorded videos—designed to transform you into a tech professional
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`group relative bg-white rounded-2xl overflow-hidden border-2 ${course.borderColor} hover:shadow-2xl transition-all duration-300 card-hover flex flex-col h-full`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Color Accent Bar */}
              <div className={`h-2 ${course.accentColor}`}></div>
              
              {/* Course Image */}
              <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                {course.title === 'Web Development' ? (
                  <img 
                    src="/images/webdev.webp"
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : course.title === 'DevOps' ? (
                  <img 
                    src="/images/devops.webp"
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : course.title === 'Cloud Computing' ? (
                  <img 
                    src="/images/cloudcomp.webp"
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : course.title === 'Cybersecurity' ? (
                  <img 
                    src="/images/cybersec.webp"
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : course.title === 'Applied AI & Generative AI' ? (
                  <img 
                    src="/images/generativeai.webp"
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : (
                  <img 
                    src={`https://via.placeholder.com/400x200/${course.accentColor.replace('bg-', '').replace('-500', '')}/FFFFFF?text=${course.title.replace(' ', '+')}`}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                )}
                <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-400">
                  <span className="text-sm">Course Image Placeholder</span>
                </div>
              </div>

              <div className={`flex-1 p-8 ${course.bgColor}`}>
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${course.color} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {course.icon}
                </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Key Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

                {/* CTA */}
                <a
                  href="#pricing"
                  className={`inline-flex items-center font-semibold transition-colors duration-200 hover:opacity-80 ${
                    course.borderColor === 'border-blue-500' ? 'text-blue-600' :
                    course.borderColor === 'border-green-500' ? 'text-green-600' :
                    course.borderColor === 'border-cyan-500' ? 'text-cyan-600' :
                    course.borderColor === 'border-red-500' ? 'text-red-600' :
                    'text-purple-600'
                  }`}
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses

