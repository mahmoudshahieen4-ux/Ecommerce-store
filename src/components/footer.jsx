import darkLogo from "../assets/dark-logo.png";
import payment from "../assets/payment_method.png";
import { Instagram, Twitter, Facebook, Github, Mail, Phone, MapPin, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Company Info Section */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img src={darkLogo} alt="Company Logo" className="h-12 w-auto object-contain hover:opacity-80 transition-opacity" />
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Your trusted destination for premium products. We deliver quality, style, and innovation right to your doorstep.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors group">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">123 Commerce Street, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group">
                <Phone className="h-5 w-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group">
                <Mail className="h-5 w-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">support@store.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/products' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
                { name: 'Wishlist', path: '/wishlist' },
                { name: 'Cart', path: '/cart' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Customer Service
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {[
                'Help Center',
                'Track Order',
                'Returns & Refunds',
                'Shipping Info',
                'Privacy Policy',
                'Terms & Conditions'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Subscribe to get special offers, free giveaways, and exclusive deals.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-primary hover:bg-dark-primary text-white font-medium rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/50"
              >
                Subscribe
                <Send className="h-4 w-4" />
              </button>
            </form>

            {/* Social Media Links */}
            <div className="pt-4">
              <p className="text-sm text-gray-400 mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, href: '#', label: 'Facebook' },
                  { Icon: Instagram, href: '#', label: 'Instagram' },
                  { Icon: Twitter, href: '#', label: 'Twitter' },
                  { Icon: Github, href: '#', label: 'Github' }
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="p-2.5 bg-gray-800 hover:bg-primary rounded-lg transition-all duration-400 ease-in-out transform hover:scale-110 hover:-translate-y-1 group"
                  >
                    <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Footer Bottom */}
      <div className="bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-primary font-semibold">Mahmoud Shahieen Store</span>. All rights reserved.
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm hidden sm:block">We Accept:</span>
              <img
                src={payment}
                alt="Payment Methods"
                className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
