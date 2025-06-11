import { Cpu, Zap, Lightbulb, LucideAlarmClockPlus, Siren } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Cpu size={40} className="text-primary" />,
    title: "Consumer Unit Upgrade",
    description:
      "Should your home or business need to change or improve your consumer unit we can help",
  },
  {
    icon: <LucideAlarmClockPlus  size={40} className="text-primary" />,
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
];

const ServicesSection = () => {
  return (
    <section
      className="container mx-auto px-6 py-12 bg-foreground rounded-md shadow-md my-12 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background Blobs */}
      <>
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#9c1923] rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#c22530] rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </>
      <div className="text-center mb-12">
        <motion.h2
          id="services-heading"
          className="text-3xl font-bold mb-2 text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Services
        </motion.h2>
        <motion.p
          className="text-gray-300"
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
    </section>
  );
};

export default ServicesSection;
