// components/Header.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    title: ["Emergency Electrical In", "Manchester"],
    description:
      "",
    image: "/images/header2.jpeg",
  },
  {
    title: ["Harnessing the Power Cuts?", ""],
    description:
      "",
    image: "/images/header1.jpg",
  },
  {
    title: ["24/7 Emergency", "Electrical Assistance"],
    description:
      "",
    image: "/images/header3.jpeg",
  },
];

export default function Header() {
  return (
    <header role="banner">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        allowTouchMove={false}
        simulateTouch={false}
        keyboard={{ enabled: false }}
        className="h-[50vh] lg:h-screen w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[50vh] lg:h-screen w-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50 flex items-center">
                <div className="container py-24 flex flex-col gap-6 lg:max-w-2xl text-white">
                  <motion.h1
                    className="text-4xl md:text-6xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {slide.title.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </motion.h1>

                  <motion.p
                    className="text-md md:text-lg text-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <Link
                      href="/booking"
                      className="w-fit text-[#010101] p-4 rounded-full bg-primary hover:bg-primary/90 transition"
                    >
                      Book Your Electrician Now
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}
