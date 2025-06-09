import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Ajay</h3>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Developer passionate about creating beautiful, 
                functional web experiences that make a difference. Data Science enthusiast with a knack for problem-solving and innovation.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                >
                  Home
                </button>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                >
                  Projects
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                >
                  Contact
                </button>
              </nav>
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Ajay987654"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black border border-white/20 rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ajay162006/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black border border-white/20 rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:ajay527946494@gmail.com"
                  className="p-3 bg-black border border-white/20 rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Ajay. All rights reserved.
              </p>
              <div className="flex items-center text-gray-400 text-sm">
                <span>Made with</span>
                <Heart size={16} className="mx-2 text-white" />
                <span>and lots of coffee</span>
              </div>
            </div>
          </div>
          
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-all duration-200 transform hover:scale-110 border border-white/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;