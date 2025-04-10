
import React, { useState, useEffect } from 'react';
import { BookOpen, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface Education {
  id: number;
  degree: string;
  institution: string;
  logo: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  completed: boolean;
}

const Education = () => {
  const [educationHistory, setEducationHistory] = useState<Education[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);

  const educationData: Education[] = [
    {
      id: 1,
      degree: "Master of Science in Cybersecurity",
      institution: "Advanced Tech University",
      logo: "/placeholder.svg",
      location: "San Francisco, CA",
      period: "2018 - 2020",
      description: "Specialized in advanced network security, cryptographic protocols, and digital forensics with focus on critical infrastructure protection.",
      achievements: [
        "Thesis: 'Adaptive Defense Mechanisms Against Zero-Day Exploits'",
        "Graduate Research Assistant in the University Cybersecurity Lab",
        "Winner of the Annual Capture The Flag (CTF) Competition",
        "Published research on honeypot systems in IEEE Security Journal"
      ],
      completed: true
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      institution: "National Tech Institute",
      logo: "/placeholder.svg",
      location: "Boston, MA",
      period: "2014 - 2018",
      description: "Core curriculum in computer science fundamentals with security specialization track. Senior project focused on intrusion detection systems.",
      achievements: [
        "Senior Project: 'Machine Learning for Anomaly Detection in Network Traffic'",
        "Dean's List for Academic Excellence (7 consecutive semesters)",
        "Teaching Assistant for 'Introduction to Network Security'",
        "Security Club President (2016-2018)"
      ],
      completed: true
    },
    {
      id: 3,
      degree: "Professional Certification Program",
      institution: "Global Cybersecurity Institute",
      logo: "/placeholder.svg",
      location: "Online & Washington, DC",
      period: "2020 - 2021",
      description: "Advanced professional certification program covering ethical hacking, penetration testing, and security compliance frameworks.",
      achievements: [
        "Advanced Penetration Testing Certification",
        "Secure Cloud Architecture Specialist",
        "Top performer in Red Team Exercises",
        "Contributed to industry best practices documentation"
      ],
      completed: true
    }
  ];

  useEffect(() => {
    // Reveal education items one by one
    educationData.forEach((edu, index) => {
      setTimeout(() => {
        setEducationHistory(prev => [...prev, edu]);
        // Play sound for each item appearing
        if (window.playSound) window.playSound('notification');
      }, 300 * index);
    });
  }, []);

  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-futura font-bold flex items-center">
            <BookOpen className="mr-3 text-cyber-green" size={28} />
            <span className="text-cyber-light">EDUCATION & TRAINING</span>
          </h1>
          <p className="text-cyber-light/70 mt-2">
            Academic background and specialized training in cybersecurity and computer science.
          </p>
        </div>

        {/* Timeline View */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-cyber-purple/30 transform md:translate-x-px z-0"></div>
          
          <div className="space-y-12 relative">
            {educationHistory.map((edu, index) => (
              <div 
                key={edu.id}
                className={`relative z-10 flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                onMouseEnter={() => {
                  setActiveId(edu.id);
                  if (window.playSound) window.playSound('hover');
                }}
                onMouseLeave={() => setActiveId(null)}
              >
                {/* Timeline node */}
                <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-cyber-dark border-2 border-cyber-purple transform -translate-x-[11px] md:translate-x-[-11px] flex items-center justify-center">
                  {edu.completed && (
                    <div className="w-2 h-2 rounded-full bg-cyber-green"></div>
                  )}
                </div>
                
                {/* Content card */}
                <div className={`ml-8 md:ml-0 md:w-[calc(50%-20px)] ${
                  index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
                }`}>
                  <div className={`cyber-panel transition-all duration-300 ${
                    activeId === edu.id ? 'border-cyber-purple/80' : ''
                  }`}>
                    <div className="flex flex-col md:flex-row items-start mb-4">
                      <div className="w-12 h-12 bg-cyber-dark/50 p-2 mb-4 md:mb-0 md:mr-4 border border-cyber-purple/30 flex items-center justify-center">
                        <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-futura text-cyber-purple">{edu.degree}</h3>
                        <h4 className="text-cyber-blue">{edu.institution}</h4>
                        
                        <div className="flex flex-wrap mt-2 text-xs text-cyber-light/70">
                          <div className="flex items-center mr-4 mb-2">
                            <Calendar size={12} className="mr-1" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center mb-2">
                            <MapPin size={12} className="mr-1" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-cyber-light/80 mb-4 text-sm">
                      {edu.description}
                    </p>
                    
                    <div className="mb-3">
                      <h4 className="text-cyber-green flex items-center text-sm mb-2">
                        <Award size={16} className="mr-2" />
                        <span>KEY ACHIEVEMENTS</span>
                      </h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-xs text-cyber-light/70 flex items-start">
                            <span className="text-cyber-purple mr-2">▹</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="text-right">
                      <button 
                        className="text-cyber-blue text-xs flex items-center justify-end hover:text-cyber-purple transition-colors"
                        onMouseEnter={() => window.playSound?.('hover')}
                        onClick={() => window.playSound?.('click')}
                      >
                        <span>VIEW DETAILS</span>
                        <ExternalLink size={12} className="ml-1" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Time indicator */}
                  <div className={`text-xs font-cyber mt-2 text-cyber-purple ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    {edu.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional Training */}
        <div className="mt-12">
          <h2 className="text-2xl font-futura font-bold mb-4 flex items-center border-b border-cyber-purple/30 pb-2">
            <Award className="mr-2 text-cyber-blue" size={24} />
            <span>ADDITIONAL TRAINING & CERTIFICATIONS</span>
          </h2>
          
          <div className="cyber-panel mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "Certified Ethical Hacker (CEH)", date: "2020", issuer: "EC-Council" },
                { name: "OSCP Certification", date: "2021", issuer: "Offensive Security" },
                { name: "CISSP", date: "2022", issuer: "ISC²" },
                { name: "CompTIA Security+", date: "2019", issuer: "CompTIA" },
                { name: "Certified Cloud Security Professional", date: "2022", issuer: "ISC²" },
                { name: "Advanced Penetration Testing", date: "2021", issuer: "SANS Institute" }
              ].map((cert, index) => (
                <div 
                  key={index}
                  className="border border-cyber-blue/30 bg-cyber-dark/40 p-3 hover:border-cyber-blue/60 transition-all duration-300"
                  onMouseEnter={() => window.playSound?.('hover')}
                >
                  <h3 className="text-cyber-blue text-sm">{cert.name}</h3>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-cyber-light/70">{cert.issuer}</span>
                    <span className="text-cyber-purple">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
