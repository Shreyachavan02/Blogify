import React from "react";
import { Mail, MapPin, Copyright, Instagram, Twitter, Linkedin, Github } from "lucide-react"; // npm install lucide-react

const Footer = () => {
  return (
    <footer className="bg-sky-900 text-gray-200 shadow-inner w-full fixed bottom-0 left-0 z-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-3">
        
        
        <h2 className="text-lg font-bold tracking-wide text-white hover:text-sky-300 transition">
          Blogify
        </h2>

  
        <div className="flex items-center space-x-6 mt-2 md:mt-0">
          <a
            href="mailto:contact@blogify.com"
            className="flex items-center space-x-2 hover:text-sky-300 transition"
          >
            <Mail size={18} />
            <span>contact@blogify.com</span>
          </a>

          <div className="flex items-center space-x-2 hover:text-sky-300 transition">
            <MapPin size={18} />
            <span>Pune, India</span>
          </div>
        </div>

       
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-300 transition"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-300 transition"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-300 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-300 transition"
          >
            <Github size={20} />
          </a>
        </div>
      </div>

    
      <div className="text-center text-gray-400 text-sm border-t border-sky-800 py-1">
        <div className="flex justify-center items-center space-x-1">
          <Copyright size={14} />
          <p>{new Date().getFullYear()} Blogify. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
