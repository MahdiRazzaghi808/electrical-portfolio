"use client";

import Header from "@/components/molecules/header";
import AboutSection from "@/components/organism/about-section";
import CommentsSlider from "@/components/organism/CommentsSlider";
import CounterSection from "@/components/organism/CounterSection";
import ElectricalEngineeringSection from "@/components/organism/ElectricalEngineeringSection";
import ServicesSection from "@/components/organism/ServicesSection";

export default function Home() {


  return (
    <div >
      <Header />
      <AboutSection isMain />
      <CounterSection />
      <ServicesSection />
      <ElectricalEngineeringSection />
      <CommentsSlider />
    </div>
  );
}
