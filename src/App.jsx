import './App.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Welcome from './components/Welcome'
import About from './components/About';
import { useState } from 'react';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <BrowserRouter>
    <nav className="bg-gray-900 shadow-lg border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center justify-center space-x-8 py-4">
          <li>
            <Link 
              to="/" 
              className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-800"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-800"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/education" 
              className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-800"
            >
              Education
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-800"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-800"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          
          {/* Mobile Header with Hamburger */}
          <div className="flex items-center justify-between py-4">
            <div className="text-white font-semibold text-lg">Portfolio</div>
            
            {/* Hamburger Button */}
            <button 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <div className="space-y-1">
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="block text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 px-3 py-3 rounded-md hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 px-3 py-3 rounded-md hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/education" 
                  className="block text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 px-3 py-3 rounded-md hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className="block text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 px-3 py-3 rounded-md hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 px-3 py-3 rounded-md hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/education" element=""/>
        <Route path="/projects" element=""/>
        <Route path="/contact" element=""/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
