import React, { useState, useEffect } from 'react';
import { Trophy, Award, Certificate, Medal, Star, Shield, Lock as LockIcon } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  date: string;
  category: string;
  icon: React.ReactNode;
  isLocked?: boolean;
}

const Achievements = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [visibleAchievements, setVisibleAchievements] = useState<Achievement[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const allAchievements: Achievement[] = [
    {
      title: 'Certified Ethical Hacker (CEH)',
      description: 'Awarded for demonstrating proficiency in ethical hacking techniques and methodologies.',
      date: '2022-08-15',
      category: 'Certifications',
      icon: <Certificate size={24} />,
    },
    {
      title: 'Offensive Security Certified Professional (OSCP)',
      description: 'Achieved for successfully completing the rigorous penetration testing certification.',
      date: '2023-03-20',
      category: 'Certifications',
      icon: <Certificate size={24} />,
    },
    {
      title: 'Capture the Flag (CTF) Champion',
      description: 'Won first place in the annual cybersecurity Capture the Flag competition.',
      date: '2023-11-01',
      category: 'Competitions',
      icon: <Trophy size={24} />,
    },
    {
      title: 'Vulnerability Disclosure Program Recognition',
      description: 'Recognized for discovering and responsibly disclosing a critical vulnerability in a widely-used software application.',
      date: '2023-06-10',
      category: 'Recognition',
      icon: <Award size={24} />,
    },
    {
      title: 'Red Team Operations Excellence Award',
      description: 'Awarded for outstanding performance and contributions to red team operations.',
      date: '2024-01-25',
      category: 'Awards',
      icon: <Medal size={24} />,
    },
    {
      title: 'Cybersecurity Innovation Challenge Winner',
      description: 'Won the Cybersecurity Innovation Challenge for developing a novel threat detection system.',
      date: '2024-04-05',
      category: 'Competitions',
      icon: <Trophy size={24} />,
    },
    {
      title: '5-Star Hacker Ranking',
      description: 'Achieved a 5-star ranking on a leading ethical hacking platform.',
      date: '2023-09-18',
      category: 'Recognition',
      icon: <Star size={24} />,
    },
    {
      title: 'Advanced Penetration Testing Certification',
      description: 'Completed advanced training and certification in penetration testing methodologies.',
      date: '2024-02-12',
      category: 'Certifications',
      icon: <Certificate size={24} />,
      isLocked: true,
    },
    {
      title: 'Critical Infrastructure Security Award',
      description: 'Awarded for exceptional contributions to securing critical infrastructure systems.',
      date: '2024-05-22',
      category: 'Awards',
      icon: <Medal size={24} />,
      isLocked: true,
    },
    {
      title: 'Global Cybersecurity Challenge Finalist',
      description: 'Reached the finals of the Global Cybersecurity Challenge, competing against top cybersecurity professionals worldwide.',
      date: '2023-12-08',
      category: 'Competitions',
      icon: <Trophy size={24} />,
      isLocked: true,
    },
    {
      title: 'Security Research Grant Recipient',
      description: 'Received a research grant to study and develop innovative solutions for emerging cybersecurity threats.',
      date: '2024-03-01',
      category: 'Awards',
      icon: <Award size={24} />,
      isLocked: true,
    },
    {
      title: 'Elite Hacker Status',
      description: 'Achieved elite hacker status on a prominent cybersecurity platform, recognized for exceptional skills and contributions.',
      date: '2024-06-15',
      category: 'Recognition',
      icon: <Star size={24} />,
      isLocked: true,
    },
  ];

  const categories = ['All', ...new Set(allAchievements.map(achievement => achievement.category))];

  useEffect(() => {
    setAchievements(allAchievements);
  }, []);

  useEffect(() => {
    const filteredAchievements = activeCategory && activeCategory !== 'All'
      ? achievements.filter(achievement => achievement.category === activeCategory)
      : achievements;

    setVisibleAchievements([]);

    filteredAchievements.forEach((achievement, index) => {
      setTimeout(() => {
        setVisibleAchievements(prev => [...prev, achievement]);
        if (window.playSound && index % 3 === 0) window.playSound('notification');
      }, 150 * index);
    });
  }, [activeCategory, achievements]);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-futura font-bold flex items-center">
            <Trophy className="mr-3 text-cyber-blue" size={28} />
            <span className="text-cyber-light">ACHIEVEMENTS & RECOGNITION</span>
          </h1>
          <p className="text-cyber-light/70 mt-2">
            A comprehensive record of accomplishments, certifications, and recognitions in the field of cybersecurity.
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

        {/* Achievement Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 h-full border border-dashed border-cyber-purple/50 transform -translate-x-1/2"></div>
          <div className="space-y-8">
            {visibleAchievements.map((achievement, index) => (
              <div key={index} className="flex items-center">
                {/* Dot and Line */}
                <div className="relative w-1/2">
                  <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
                    <div className="w-4 h-4 rounded-full bg-cyber-purple relative z-10">
                      <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-cyber-dark border border-cyber-purple animate-ping"></div>
                    </div>
                  </div>
                  {index > 0 && (
                    <div className="absolute top-0 bottom-0 right-6 w-0.5 bg-cyber-purple/50"></div>
                  )}
                </div>

                {/* Achievement Card */}
                <div
                  className={`w-1/2 cyber-panel p-4 ${achievement.isLocked ? 'opacity-50' : ''}`}
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    opacity: 1,
                    transform: 'translateY(0)'
                  }}
                >
                  <div className="flex items-start mb-2">
                    <div className="mr-3 text-cyber-blue">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="font-futura text-cyber-light">{achievement.title}</h3>
                      <div className="text-xs text-cyber-light/50">{achievement.category}</div>
                    </div>
                  </div>
                  <p className="text-sm text-cyber-light/80 mb-2">{achievement.description}</p>
                  <div className="text-xs text-cyber-blue">{formatDate(achievement.date)}</div>
                  {achievement.isLocked && (
                    <div className="absolute top-2 right-2">
                      <LockIcon size={20} className="text-cyber-red" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Roadmap */}
        <div className="mt-12 cyber-panel p-6">
          <h2 className="text-xl font-futura font-bold mb-4 flex items-center">
            <Shield className="mr-2 text-cyber-purple" size={20} />
            <span>UPCOMING GOALS</span>
          </h2>
          <p className="text-cyber-light/80">
            Strategic objectives and milestones planned for future achievements in cybersecurity.
          </p>
          <ul className="list-disc list-inside mt-4 text-sm text-cyber-light/70">
            <li>Pursue advanced certifications in cloud security and incident response.</li>
            <li>Contribute to open-source security projects and research initiatives.</li>
            <li>Speak at cybersecurity conferences and share expertise with the community.</li>
            <li>Develop innovative security tools and methodologies to address emerging threats.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
