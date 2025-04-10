
import React, { useState, useEffect } from 'react';
import { Trophy, Award, Shield, Target, Flag, Medal, Star, ExternalLink } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  type: 'ctf' | 'certification' | 'award' | 'recognition';
  icon: React.ReactNode;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  unlocked: boolean;
}

const Achievements = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [showUnlocked, setShowUnlocked] = useState<boolean>(true);
  const [showingDetails, setShowingDetails] = useState<number | null>(null);
  
  const achievementsData: Achievement[] = [
    {
      id: 1,
      title: "DEF CON CTF Finalist",
      description: "Reached the finals of DEF CON CTF, one of the world's most prestigious hacking competitions, competing against elite international teams.",
      date: "2022",
      type: "ctf",
      icon: <Flag size={20} />,
      rarity: "legendary",
      unlocked: true
    },
    {
      id: 2,
      title: "SANS NetWars Champion",
      description: "First place in SANS NetWars Tournament of Champions, demonstrating exceptional skills in defensive and offensive security challenges.",
      date: "2021",
      type: "ctf",
      icon: <Trophy size={20} />,
      rarity: "rare",
      unlocked: true
    },
    {
      id: 3,
      title: "OSCP Certification",
      description: "Obtained Offensive Security Certified Professional (OSCP) certification with perfect lab scores, demonstrating advanced penetration testing skills.",
      date: "2020",
      type: "certification",
      icon: <Award size={20} />,
      rarity: "uncommon",
      unlocked: true
    },
    {
      id: 4,
      title: "CISSP Certification",
      description: "Certified Information Systems Security Professional, recognizing expertise across all security domains.",
      date: "2021",
      type: "certification",
      icon: <Shield size={20} />,
      rarity: "uncommon",
      unlocked: true
    },
    {
      id: 5,
      title: "Zero-Day Vulnerability Discovery",
      description: "Discovered and responsibly disclosed a critical zero-day vulnerability in a major enterprise application, which was subsequently patched.",
      date: "2022",
      type: "recognition",
      icon: <Target size={20} />,
      rarity: "rare",
      unlocked: true
    },
    {
      id: 6,
      title: "National Cybersecurity Excellence Award",
      description: "Received industry recognition for contributions to national cybersecurity standards and practices.",
      date: "2022",
      type: "award",
      icon: <Medal size={20} />,
      rarity: "legendary",
      unlocked: true
    },
    {
      id: 7,
      title: "Published Security Researcher",
      description: "Published research on advanced persistent threats in a leading cybersecurity journal, establishing expertise in APT detection and mitigation.",
      date: "2021",
      type: "recognition",
      icon: <Star size={20} />,
      rarity: "rare",
      unlocked: true
    },
    {
      id: 8,
      title: "HackTheBox Hall of Fame",
      description: "Recognized in the HackTheBox Hall of Fame for being among the first to solve multiple challenging machines.",
      date: "2020",
      type: "ctf",
      icon: <Trophy size={20} />,
      rarity: "uncommon",
      unlocked: true
    },
    {
      id: 9,
      title: "Bug Bounty Elite",
      description: "Reached elite status in major bug bounty programs by discovering critical vulnerabilities in enterprise applications.",
      date: "2023",
      type: "recognition",
      icon: <Target size={20} />,
      rarity: "rare",
      unlocked: true
    },
    {
      id: 10,
      title: "Cloud Security Master",
      description: "Classified achievement in cloud security mastery. Details restricted.",
      date: "2023",
      type: "certification",
      icon: <Shield size={20} />,
      rarity: "legendary",
      unlocked: false
    }
  ];
  
  const filters = ['All', 'CTF Competitions', 'Certifications', 'Awards', 'Recognition'];
  
  const filterMap = {
    'All': () => true,
    'CTF Competitions': (item: Achievement) => item.type === 'ctf',
    'Certifications': (item: Achievement) => item.type === 'certification',
    'Awards': (item: Achievement) => item.type === 'award',
    'Recognition': (item: Achievement) => item.type === 'recognition',
  };

  const rarityColors = {
    common: 'border-gray-400 bg-gray-800/50',
    uncommon: 'border-cyber-blue bg-cyber-blue/10',
    rare: 'border-cyber-purple bg-cyber-purple/10',
    legendary: 'border-cyber-red bg-cyber-red/10',
  };
  
  const rarityGlow = {
    common: '',
    uncommon: 'shadow-[0_0_10px_rgba(14,165,233,0.3)]',
    rare: 'shadow-[0_0_15px_rgba(139,92,246,0.4)]',
    legendary: 'shadow-[0_0_20px_rgba(234,56,76,0.5)]',
  };
  
  const rarityTextColors = {
    common: 'text-gray-400',
    uncommon: 'text-cyber-blue',
    rare: 'text-cyber-purple',
    legendary: 'text-cyber-red',
  };

  useEffect(() => {
    // Filter achievements based on current filter and locked/unlocked state
    const filtered = achievementsData
      .filter((filterMap as any)[activeFilter])
      .filter(a => showUnlocked || !a.unlocked);
    
    // Reset visible achievements
    setAchievements([]);
    
    // Add achievements with delay for animation
    filtered.forEach((achievement, index) => {
      setTimeout(() => {
        setAchievements(prev => [...prev, achievement]);
        if (window.playSound && index % 3 === 0) window.playSound('notification');
      }, 100 * index);
    });
  }, [activeFilter, showUnlocked]);

  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-futura font-bold flex items-center">
            <Trophy className="mr-3 text-cyber-green" size={28} />
            <span className="text-cyber-light">ACHIEVEMENTS & ACCOLADES</span>
          </h1>
          <p className="text-cyber-light/70 mt-2">
            Professional achievements, competition victories, and industry recognition in cybersecurity.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div className="flex space-x-2 overflow-x-auto pb-2 mb-4 md:mb-0">
            {filters.map(filter => (
              <button
                key={filter}
                className={`px-4 py-2 whitespace-nowrap ${
                  activeFilter === filter 
                    ? 'bg-cyber-green text-cyber-dark font-bold' 
                    : 'border border-cyber-green/30 hover:border-cyber-green/60 text-cyber-light/70'
                }`}
                onClick={() => {
                  setActiveFilter(filter);
                  window.playSound?.('click');
                }}
                onMouseEnter={() => window.playSound?.('hover')}
              >
                {filter}
              </button>
            ))}
          </div>
          
          <div>
            <button
              className="flex items-center text-sm text-cyber-light/80 hover:text-cyber-light"
              onClick={() => {
                setShowUnlocked(!showUnlocked);
                window.playSound?.('click');
              }}
              onMouseEnter={() => window.playSound?.('hover')}
            >
              <span className={`w-4 h-4 border ${showUnlocked ? 'bg-cyber-green' : 'bg-transparent'} mr-2 flex items-center justify-center`}>
                {showUnlocked && <span>✓</span>}
              </span>
              <span>Show Locked Achievements</span>
            </button>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`cyber-panel relative overflow-hidden ${
                achievement.unlocked 
                  ? rarityColors[achievement.rarity] + ' ' + rarityGlow[achievement.rarity]
                  : 'border-gray-700 bg-cyber-dark/30 filter grayscale-[70%]'
              } transition-all duration-300`}
              onClick={() => {
                if (achievement.unlocked) {
                  setShowingDetails(showingDetails === achievement.id ? null : achievement.id);
                  window.playSound?.('click');
                }
              }}
              onMouseEnter={() => window.playSound?.('hover')}
            >
              {!achievement.unlocked && (
                <div className="absolute inset-0 bg-cyber-dark/70 flex items-center justify-center z-10">
                  <div className="text-center p-4">
                    <Lock size={24} className="mx-auto mb-2 text-cyber-red" />
                    <p className="text-cyber-light/70">Achievement Locked</p>
                  </div>
                </div>
              )}
              
              <div className="flex items-start">
                <div className={`p-3 mr-4 ${
                  rarityTextColors[achievement.rarity]
                }`}>
                  {achievement.icon}
                </div>
                
                <div>
                  <h3 className={`font-futura ${
                    achievement.unlocked ? rarityTextColors[achievement.rarity] : 'text-gray-500'
                  }`}>
                    {achievement.title}
                  </h3>
                  
                  <p className={`text-xs mt-1 ${
                    achievement.unlocked ? 'text-cyber-light/70' : 'text-cyber-light/30'
                  }`}>
                    {achievement.description}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4 text-xs">
                <span className={`uppercase ${
                  achievement.unlocked ? 'text-cyber-light/50' : 'text-cyber-light/30'
                }`}>
                  {achievement.date}
                </span>
                
                <span className={`uppercase ${
                  rarityTextColors[achievement.rarity]
                }`}>
                  {achievement.rarity}
                </span>
              </div>
              
              {/* Expanded details panel */}
              {showingDetails === achievement.id && achievement.unlocked && (
                <div className="mt-4 pt-4 border-t border-cyber-purple/20 text-sm">
                  <div className="flex justify-between">
                    <button 
                      className="text-cyber-blue flex items-center text-xs"
                      onMouseEnter={() => window.playSound?.('hover')}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.playSound?.('click');
                      }}
                    >
                      <span>VIEW DETAILS</span>
                      <ExternalLink size={12} className="ml-1" />
                    </button>
                    
                    <button 
                      className="text-cyber-purple flex items-center text-xs"
                      onMouseEnter={() => window.playSound?.('hover')}
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowingDetails(null);
                        window.playSound?.('click');
                      }}
                    >
                      <span>CLOSE</span>
                    </button>
                  </div>
                </div>
              )}
              
              {/* Achievement glow effect */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                achievement.unlocked 
                  ? rarityTextColors[achievement.rarity] 
                  : 'bg-gray-700'
              } opacity-50`}></div>
            </div>
          ))}
        </div>
        
        {/* Achievement Statistics */}
        <div className="mt-12 cyber-panel">
          <h2 className="text-xl font-futura font-bold mb-6 flex items-center">
            <Star className="mr-2 text-cyber-green" size={24} />
            <span>ACHIEVEMENT STATISTICS</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border border-cyber-green/30 bg-cyber-dark/40 p-4 text-center">
              <div className="text-3xl font-bold text-cyber-green mb-1">9/10</div>
              <div className="text-xs text-cyber-light/70">ACHIEVEMENTS UNLOCKED</div>
            </div>
            
            <div className="border border-cyber-blue/30 bg-cyber-dark/40 p-4 text-center">
              <div className="text-3xl font-bold text-cyber-blue mb-1">3</div>
              <div className="text-xs text-cyber-light/70">CTF VICTORIES</div>
            </div>
            
            <div className="border border-cyber-purple/30 bg-cyber-dark/40 p-4 text-center">
              <div className="text-3xl font-bold text-cyber-purple mb-1">4</div>
              <div className="text-xs text-cyber-light/70">CERTIFICATIONS</div>
            </div>
            
            <div className="border border-cyber-red/30 bg-cyber-dark/40 p-4 text-center">
              <div className="text-3xl font-bold text-cyber-red mb-1">2</div>
              <div className="text-xs text-cyber-light/70">LEGENDARY ACHIEVEMENTS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
