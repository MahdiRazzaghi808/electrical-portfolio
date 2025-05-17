import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border text-muted-foreground">
      <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 1. Brand / Description */}
          <div>
            <h2 className="text-xl font-bold text-primary mb-4">MyBrand</h2>
            <p className="text-sm">
              At MyBrand, we aim to deliver the best online experience, offering
              services designed to meet your needs with ease and professionalism.
            </p>
          </div>

          {/* 2. Navigation Links */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
              <li><Link href="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          {/* 3. Policies */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>

          {/* 4. Social Media */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-3">Follow Us</h3>
            <div className="flex gap-4 mt-2">
              <Link href="https://facebook.com" target="_blank" className="hover:text-blue-600">
                <Facebook size={20} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400">
                <Twitter size={20} />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:text-pink-500">
                <Instagram size={20} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-700">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-border pt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
