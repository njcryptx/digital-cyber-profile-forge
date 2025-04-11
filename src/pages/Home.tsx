import React, { useState, useEffect } from 'react';
import { Shield, Terminal, Cpu, Zap } from 'lucide-react';
import GitHubProfile from '@/components/GitHubProfile';
import LinkedInInfo from '@/components/LinkedInInfo';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Cybersecurity Researcher | Ethical Hacker | Red Team Specialist";
  const [stats, setStats] = useState({
    level: 0,
    xp: 0,
    threat: 0,
    security: 0
  });

  useEffect(() => {
    // Typing animation
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText]);

  useEffect(() => {
    // Animate stats counters
    const interval = setInterval(() => {
      setStats(prev => ({
        level: prev.level < 42 ? prev.level + 1 : 42,
        xp: prev.xp < 8642 ? prev.xp + 100 : 8642,
        threat: prev.threat < 92 ? prev.threat + 2 : 92,
        security: prev.security < 96 ? prev.security + 2 : 96
      }));
      
      if (stats.level === 42 && stats.xp === 8642 && stats.threat === 92 && stats.security === 96) {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [stats]);

  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Profile Card */}
          <div className="md:col-span-2 cyber-panel relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="w-32 h-32 rounded-full cyber-border mb-4 md:mb-0 md:mr-6 overflow-hidden relative scanner-effect">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyber-purple/30 to-cyber-blue/30"></div>
                  <img 
                    src="/lovable-uploads/c9830031-2a9f-4929-ac9d-c53f870845fc.png" 
                    alt="Cyber Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl font-futura font-bold mb-1 text-cyber-light">
                    <span className="text-cyber-purple">NIRANJAN</span> <span className="text-cyber-blue">M SANIL</span>
                  </h1>
                  
                  <div className="mb-2">
                    <span className="terminal-text text-cyber-green text-sm">
                      {typedText}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 my-3">
                    <span className="px-2 py-1 text-xs bg-cyber-purple/20 border border-cyber-purple/40 text-cyber-light">
                      CODE NAME: NJCRYPTX
                    </span>
                    <span className="px-2 py-1 text-xs bg-cyber-blue/20 border border-cyber-blue/40 text-cyber-light">
                      PENETRATION TESTING
                    </span>
                    <span className="px-2 py-1 text-xs bg-cyber-green/20 border border-cyber-green/40 text-cyber-light">
                      RED TEAM OPERATIONS
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-cyber-light/80 mb-4">
                  Elite cybersecurity professional specializing in red teaming, penetration testing, and vulnerability assessment.
                  Experienced in identifying security weaknesses and helping organizations strengthen their defenses against sophisticated cyber threats.
                </p>
                
                <div className="flex flex-wrap gap-4 mt-4">
                  <button 
                    className="cyber-button" 
                    onMouseEnter={() => window.playSound?.('hover')}
                    onClick={() => window.playSound?.('click')}
                  >
                    View Credentials
                  </button>
                  <button 
                    className="cyber-button"
                    onMouseEnter={() => window.playSound?.('hover')}
                    onClick={() => window.playSound?.('click')}
                  >
                    Request Access
                  </button>
                </div>
              </div>
            </div>
            
            {/* Background scanner effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/5 to-cyber-blue/5 pointer-events-none"></div>
          </div>
          
          {/* Stats Panel */}
          <div className="cyber-panel">
            <h2 className="text-xl font-futura font-bold mb-4 flex items-center">
              <Shield className="mr-2 text-cyber-purple" size={20} />
              <span>SYSTEM STATUS</span>
            </h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span className="flex items-center">
                    <Zap size={14} className="mr-1 text-cyber-blue" />
                    LEVEL
                  </span>
                  <span className="text-cyber-blue">{stats.level}</span>
                </div>
                <div className="w-full h-2 bg-cyber-dark/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-cyber-blue transition-all duration-300"
                    style={{ width: `${(stats.level / 50) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span className="flex items-center">
                    <Cpu size={14} className="mr-1 text-cyber-purple" />
                    EXPERIENCE
                  </span>
                  <span className="text-cyber-purple">{stats.xp.toLocaleString()}</span>
                </div>
                <div className="w-full h-2 bg-cyber-dark/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-cyber-purple transition-all duration-300"
                    style={{ width: `${(stats.xp / 10000) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span className="flex items-center">
                    <Terminal size={14} className="mr-1 text-cyber-red" />
                    THREAT ANALYSIS
                  </span>
                  <span className="text-cyber-red">{stats.threat}%</span>
                </div>
                <div className="w-full h-2 bg-cyber-dark/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-cyber-red transition-all duration-300"
                    style={{ width: `${stats.threat}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span className="flex items-center">
                    <Shield size={14} className="mr-1 text-cyber-green" />
                    SECURITY LEVEL
                  </span>
                  <span className="text-cyber-green">{stats.security}%</span>
                </div>
                <div className="w-full h-2 bg-cyber-dark/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-cyber-green transition-all duration-300"
                    style={{ width: `${stats.security}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* GitHub Profile */}
        <div className="mb-8">
          <GitHubProfile username="njcryptx" />
        </div>
        
        {/* LinkedIn Info */}
        <div className="mb-8">
          <LinkedInInfo />
        </div>
        
        {/* Featured Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="cyber-panel">
            <h2 className="text-xl font-futura font-bold mb-4 flex items-center">
              <Terminal className="mr-2 text-cyber-blue" size={20} />
              <span>LATEST MISSION</span>
            </h2>
            
            <div className="space-y-4">
              <div className="p-3 border border-cyber-blue/30 bg-cyber-dark/50 relative">
                <div className="absolute top-0 right-0 p-1 text-xs text-cyber-green bg-cyber-dark/70">
                  ACTIVE
                </div>
                <h3 className="text-cyber-blue font-futura">Advanced Penetration Testing</h3>
                <p className="text-sm text-cyber-light/70 mt-2">
                  Conducting comprehensive red team operations to identify vulnerabilities in enterprise security systems 
                  before malicious actors can exploit them.
                </p>
                <div className="mt-2 text-xs text-cyber-purple">CLEARANCE LEVEL: TOP SECRET</div>
              </div>
              
              <button 
                className="w-full text-center text-cyber-blue hover:text-cyber-purple transition-colors duration-300 text-sm border border-cyber-blue/30 py-2 hover:border-cyber-purple/50"
                onMouseEnter={() => window.playSound?.('hover')}
                onClick={() => window.playSound?.('click')}
              >
                ACCESS MISSION LOGS
              </button>
            </div>
          </div>
          
          <div className="cyber-panel">
            <h2 className="text-xl font-futura font-bold mb-4 flex items-center">
              <Cpu className="mr-2 text-cyber-purple" size={20} />
              <span>SYSTEM OVERVIEW</span>
            </h2>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between p-2 border-b border-cyber-purple/20">
                <span className="text-cyber-light/70">Intrusion Detection</span>
                <span className="text-cyber-green">ACTIVE</span>
              </div>
              <div className="flex justify-between p-2 border-b border-cyber-purple/20">
                <span className="text-cyber-light/70">Firewall Status</span>
                <span className="text-cyber-green">SECURE</span>
              </div>
              <div className="flex justify-between p-2 border-b border-cyber-purple/20">
                <span className="text-cyber-light/70">Encryption Protocol</span>
                <span className="text-cyber-green">QUANTUM-RESISTANT</span>
              </div>
              <div className="flex justify-between p-2 border-b border-cyber-purple/20">
                <span className="text-cyber-light/70">Authentication</span>
                <span className="text-cyber-green">MULTI-FACTOR</span>
              </div>
              <div className="flex justify-between p-2">
                <span className="text-cyber-light/70">Last System Scan</span>
                <span className="text-cyber-blue">TODAY 07:42</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
