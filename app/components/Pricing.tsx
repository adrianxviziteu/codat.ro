'use client';
import { motion } from 'framer-motion';

export default function Pricing() {
  const tiers = [
    {
      name: 'Basic',
      price: '49',
      description: 'Perfect for small businesses and individual sellers',
      features: [
        '1,000 IMEI checks/month',
        'Basic device information',
        'Theft status check',
        'Email support',
        'Basic API access',
      ],
      cta: 'Start Verifying',
      mostPopular: false,
    },
    {
      name: 'Professional',
      price: '149',
      description: 'For businesses with higher verification needs',
      features: [
        '10,000 IMEI checks/month',
        'Full device specifications',
        'Carrier & lock status',
        'Priority support',
        'Advanced API access',
        'Bulk verification tools',
      ],
      cta: 'Start Pro Plan',
      mostPopular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with custom requirements',
      features: [
        'Unlimited IMEI checks',
        'Custom integration options',
        'Dedicated account manager',
        '24/7 priority support',
        'Custom API solutions',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      mostPopular: false,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div id="pricing" className="relative bg-white py-24 sm:py-32">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#017AFF]/5 to-white/0"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-[#017AFF]">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose your verification plan
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Simple, transparent pricing for businesses of all sizes
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-20"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative flex h-full flex-col rounded-3xl p-8 ${
                  tier.mostPopular
                    ? 'bg-[#017AFF]/5 ring-2 ring-[#017AFF]'
                    : 'bg-white ring-1 ring-gray-200'
                } shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                {tier.mostPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-[#017AFF] px-3 py-1 text-sm font-semibold text-white">
                      Most popular
                    </span>
                  </div>
                )}

                <div className="flex-1">
                  <h3 className="text-2xl font-bold leading-7 text-gray-900">{tier.name}</h3>
                  <div className="mt-6 flex items-baseline gap-x-2">
                    {tier.price === 'Custom' ? (
                      <span className="text-5xl font-bold tracking-tight text-gray-900">Custom</span>
                    ) : (
                      <>
                        <span className="text-5xl font-bold tracking-tight text-gray-900">${tier.price}</span>
                        <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                      </>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>

                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-[#017AFF]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-8 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    tier.mostPopular
                      ? 'bg-[#017AFF] text-white hover:bg-[#017AFF]/90 focus-visible:outline-[#017AFF]'
                      : 'bg-white text-[#017AFF] ring-1 ring-inset ring-[#017AFF]/20 hover:ring-[#017AFF]/30 focus-visible:outline-[#017AFF]'
                  } transition-all duration-300`}
                >
                  {tier.cta}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 