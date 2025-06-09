import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-black pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mb-12">
          {/* Profile Photo */}
          <div className="relative mt-8">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src='public/pic.png'
                alt="Ajay"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-transparent to-white/10"></div>
          </div>
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Hey, It's me <span className="text-white">Ajay</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 text-gray-300 leading-relaxed">
              Full Stack Developer & Data Scince 
            </p>
            <p className="text-base md:text-lg lg:text-xl mb-8 text-gray-400 max-w-2xl">
            Welcome to my creative portfolio! Dedicated second-year student at KGISL Institute of Technology, pursuing a Bachelor's degree in Artificial Intelligence & Data Science. Passionate about front-end development with expertise in JavaScript and React.js, aiming to transition into full-stack development. Actively learning Data Science, Data Analytics, and database management using MYSQL. A proactive member of the IPS Tech Community, engaging in technical discussions, networking, and hands-on projects.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/Ajay987654"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200 border border-white/20"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ajay162006/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200 border border-white/20"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:ajay527946494@gmail.com"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200 border border-white/20"
          >
            <Mail size={24} />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce"
        >
          <ChevronDown size={32} className="text-white/80 hover:text-white transition-colors duration-200" />
        </button>
      </div>
    </section>
  );
};

export default Hero;