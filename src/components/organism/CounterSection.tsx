'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const counters = [
  { label: 'Completed Projects', value: 120 },
  { label: 'Satisfied Clients', value: 95 },
  { label: 'Years of Experience', value: 15 },
  { label: 'Certified Engineers', value: 8 },
];

export default function CounterSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/banner2.jpg')" }}
      aria-labelledby="electrical-heading"
      ref={ref}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 py-24 container mx-auto px-4 text-center">
        <motion.h2
          id="electrical-heading"
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Empowering Your World with Engineering Excellence
        </motion.h2>

        <motion.p
          className="text-lg text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          We provide innovative and reliable electrical engineering solutions — from power systems to smart automation — tailored to meet modern needs.
        </motion.p>

        {/* Counter Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {counters.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="text-4xl font-bold text-primary">
                {inView ? <CountUp end={item.value} duration={2.5} /> : 0}
              </div>
              <p className="mt-2 text-sm text-gray-200">{item.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/booking"
            className="inline-block bg-primary text-[#010101] font-medium px-8 py-4 rounded-full hover:bg-primary/90 transition"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
