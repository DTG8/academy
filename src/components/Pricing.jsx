import React from 'react'
import { FiCheck, FiStar } from 'react-icons/fi'

const Pricing = () => {
  const features = [
    'Real-time live interactive sessions (not recorded)',
    'Hands-on projects and assignments',
    '1-on-1 personal mentorship',
    'Career guidance and support',
    'Certificate of completion',
    'Interview preparation sessions',
    'Resume & portfolio review',
    'In-person classes available (at added cost)',
  ]

  const plans = [
    {
      name: '3-Month Intensive',
      price: '₦',
      amount: '200,000',
      period: '/ 3 months',
      description: 'Fast-track your career with our intensive 3-month program',
      features: [
        '12 weeks of intensive training',
        '60+ hours of real-time live sessions',
        '4 hands-on projects',
        'Weekly 1-on-1 mentorship sessions',
        'Career support & interview preparation',
        'Job opening application assistance',
        'Skilling up support',
        'Certificate of completion',
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: '6-Month Comprehensive',
      price: '₦',
      amount: '400,000',
      period: '/ 6 months',
      description: 'Deep dive into your chosen field with our comprehensive 6-month program',
      features: [
        '24 weeks of in-depth training',
        '120+ hours of real-time live sessions',
        '8+ hands-on projects',
        'Bi-weekly 1-on-1 mentorship sessions',
        'Extended career support',
        'Portfolio development',
        'Comprehensive interview preparation',
        'Job opening application assistance',
        'Skilling up support',
        'Certificate of completion',
      ],
      popular: true,
      color: 'from-primary-500 to-primary-700',
      promo: '₦350,000 promo (limited time)',
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your{' '}
            <span className="text-gradient">Learning Path</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible programs designed to fit your schedule and career goals
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 shadow-xl border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-primary-500 scale-105 md:scale-110 z-10'
                  : 'border-gray-200 card-hover'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <FiStar className="mr-1" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-gray-600 text-lg">{plan.price}</span>
                  <span className="text-4xl font-bold text-gray-900 ml-1">
                    {plan.amount}
                  </span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                {plan.promo && (
                  <div className="mt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold">
                      Current promo: {plan.promo}
                    </span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <FiCheck className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block w-full text-center py-4 rounded-full font-semibold text-lg transition-all duration-200 ${
                  plan.popular
                    ? `bg-gradient-to-r ${plan.color} text-white shadow-lg hover:shadow-xl`
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Enroll Now
              </a>
            </div>
          ))}
        </div>

        {/* All Features */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What's Included in Every Program
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center">
                <FiCheck className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-gray-600 mt-8">
          * Pricing may vary based on the specific course. In-person classes available upon request at additional cost.
        </p>
      </div>
    </section>
  )
}

export default Pricing

