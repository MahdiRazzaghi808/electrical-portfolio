import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const AboutSection = ({ isMain }: { isMain?: boolean }) => {
  return (
    <section className="container mx-auto p-6 bg-white rounded-md shadow-md my-12 relative overflow-hidden">
      {!isMain && <>
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#ffbd39] rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </>
      }
      <div className=" mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
        {/* Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/about.jpg"
            alt="Electrical Portfolio"
            width={400}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6">
          <h4 className="text-xl text-gray-600">I'm an Electrical Engineer</h4>
          <h2 className="text-4xl font-bold text-black">Electrical Portfolio</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to my electrical engineering portfolio. Here you will find a showcase of my projects, skills, and experience in designing, building, and optimizing electrical systems. Explore my work in circuit design, automation, and innovative solutions for real-world challenges.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <Link href="#" className="text-gray-500 hover:text-primary">
              <Facebook />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-primary">
              <Twitter />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-primary">
              <Linkedin />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-primary">
              <Github />
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            <Link
              href="/assets/docs/cv.pdf"
              className="text-[#010101] px-6 py-3 rounded-full bg-primary hover:bg-primary/90 "
              download
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
