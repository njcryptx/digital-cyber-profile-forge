
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Brain, 
  BookOpen, 
  Code, 
  Trophy, 
  Send,
  Shield
} from 'lucide-react';

interface NavigationItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const Navigation: React.FC<{ currentPath: string }> = ({ currentPath }) => {
  const navItems: NavigationItem[] = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Skills', path: '/skills', icon: <Brain size={20} /> },
    { name: 'Education', path: '/education', icon: <BookOpen size={20} /> },
    { name: 'Projects', path: '/projects', icon: <Code size={20} /> },
    { name: 'Achievements', path: '/achievements', icon: <Trophy size={20} /> },
    { name: 'Contact', path: '/contact', icon: <Send size={20} /> },
  ];

  return (
    <div className="fixed left-0 top-0 bottom-0 w-20 md:w-64 cyber-panel z-40 transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="mb-8 p-4 hidden md:block">
          <h1 className="font-futura text-xl font-bold flex items-center">
            <Shield className="text-cyber-purple mr-2" size={24} />
            <span className="text-cyber-purple">NJ</span>
            <span className="text-cyber-blue">CRYPTX</span>
          </h1>
        </div>
        
        <div className="p-2 md:p-4 flex-1 flex flex-col space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`menu-item flex items-center ${
                currentPath === item.path 
                  ? 'border-cyber-purple bg-cyber-dark/40 text-cyber-purple' 
                  : 'text-cyber-light'
              }`}
              onMouseEnter={() => window.playSound?.('hover')}
              onClick={() => window.playSound?.('click')}
            >
              <div className="md:mr-3 flex justify-center items-center w-full md:w-auto">
                {item.icon}
              </div>
              <span className="hidden md:inline">{item.name}</span>
              {currentPath === item.path && (
                <div className="absolute right-0 top-0 h-full w-1 bg-cyber-purple animate-pulse-glow"></div>
              )}
            </Link>
          ))}
        </div>
        
        <div className="p-4 text-xs text-cyber-light/50 hidden md:block">
          <p className="animate-text-flicker">RED TEAM v2.0.4</p>
          <p>{new Date().toLocaleTimeString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
