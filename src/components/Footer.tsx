import Link from "next/link";
import { Instagram, Facebook, Twitter, Linkedin, Youtube, Send, AtSign, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white-10 text-white-70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 flex items-center">
              <img src="/logo.png" alt="Hover Ads Logo" className="h-10 md:h-12 w-auto" />
            </div>
            <p className="mb-6 max-w-sm">
              The sky is the new billboard. Elevate your brand with mesmerising aerial displays and high-quality drone events.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/hover.ads" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com/hoverads" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://threads.net/@hover.ads" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <AtSign size={24} />
              </a>
              <a href="https://youtube.com/@hoverads" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Youtube size={24} />
              </a>
              <a href="https://x.com/hoveradsin" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://linkedin.com/company/hoverads" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://t.me/hoverads" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Send size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/#gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/#why-us" className="hover:text-white transition-colors">Why Us</Link></li>
              <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide uppercase">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-white-70 mt-0.5" />
                <a href="mailto:contact@hoverads.in" className="hover:text-white transition-colors">
                  contact@hoverads.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-white-70 mt-0.5" />
                <a href="tel:7981382598" className="hover:text-white transition-colors">
                  +91 7981382598
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Hover Ads. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
