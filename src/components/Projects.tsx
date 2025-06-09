import React from 'react';
import { ExternalLink, Github, Globe, Database, FileCheck, Clapperboard, Scissors } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and secure payments.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://ajkart.vercel.app/',
      githubUrl: 'https://github.com/Ajay987654/E-commerce_website.git',
      icon: <Globe size={20} />
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      liveUrl: 'https://taskaj.vercel.app/',
      githubUrl: 'https://github.com/Ajay987654/task_app.git',
      icon: <Database size={20} />
    },
    {
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics dashboard for businesses to track KPIs, visualize data, and generate reports with real-time updates.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
      liveUrl: 'https://drive.google.com/file/d/1dOQUNN5krvinygD32xa5qcUok0c3HdqI/view?usp=sharing',
      githubUrl: 'https://github.com/Ajay987654/Weather_impact_on_Agri_Analysis.git',
      icon: <Database size={20} />
    },
    {
      title: 'AI-Powered Chat Bot',
      description: 'An intelligent chatbot with natural language processing capabilities for customer support and automated assistance.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'TensorFlow', 'Flask', 'OpenAI API'],
      liveUrl: 'https://chataj.vercel.app/',
      githubUrl: 'https://github.com/Ajay987654/stark-ai-spark.git',
      icon: <Database size={20} />
    },
    {
      title: 'P-Chart',
      description: 'An interactive data visualization tool for plotting various types of control charts, built with React and Chart.js. Ideal for quality control and statistical process monitoring.',
      image: 'https://th.bing.com/th/id/OIP.hz8KstQDBbfegIf5I-D8LQHaEw?w=1024&h=658&rs=1&pid=ImgDetMain',
      technologies: ['React', 'Chart.js', 'Tailwind CSS'],
      liveUrl: 'https://pchart.vercel.app/',
      githubUrl: 'https://github.com/Ajay987654/P-Chart-Calculator-with-React.js-and-javato-type-script.git',
      icon: <Globe size={20} />
    },
    {
      title: 'Face Recognition System',
      description: 'A real-time face recognition system using OpenCV, Flask, and face_recognition library.',
      image: 'https://images.pexels.com/photos/6749776/pexels-photo-6749776.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'OpenCV', 'Flask', 'face_recognition'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Ajay987654/Face-Recognition.git',
      icon: <Database size={20} />
    },
    {
      title: 'File Authentication & Extension System',
      description: 'A secure system to verify file integrity and manage document formats with hash-based authentication.',
      image: 'https://images.pexels.com/photos/6802040/pexels-photo-6802040.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Hashlib'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Ajay987654/File-authentication-and-document-extension.git',
      icon: <FileCheck size={20} />
    },
    {
      title: 'Movie Recommendation System',
      description: 'A content-based movie recommender using cosine similarity over metadata like genres and keywords.',
      image: 'https://images.pexels.com/photos/799131/pexels-photo-799131.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Pandas', 'Sklearn'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Ajay987654/Movie-Recommdation.git',
      icon: <Clapperboard size={20} />
    },
    {
      title: 'Tailor Booking Web App',
      description: 'A full-featured tailor service platform where users can book appointments, explore custom designs, and manage orders seamlessly.',
      image: 'https://images.pexels.com/photos/3993119/pexels-photo-3993119.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: 'https://ajtailor.vercel.app',
      githubUrl: 'https://github.com/Ajay987654/tailor-earnings-tracker.git', 
      icon: <Scissors size={20} />
    }
    
    
    
    
    
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-black rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 p-2 rounded-lg">
                      {project.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white text-black rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-200"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center px-4 py-2 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;