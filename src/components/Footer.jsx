import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">AntiqueHub</h2>
          <p className="text-sm">Preserving History, One Auction at a Time</p>
        </div>
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 mt-4 md:mt-0">
          <Link to="/about" className="hover:text-white text-sm">
            About Us
          </Link>
          <Link to="/privacy" className="hover:text-white text-sm">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white text-sm">
            Terms of Service
          </Link></div>
        
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-white text-sm">
            Home
          </Link>
          <Link to="/auction/1" className="hover:text-white text-sm">
            Auctions
          </Link>
          <a href="/contact" className="hover:text-white text-sm">
            Contact
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          Facebook
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          Twitter
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          Instagram
        </a></div>
        <div className="flex justify-center mt-4 space-x-4">
            <h4> Designed and devloped by Rati Sapna</h4>
            </div>

      <div className="mt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} AntiqueHub. All rights reserved.
      </div>
      
    </footer>
  );
};

export default Footer;
