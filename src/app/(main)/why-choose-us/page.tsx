'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: 'Expert & Passionate Team',
    description: 'We are a group of professionals with years of experience in engineering, software, and design, committed to delivering excellence.',
  },
  {
    title: 'Reliable Support',
    description: 'We provide continuous assistance to ensure your project runs smoothly — anytime, anywhere.',
  },
  {
    title: 'Tailored Solutions',
    description: 'Every client is unique. We deliver custom-built strategies and systems to match your exact needs.',
  },
  {
    title: 'Modern Technologies',
    description: 'We stay up-to-date with the latest technologies to keep your solutions future-proof and efficient.',
  },
];

export default function WhyUsPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-gray-800 bg-white rounded-lg shadow-xl my-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Us?
      </motion.h1>

      <motion.p
        className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        We are not just a team — we are your partners in innovation, performance, and growth.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="text-green-500 mt-1" size={24} />
              <h2 className="text-xl font-semibold">{item.title}</h2>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
