import React from 'react';

const PhotoGallery = () => {
  const photos = [
    {
      url: "src/components/pic.png",
      alt: "Professional headshot"
    },
    {
      url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Working on laptop"
    },
    {
      url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Team collaboration"
    },
    {
      url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Code review session"
    },
    {
      url: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Development workspace"
    },
    {
      url: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Creative process"
    }
  ];

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Behind the Scenes
        </h2>
        
        {/* Scrolling Photo Gallery */}
        <div className="relative">
          <div className="flex animate-scroll space-x-6">
            {[...photos, ...photos].map((photo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-60 rounded-2xl overflow-hidden border-2 border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;