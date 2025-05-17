// components/AboutSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white text-center lg:text-left">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
        {/* Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/about.jpg"
            alt="Bentos Walker"
            width={400}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6">
          <h4 className="text-xl text-gray-600">I'm Web / Product Designer</h4>
          <h2 className="text-4xl font-bold text-black">Bentos Walker</h2>
          <p className="text-gray-700 leading-relaxed">
            I'm creative independent web designer based in New York, USA. I’ve worked with startups and established companies alike to create beautiful, functional products.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <Link href="#" className="text-gray-500 hover:text-blue-600">
              <FaFacebookF />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-black">
              <FaXTwitter />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-700">
              <FaLinkedinIn />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-800">
              <FaGithub />
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            <Link
              href="/assets/docs/cv.pdf"
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
              download
            >
              Download CV
            </Link>
            <Link
              href="/about"
              className="border border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
