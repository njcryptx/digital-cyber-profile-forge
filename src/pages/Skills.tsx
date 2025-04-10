
import React, { useState, useEffect } from 'react';
import { Brain, Shield, Lock, Code, Server, Globe, Database, Wifi, Cpu } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
}

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState<Skill[]>([]);
  
  const skills: Skill[] = [
    // Security Skills
    { name: 'Penetration Testing', level: 92, category: 'Security', icon: <Lock size={18} /> },
    { name: 'Vulnerability Assessment', level: 88, category: 'Security', icon: <Shield size={18} /> },
    { name: 'Security Auditing', level: 85, category: 'Security', icon: <Shield size={18} /> },
    { name: 'Threat Modeling', level: 82, category: 'Security', icon: <Shield size={18} /> },
    { name: 'Incident Response', level: 78, category: 'Security', icon: <Shield size={18} /> },
    
    // Programming Skills
    { name: 'Python', level: 90, category: 'Programming', icon: <Code size={18} /> },
    { name: 'JavaScript', level: 85, category: 'Programming', icon: <Code size={18} /> },
    { name: 'C/C++', level: 78, category: 'Programming', icon: <Code size={18} /> },
    { name: 'Bash Scripting', level: 88, category: 'Programming', icon: <Code size={18} /> },
    { name: 'PowerShell', level: 80, category: 'Programming', icon: <Code size={18} /> },
    
    // Network Skills
    { name: 'Network Analysis', level: 94, category: 'Network', icon: <Wifi size={18} /> },
    { name: 'Packet Analysis', level: 89, category: 'Network', icon: <Wifi size={18} /> },
    { name: 'Firewall Configuration', level: 86, category: 'Network', icon: <Wifi size={18} /> },
    { name: 'VPN Technologies', level: 82, category: 'Network', icon: <Globe size={18} /> },
    
    // System Skills
    { name: 'Linux Administration', level: 90, category: 'Systems', icon: <Server size={18} /> },
    { name: 'Windows Security', level: 84, category: 'Systems', icon: <Server size={18} /> },
    { name: 'Cloud Security', level: 86, category: 'Systems', icon: <Globe size={18} /> },
    { name: 'Database Security', level: 81, category: 'Systems', icon: <Database size={18} /> },
    
    // Specialized Skills
    { name: 'Malware Analysis', level: 88, category: 'Specialized', icon: <Cpu size={18} /> },
    { name: 'Reverse Engineering', level: 85, category: 'Specialized', icon: <Cpu size={18} /> },
    { name: 'Cryptography', level: 80, category: 'Specialized', icon: <Lock size={18} /> },
    { name: 'Digital Forensics', level: 83, category: 'Specialized', icon: <Database size={18} /> },
  ];

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categories = ['All', ...new Set(skills.map(skill => skill.category))];

  useEffect(() => {
    const filteredSkills = activeCategory && activeCategory !== 'All'
      ? skills.filter(skill => skill.category === activeCategory)
      : skills;
      
    setVisibleSkills([]);
    
    // Reveal skills one by one with delay
    filteredSkills.forEach((skill, index) => {
      setTimeout(() => {
        setVisibleSkills(prev => [...prev, skill]);
        if (window.playSound && index % 3 === 0) window.playSound('notification');
      }, 100 * index);
    });
  }, [activeCategory]);

  const getLevelClass = (level: number) => {
    if (level >= 90) return 'bg-cyber-green';
    if (level >= 80) return 'bg-cyber-blue';
    if (level >= 70) return 'bg-cyber-purple';
    return 'bg-cyber-red';
  };

  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-futura font-bold flex items-center">
            <Brain className="mr-3 text-cyber-blue" size={28} />
            <span className="text-cyber-light">SKILLS & ABILITIES</span>
          </h1>
          <p className="text-cyber-light/70 mt-2">
            Comprehensive analysis of technical expertise and proficiency levels in cybersecurity domains.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 whitespace-nowrap ${
                  activeCategory === category 
                    ? 'bg-cyber-purple text-cyber-light' 
                    : 'bg-cyber-dark/70 text-cyber-light/70 border border-cyber-purple/30 hover:border-cyber-purple/60'
                }`}
                onClick={() => {
                  window.playSound?.('click');
                  setActiveCategory(category);
                }}
                onMouseEnter={() => window.playSound?.('hover')}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Tree Visualization */}
        <div className="cyber-panel p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleSkills.map((skill, index) => (
              <div 
                key={index} 
                className="border border-cyber-purple/30 bg-cyber-dark/40 p-4 transition-all duration-500"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  opacity: 1,
                  transform: 'translateY(0)'
                }}
              >
                <div className="flex items-center mb-2">
                  <div className="mr-3 text-cyber-blue">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-futura text-cyber-light">{skill.name}</h3>
                    <div className="text-xs text-cyber-light/50">{skill.category}</div>
                  </div>
                  <div className="ml-auto">
                    <span className="text-lg font-bold text-cyber-blue">{skill.level}</span>
                    <span className="text-xs text-cyber-light/50">/100</span>
                  </div>
                </div>
                
                <div className="w-full h-2 bg-cyber-dark/70 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${getLevelClass(skill.level)} transition-all duration-1000 relative`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skill Specializations */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="cyber-panel">
            <h2 className="text-xl font-futura font-bold mb-4 flex items-center">
              <Shield className="mr-2 text-cyber-purple" size={20} />
              <span>SECURITY FOCUS</span>
            </h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-cyber-light/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple mr-2"></span>
                Vulnerability Assessment & Exploitation
              </li>
              <li className="flex items-center text-cyber-light/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple mr-2"></span>
                Advanced Persistent Threat (APT) Detection
              </li>
              <li className="flex items-center text-cyber-light/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple mr-2"></span>
                Zero-Day Vulnerability Research
              </li>
              <li className="flex items-center text-cyber-light/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple mr-2"></span>
                Security Information & Event Management
              </li>
            </ul>
          </div>
          
          <div className="cyber-panel">
            <h2 className="text-xl font-futura font-bold mb-4 flex items-center">
              <Code className="mr-2 text-cyber-blue" size={20} />
              <span>TECHNICAL EXPERTISE</span>
            </h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-cyber-light/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue mr-2"></span>
                Custom Exploit Development
              </li>
              <li className="flex items-center text-cyber-light/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue mr-2"></span>
                Secure Software Development
              </li>
              <li className="flex items-center text-cyber-light/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue mr-2"></span>
                Automated Security Testing
              </li>
              <li className="flex items-center text-cyber-light/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue mr-2"></span>
                Security Architecture Design
              </li>
            </ul>
          </div>
          
          <div className="cyber-panel">
            <h2 className="text-xl font-futura font-bold mb-4 flex items-center">
              <Globe className="mr-2 text-cyber-green" size={20} />
              <span>CERTIFICATIONS</span>
            </h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-cyber-light/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-green mr-2"></span>
                Certified Ethical Hacker (CEH)
              </li>
              <li className="flex items-center text-cyber-light/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-green mr-2"></span>
                OSCP (Offensive Security Certified Professional)
              </li>
              <li className="flex items-center text-cyber-light/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-green mr-2"></span>
                CISSP (Certified Information Systems Security Professional)
              </li>
              <li className="flex items-center text-cyber-light/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-green mr-2"></span>
                CompTIA Security+
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
