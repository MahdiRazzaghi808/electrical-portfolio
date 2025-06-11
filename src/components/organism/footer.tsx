import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-foreground text-gray-100 border-t border-[#9c1923]">
      <div className="container mx-auto py-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* 1. Brand */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">⚡ Electrical 24/7</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Powering your ideas — anytime, anywhere. Reliable electrical services with 24/7 support and excellence.
            </p>
          </div>

          {/* 2. Social Media */}
          <div>
            <h3 className="text-base font-semibold mb-3">Stay Connected</h3>
            <p className="text-sm text-gray-500 mb-4">Follow us for updates and more.</p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" className="bg-background hover:bg-primary hover:text-white p-2 rounded-full transition block">
                <Facebook size={18} />
              </a>
              <a href="#" target="_blank" className="bg-background hover:bg-primary hover:text-white p-2 rounded-full transition">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="transition-colors duration-300 scale-145"
                >
                  <path
                    d="M17.6 6.32A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.88 11.89L4 20l4.2-1.1a7.9 7.9 0 0 0 3.79 1 8 8 0 0 0 8-7.93 8 8 0 0 0-2.39-5.65M12 18.53a6.6 6.6 0 0 1-3.36-.92l-.24-.15-2.49.66.66-2.43-.16-.25a6.6 6.6 0 0 1 10.25-8.17 6.65 6.65 0 0 1 2 4.66 6.66 6.66 0 0 1-6.66 6.6m3.61-4.94c-.2-.1-1.17-.58-1.35-.64s-.32-.1-.45.1a9 9 0 0 1-.63.77c-.11.14-.23.15-.43 0a5.33 5.33 0 0 1-2.69-2.35c-.21-.35.2-.33.58-1.08a.38.38 0 0 0 0-.35c0-.1-.45-1.08-.61-1.47s-.32-.33-.45-.34h-.39a.7.7 0 0 0-.53.25A2.2 2.2 0 0 0 8 10.17a3.8 3.8 0 0 0 .81 2.05 8.9 8.9 0 0 0 3.39 3 3.85 3.85 0 0 0 2.38.5 2 2 0 0 0 1.33-.94 1.6 1.6 0 0 0 .12-.94c-.09-.1-.22-.15-.42-.25"
                  />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" className="bg-background hover:bg-primary hover:text-white p-2 rounded-full transition">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" className="bg-background hover:bg-primary hover:text-white p-2 rounded-full transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* 3. Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-primary transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition">Services</Link></li>
              <li><Link href="/booking" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>

          {/* 4. Legal */}
          <div>
            <h3 className="text-base font-semibold mb-3">Trusted by</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li className="h-16 flex justify-start items-center">
                <Image src="/images/google-review.png" alt="logo" width={500} height={500} className="w-20" />
              </li>
              <li className="h-16 flex justify-start items-center">
                <Image src="/images/electricalcompperson1.png" alt="logo" width={500} height={500} className="w-20" />
              </li>
              <li className="h-16 flex justify-start items-center">
                <Image src="/images/nic-eic-logo.png" alt="logo" width={500} height={500} className="w-20" />
              </li>
              <li className="h-16 flex justify-start items-center">
                <Image src="/images/checkatrade.png" alt="logo" width={500} height={500} className="w-20" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-foreground text-center text-xs text-gray-200 py-6 border-t border-gray-500">
        &copy; 2025 Electrical 24/7. Built with ⚡ by an engineer who never sleeps.
      </div>
    </footer >
  );
}
