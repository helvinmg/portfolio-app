import { useState, useEffect } from 'react';

export default function About() {
  const [showContent, setShowContent] = useState(false);
  
  // Show content with animation when component loads
  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Page Header */}
        <div className={`mb-12 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">About Me</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get to know me better - my journey, skills, and passion for development
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          
          {/* Profile Image */}
          <div className={`transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="w-full max-w-sm mx-auto bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 text-3xl">👤</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className={`text-left transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="text-3xl font-bold text-white mb-6">Hello, I'm John Doe</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital solutions. My journey began with curiosity about how websites work, 
                and evolved into a deep love for crafting exceptional user experiences.
              </p>
              <p>
                I specialize in modern web technologies including React, Node.js, and Python. 
                My goal is to bridge the gap between design and functionality, creating 
                applications that are both visually appealing and highly functional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}