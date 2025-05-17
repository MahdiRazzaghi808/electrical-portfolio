"use client";

import Header from "@/components/molecules/header";
import AboutSection from "@/components/organism/about-section";
import PricingPlans from "@/components/organism/PricingPlans";
import ServicesSection from "@/components/organism/ServicesSection";

export default function Home() {


  return (
    <div >
      <Header />
      <AboutSection />
      <ServicesSection />
      <PricingPlans />
    </div>
  );
}
