// components/PricingPlans.tsx
import { Check } from 'lucide-react';
import { Button } from '../atoms/button';

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

const PricingPlans = () => {
  return (
    <section id="pricing" className="container mx-auto p-6 py-12 bg-white rounded-md shadow-md my-12 relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#ffbd39] rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-foreground">Service Plans</h2>
          <p className="text-gray-600">Choose a plan that fits your needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#f3f3f3]  rounded-2xl p-6 shadow hover:shadow-xl transition-all text-center"
            >
              <h3 className="text-xl font-semibold mb-2 text-foreground">{plan.title}</h3>
              <p className="text-3xl font-bold mb-4 text-primary">{plan.price}</p>
              <ul className="text-gray-600 mb-6 space-y-2 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="text-primary w-4 h-4" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full">{plan.buttonLabel}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
