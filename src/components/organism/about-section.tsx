import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = ({ isMain }: { isMain?: boolean }) => {
  return (
    <section
      className="container mx-auto p-6 bg-white rounded-md shadow-md my-12 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {!isMain && (
        <>
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#ffbd39] rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
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
          <h4 className="text-xl text-gray-600">I'm an Electrical Engineer</h4>
          <h2
            id="about-heading"
            className="text-4xl font-bold text-black leading-tight"
          >
            Electrical Portfolio
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to my electrical engineering portfolio. Here you will find a
            showcase of my projects, skills, and experience in designing,
            building, and optimizing electrical systems. Explore my work in
            circuit design, automation, and innovative solutions for real-world
            challenges.
          </p>

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
            <Link href="#" aria-label="Twitter" className="text-gray-500 hover:text-primary">
              <Twitter />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-primary">
              <Linkedin />
            </Link>
            <Link href="#" aria-label="GitHub" className="text-gray-500 hover:text-primary">
              <Github />
            </Link>
          </motion.div>

          {/* Buttons */}
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
