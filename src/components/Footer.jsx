
import React from 'react';
import logoText from '../assets/logo-text.png';

function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 bg-white py-10 font-sans text-gray-600">
      <div className="mx-auto max-w-7xl px-6 md:px-16">

        {/* Footer content */}
        <div className="mb-10 grid grid-cols-1 gap-8 text-center md:grid-cols-5 md:text-left">

          {/* Logo and description */}
          <div className="flex flex-col items-center md:col-span-2 md:items-start">
            <img
              src={logoText}
              alt="Dev Stack Logo"
              className="mb-3 h-7 object-contain"
            />

            <p className="mb-4 max-w-sm text-xs leading-5 text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex items-center gap-4 text-[10px] font-medium text-gray-700">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pink-600">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-pink-600">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pink-600">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product links */}
          <div className="hidden md:block">
            <h3 className="mb-3 text-[10px] font-bold uppercase text-gray-900">
              Product
            </h3>
            <ul className="space-y-2 text-[10px] text-gray-500">
              <li><a href="#home" className="hover:text-pink-600">Home</a></li>
              <li><a href="#technologies" className="hover:text-pink-600">Technologies</a></li>
              <li><a href="#projects" className="hover:text-pink-600">Projects</a></li>
            </ul>
          </div>

          {/* Company links */}
          <div className="hidden md:block">
            <h3 className="mb-3 text-[10px] font-bold uppercase text-gray-900">
              Company
            </h3>
            <ul className="space-y-2 text-[10px] text-gray-500">
              <li><a href="#about" className="hover:text-pink-600">About</a></li>
              <li><a href="#contact" className="hover:text-pink-600">Contact</a></li>
              <li><a href="mailto:careers@example.com" className="hover:text-pink-600">Careers</a></li>
            </ul>
          </div>

          {/* Legal links */}
          <div className="hidden md:block">
            <h3 className="mb-3 text-[10px] font-bold uppercase text-gray-900">
              Legal
            </h3>
            <ul className="space-y-2 text-[10px] text-gray-500">
              <li><a href="#privacy" className="hover:text-pink-600">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-pink-600">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Copyright and bottom links */}
        <div className="flex flex-col items-center justify-between space-y-3 border-t border-gray-100 pt-6 text-[10px] text-gray-400 sm:flex-row sm:space-y-0">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#privacy" className="hover:text-gray-600">Privacy</a>
            <a href="#terms" className="hover:text-gray-600">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
