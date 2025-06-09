import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS','Angular'],
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'Python', 'MongoDB', 'JAVA', 'Flask'],
    },
    {
      icon: <Database size={32} />,
      title: 'Database & Cloud',
      skills: ['MySQL', 'MongoDB'],
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
    },
    {
      icon: <Globe size={32} />,
      title: 'Web Technologies',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'REST APIs', 'GraphQL'],
    },
    {
      icon: <Palette size={32} />,
      title: 'Design & Tools',
      skills: ['Figma', 'Adobe XD', 'Git', 'Vite'],
    },
    {
      icon: <Palette size={32} />,
      title: 'Data Science & Analytics',
      skills: ['Python', 'Pandas & NumPy', 'Matplotlib', "Data VIzualization", 'Machine Learning',"Power BI","Satistical Analysis"],
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 group border border-white/10"
              >
                <div className="inline-flex p-4 rounded-xl bg-white text-black mb-6 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-black border border-white/20 px-4 py-2 rounded-full text-sm text-white mr-2 mb-2 hover:bg-white hover:text-black transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;