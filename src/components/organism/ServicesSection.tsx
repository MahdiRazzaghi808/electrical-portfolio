import { Cpu, Zap, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Cpu size={40} className="text-primary" />,
    title: "Circuit Design",
    description:
      "Custom analog and digital circuit design for a variety of applications, from prototyping to production.",
  },
  {
    icon: <Zap size={40} className="text-primary" />,
    title: "Automation & Control",
    description:
      "Development of automation systems, PLC programming, and industrial control solutions for efficient operations.",
  },
  {
    icon: <Lightbulb size={40} className="text-primary" />,
    title: "Energy Solutions",
    description:
      "Innovative energy management, renewable integration, and power optimization for sustainable projects.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="container mx-auto px-6 py-12 bg-white rounded-md shadow-md mb-12 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background Blobs */}
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#ffbd39] rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="text-center mb-12">
        <motion.h2
          id="services-heading"
          className="text-3xl font-bold mb-2 text-zinc-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Services
        </motion.h2>
        <motion.p
          className="text-zinc-800"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Here's what I can offer
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            role="article"
            className="bg-[#f3f3f3] text-zinc-900 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-zinc-800">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
