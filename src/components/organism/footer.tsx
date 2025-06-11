import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-gray-100 border-t border-[#9c1923]">
      <div className="container mx-auto py-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* 1. Brand */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">⚡ Electrical 24/7</h2>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Powering your ideas — anytime, anywhere. Reliable electrical services with 24/7 support and excellence.
            </p>
          </div>

          {/* 2. Social Media */}
          <div>
            <h3 className="text-base font-semibold mb-3">Stay Connected</h3>
            <p className="text-sm text-zinc-600 mb-4">Follow us for updates and more.</p>
            <div className="flex gap-3">
              <Link href="https://facebook.com" target="_blank" className="bg-zinc-100 hover:bg-primary hover:text-white p-2 rounded-full transition">
                <Facebook size={18} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="bg-zinc-100 hover:bg-primary hover:text-white p-2 rounded-full transition">
                <Twitter size={18} />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="bg-zinc-100 hover:bg-primary hover:text-white p-2 rounded-full transition">
                <Instagram size={18} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="bg-zinc-100 hover:bg-primary hover:text-white p-2 rounded-full transition">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* 3. Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>

          {/* 4. Legal */}
          <div>
            <h3 className="text-base font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="hover:text-primary transition">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition">FAQ</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-foreground text-center text-xs text-gray-200 py-6 border-t border-gray-500">
        &copy; {new Date().getFullYear()} Electrical 24/7. Built with ⚡ by an engineer who never sleeps.
      </div>
    </footer>
  );
}
