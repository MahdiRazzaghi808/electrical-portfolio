import { motion } from "framer-motion";
import { Button } from "../atoms/button";

export default function Header() {
  return (
    <header
      className="bg-[url('/images/header.jpg')] bg-cover bg-center h-screen w-full text-white"
      role="banner"
    >
      <div className="w-full h-full bg-black/50">
        <div className="container py-24 flex flex-col gap-6 lg:max-w-2xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Electric Power,
            <br />
            Bright Ideas.
          </motion.h1>

          <motion.p
            className="text-md md:text-lg text-gray-200 lg:max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Delivering cutting-edge electrical engineering solutions from power systems to renewable energy, tailored to drive your projects forward with precision and reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button
              className="w-fit text-[#010101] p-6 rounded-full bg-primary hover:bg-primary/90"
              aria-label="Schedule a consultation with an expert"
            >
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
