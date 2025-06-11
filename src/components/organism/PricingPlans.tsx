"use client";
import { BrickWall, Building, Check, Cpu, LucideAlarmClockPlus, ShieldCheck, Siren } from 'lucide-react';
import { Button } from '../atoms/button';
import { motion } from 'framer-motion';

const plans = [
  {
    title: 'Basic',
    price: 'Free',
    features: [
      '1 Website',
      'Basic Support',
      'Limited Features',
    ],
    buttonLabel: 'Get Started',
  },
  {
    title: 'Pro',
    price: '$19/mo',
    features: [
      '5 Websites',
      'Priority Support',
      'Advanced Features',
    ],
    buttonLabel: 'Choose Plan',
  },
  {
    title: 'Enterprise',
    price: '$49/mo',
    features: [
      'Unlimited Websites',
      '24/7 Support',
      'All Features Included',
    ],
    buttonLabel: 'Contact Sales',
  },
];


const services = [
  {
    icon: <Cpu size={40} className="text-primary" />,
    title: "Consumer Unit Upgrade",
    description:
      "Should your home or business need to change or improve your consumer unit we can help",
  },
  {
    icon: <LucideAlarmClockPlus size={40} className="text-primary" />,
    title: "24 Hour Electrical Call Out",
    description:
      "Need an urgent call out at any time off the day. Wf offer 24 hours a day coverage for any electrical issue",
  },
  {
    icon: <Siren size={40} className="text-primary" />,
    title: "Emergency Electrician",
    description:
      "Power cuts or Tripped Circuits? We can help with our out of hours emergency electrician",
  },

  {
    icon: <Building  size={40} className="text-primary" />,
    title: "Commercial Service",
    description:
      "Commercial electrical works are undertaken from Restaurants, Schools, Takeaways and many others",
  },
  {
    icon: <BrickWall size={40} className="text-primary" />,
    title: "New Builds",
    description:
      "We offer complete electrical wiring solution for all new build projects and extensions to existing properties.",
  },
  {
    icon: <ShieldCheck  size={40} className="text-primary" />,
    title: "Landlord Certificates",
    description:
      "We can help with electrical safety inspection for rented and commercial properties known as EICR.",
  },
];



const PricingPlans = () => {
  return (
    <section id="pricing" className="container mx-auto p-6 py-12 bg-foreground rounded-md shadow-md my-12 relative overflow-hidden">
      <>
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#9c1923] rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#c22530] rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </>

      <div className="container mx-auto px-4 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2  text-gray-100">Services</h2>
          <p className="text-gray-200">Choose a plan that fits your needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              role="article"
              className="bg-background text-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-200">
                {service.title}
              </h3>
              <p className="text-gray-500">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
