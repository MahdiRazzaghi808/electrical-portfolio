import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-zinc-900 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 1. Brand / Description */}
          <div>
            <h2 className="text-xl font-bold text-primary mb-4">MyBrand</h2>
            <p className="text-sm text-zinc-900">
              At MyBrand, we aim to deliver the best online experience, offering
              services designed to meet your needs with ease and professionalism.
            </p>
          </div>

          {/* 2. Navigation Links */}
          <div>
            <h3 className="text-base font-semibold text-zinc-900 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-zinc-900 hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="text-zinc-900 hover:text-primary">About Us</Link></li>
              <li><Link href="/services" className="text-zinc-900 hover:text-primary">Services</Link></li>
              <li><Link href="/contact" className="text-zinc-900 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* 3. Policies */}
          <div>
            <h3 className="text-base font-semibold text-zinc-900  mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="text-zinc-900 hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-zinc-900 hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/faq" className="text-zinc-900 hover:text-primary">FAQ</Link></li>
            </ul>
          </div>

          {/* 4. Social Media */}
          <div>
            <h3 className="text-base font-semibold text-zinc-900  mb-3">Follow Us</h3>
            <div className="flex gap-4 mt-2">
              <Link href="https://facebook.com" target="_blank" className="text-zinc-900 hover:text-primary">
                <Facebook size={20} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-zinc-900 hover:text-primary">
                <Twitter size={20} />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-zinc-900 hover:text-primary">
                <Instagram size={20} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-zinc-900 hover:text-primary">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>


      </div>
      <div className=" border-t border-gray-700  text-center text-xs text-zinc-900 py-6">
        &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
}
