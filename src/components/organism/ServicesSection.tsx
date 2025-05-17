// components/ServicesSection.tsx
import { Briefcase, Monitor, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Briefcase size={40} className="text-primary" />,
    title: 'Brand Identity Design',
    description: 'Create consistent and memorable branding across all platforms.',
  },
  {
    icon: <Monitor size={40} className="text-primary" />,
    title: 'Website Design',
    description: 'Beautiful and responsive websites tailored to your business goals.',
  },
  {
    icon: <Smartphone size={40} className="text-primary" />,
    title: 'Application Design',
    description: 'Intuitive and user-friendly app interfaces for mobile and web.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">Services</h2>
          <p className="text-gray-600">Here's what I can offer</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
