'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: '',
    description: 'At Local Electrician24-7, we’re not just electricians — we’re your 24/7 partners in power, protection, and peace of mind.',
  },
  {
    title: '',
    description: 'Here’s what sets us apart across Greater Manchester:'
  },
  {
    title: '',
    description: '24/7 Emergency Response No matter the hour, we’re ready to respond — typically within 30 to 60 minutes.',
  },
  {
    title: '',
    description: 'NICEIC-Certified Professionals All work is done to BS 7671 standards, with EIC/EICR certificates provided for safety and legal compliance.',
  },

  {
    title: '',
    description: `Transparent, Honest Pricing
No call-out fees. No hidden charges. Just fair quotes and expert advice.
`,
  },
  {
    title: '',
    description: `Domestic & Commercial Expertise
From homes and offices to restaurants and retail spaces — we handle it all.

`,
  },
  {
    title: '',
    description: `Clean, Respectful & Reliable
We treat your property like our own — working neatly, communicating clearly, and delivering quality without compromise.

`,
  },
  {
    title: '',
    description: `Fully Insured & Locally Trusted
With over 15 years of experience in Manchester, we’re proud to be a trusted name in emergency and routine electrical services.

`,
  },
  {
    title: '',
    description: `📍 Based in Manchester — Proudly Serving the Local Community

`,
  },
  {
    title: '',
    description: `Let Local Electrician24-7 be your first call when the lights go out.
Get the power back — safely, professionally, and now.
`,
  },
];

export default function WhyUsPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-gray-200 bg-foreground rounded-lg shadow-xl my-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Us?
      </motion.h1>

      <motion.p
        className="text-center text-gray-400 max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        We are not just a team — we are your partners in innovation, performance, and growth.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-background p-6 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <div className="flex-col lg:flex-row flex items-center justify-center gap-3 mb-3 h-44 md:h-24">
              <CheckCircle className="text-green-500  w-8 h-8 basis-[20%] lg:basis-[%3]" />
              {/* <h2 className="text-xl font-semibold">{item.title}</h2> */}
              <p className="text-gray-400 basis-[80%] lg:basis-[97%]">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
