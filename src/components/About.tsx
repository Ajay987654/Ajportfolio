import React from 'react';
import { User, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-black p-8 rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <User className="text-white mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">Professional</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate full-stack developer and Data Science with beginner years of experience 
                  building web applications. I love turning complex problems into 
                  simple, beautiful designs.
                </p>
              </div>

              <div className="bg-black p-8 rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <MapPin className="text-white mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">Location</h3>
                </div>
                <p className="text-gray-300">
                  Based in Coimbatore. Open to remote opportunities worldwide.
                </p>
              </div>

              <div className="bg-black p-8 rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <Calendar className="text-white mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">Experience</h3>
                </div>
                <p className="text-gray-300">
                  As a Beginner, specializing in React, Node.js, and modern web technologies.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl text-black">
                <h3 className="text-2xl font-bold mb-4">My Philosophy</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I believe in writing clean, maintainable code and creating 
                  user experiences that are both beautiful and functional.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Every project is an opportunity to learn something new and 
                  push the boundaries of what's possible on the web.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black p-6 rounded-xl border border-white/10 text-center">
                  <div className="text-3xl font-bold text-white mb-2">20+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="bg-black p-6 rounded-xl border border-white/10 text-center">
                  <div className="text-3xl font-bold text-white mb-2">Beginner</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;