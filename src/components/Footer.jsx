import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F5F5DC] border-t border-[#F5F5DC]/10">
      <div className="max-w-7l mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold tracking-tight text-[#F5F5DC]">
              EthnicEra
            </h3>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed max-w-[200px]">
              Bringing the timeless soul of Indian craftsmanship to the modern wardrobe.
            </p>
          </div>

          {/* Navigation - Shop */}
          <div className="text-center md:text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-6 text-[#F5F5DC]/80">
              Shop
            </h4>
            <ul className="text-sm text-gray-400 space-y-4">
              <li><Link to="/collection" className="hover:text-white transition-colors duration-200">Men</Link></li>
              <li><Link to="/collection" className="hover:text-white transition-colors duration-200">Women</Link></li>
              <li><Link to="/collection" className="hover:text-white transition-colors duration-200">Festive</Link></li>
            </ul>
          </div>

          {/* Navigation - Support */}
          <div className="text-center md:text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-6 text-[#F5F5DC]/80">
              Support
            </h4>
            <ul className="text-sm text-gray-400 space-y-4">
              <li><Link to="/about" className="hover:text-white transition-colors duration-200">FAQs</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors duration-200">Returns</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="text-center md:text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-6 text-[#F5F5DC]/80">
              Newsletter
            </h4>
            <div className="relative group">
              <input
                type="email"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-none text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter your email"
              />
              <button className="mt-3 w-full bg-primary text-[#1b160d] font-bold py-3 text-xs uppercase tracking-widest hover:bg-white transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-gray-500">
            © 2026 EthnicEra. Handcrafted in India.
          </p>
          <div className="flex space-x-6 text-gray-500">
            {/* You can add Social Icons here */}
            <span className="text-[10px] uppercase tracking-widest hover:text-white cursor-pointer">Instagram</span>
            <span className="text-[10px] uppercase tracking-widest hover:text-white cursor-pointer">Pinterest</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;