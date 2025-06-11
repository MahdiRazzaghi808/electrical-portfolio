import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = ({ isMain }: { isMain?: boolean }) => {
  return (
    <section
      className="container mx-auto p-6 bg-foreground rounded-lg shadow-md my-12 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {!isMain && (
        <>
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#9c1923] rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#c22530] rounded-full blur-3xl opacity-20 animate-pulse"></div>
        </>

      )}

      <div className="mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
        {/* Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/about.jpg"
            alt="Electrical Engineer Portrait"
            width={400}
            height={400}
            className="rounded-xl object-cover"
            priority
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl text-gray-100">We Are Electrical Engineer</h4>
          <h2
            id="about-heading"
            className="text-4xl font-bold text-gray-500 leading-tight"
          >
            Electrical Portfolio
          </h2>

          <div className="flex flex-col gap-2">
            <p className="text-gray-300 leading-relaxed">
              Welcome to Local Electrician24-7 — where safety meets speed, and professionalism powers every response. As Manchester’s trusted emergency electricians, we’re available 24 hours a day, 7 days a week, delivering fast, certified, and dependable electrical support across Greater Manchester.

            </p>
            <p className="text-gray-300 leading-relaxed">
              We’re a team of NICEIC-certified professionals, fully qualified to issue EIC and EICR certificates in line with UK regulations. Whether you're facing a sudden power failure, planning a fuse box upgrade, or need a full property rewiring — we’re here to help, any time, any day.
            </p>

          </div>

          {/* Social Icons */}
          <motion.div
            className="flex gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="#" aria-label="Facebook" className="text-gray-500 hover:text-primary">
              <Facebook />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="text-gray-500 hover:text-primary flex items-center justify-center transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="transition-colors duration-300"
              >
                <path
                  d="M17.6 6.32A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.88 11.89L4 20l4.2-1.1a7.9 7.9 0 0 0 3.79 1 8 8 0 0 0 8-7.93 8 8 0 0 0-2.39-5.65M12 18.53a6.6 6.6 0 0 1-3.36-.92l-.24-.15-2.49.66.66-2.43-.16-.25a6.6 6.6 0 0 1 10.25-8.17 6.65 6.65 0 0 1 2 4.66 6.66 6.66 0 0 1-6.66 6.6m3.61-4.94c-.2-.1-1.17-.58-1.35-.64s-.32-.1-.45.1a9 9 0 0 1-.63.77c-.11.14-.23.15-.43 0a5.33 5.33 0 0 1-2.69-2.35c-.21-.35.2-.33.58-1.08a.38.38 0 0 0 0-.35c0-.1-.45-1.08-.61-1.47s-.32-.33-.45-.34h-.39a.7.7 0 0 0-.53.25A2.2 2.2 0 0 0 8 10.17a3.8 3.8 0 0 0 .81 2.05 8.9 8.9 0 0 0 3.39 3 3.85 3.85 0 0 0 2.38.5 2 2 0 0 0 1.33-.94 1.6 1.6 0 0 0 .12-.94c-.09-.1-.22-.15-.42-.25"
                />
              </svg>
            </Link>

            <Link href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-primary mr-2">
              <Linkedin />
            </Link>
            <Link href="#" aria-label="GitHub" className="text-gray-500 hover:text-primary">
              <Github />
            </Link>
          </motion.div>

          {/* Buttons
          <motion.div
            className="flex gap-4 flex-wrap justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              href="/assets/docs/cv.pdf"
              className="text-[#010101] px-6 py-3 rounded-full bg-primary hover:bg-primary/90"
              aria-label="Download CV"
              download
            >
              Download CV
            </Link>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
