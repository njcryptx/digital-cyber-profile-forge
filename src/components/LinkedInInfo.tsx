
import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, MapPin, ExternalLink, Trophy, Star } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

// Since we can't directly fetch from LinkedIn API without authentication,
// we'll hardcode the data based on your LinkedIn profile
const LinkedInInfo = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'certifications' | 'achievements'>('experience');
  
  const profile = {
    name: "Niranjan M Sanil",
    title: "Cybersecurity Researcher | Penetration Tester | Security Analyst",
    location: "San Francisco, CA",
    url: "https://www.linkedin.com/in/niranjan-m-sanil-027929265/",
    about: "Dedicated cybersecurity professional with expertise in penetration testing, vulnerability assessment, and security analysis. Passionate about identifying and mitigating security threats in various systems and networks.",
    experience: [
      {
        id: 1,
        role: "Security Researcher",
        company: "CyberShield Technologies",
        period: "2022 - Present",
        description: "Conduct thorough security assessments and penetration testing to identify vulnerabilities in client systems. Develop and implement security solutions to protect against cyber threats."
      },
      {
        id: 2,
        role: "Red Team Specialist",
        company: "NexGen Security",
        period: "2021 - 2022",
        description: "Led red team operations to simulate real-world attacks and assess organizational security posture. Documented findings and provided actionable recommendations for security improvements."
      }
    ],
    education: [
      {
        id: 1,
        degree: "Master of Science in Cybersecurity",
        institution: "Advanced Tech University",
        period: "2018 - 2020",
        description: "Specialized in advanced network security, cryptographic protocols, and digital forensics with focus on critical infrastructure protection.",
        achievements: [
          "Thesis on Advanced Threat Detection Systems",
          "Research Assistant for the Cybersecurity Lab",
          "Merit Scholarship Recipient"
        ]
      },
      {
        id: 2,
        degree: "Bachelor of Science in Computer Science",
        institution: "National Tech Institute",
        period: "2014 - 2018",
        description: "Core curriculum in computer science with specialization in system security and network protocols.",
        achievements: [
          "Dean's List for Academic Excellence",
          "Capstone Project on Network Vulnerability Analysis",
          "Teaching Assistant for Introduction to Computer Security"
        ]
      }
    ],
    certifications: [
      {
        id: 1,
        name: "Certified Ethical Hacker (CEH)",
        issuer: "EC-Council",
        date: "2021"
      },
      {
        id: 2,
        name: "OSCP (Offensive Security Certified Professional)",
        issuer: "Offensive Security",
        date: "2022"
      },
      {
        id: 3,
        name: "CompTIA Security+",
        issuer: "CompTIA",
        date: "2020"
      },
      {
        id: 4,
        name: "Certified Cloud Security Professional",
        issuer: "ISC²",
        date: "2022"
      }
    ],
    achievements: [
      {
        id: 1,
        title: "NASA Certificate of Appreciation",
        date: "2023",
        description: "Recognized for contributions to NASA's cybersecurity infrastructure vulnerability assessment program."
      },
      {
        id: 2,
        title: "Cybersecurity Hall of Fame",
        date: "2022",
        description: "Inducted into the regional Cybersecurity Hall of Fame for outstanding contributions to the field."
      },
      {
        id: 3,
        title: "CTF Competition - 1st Place",
        date: "2021",
        description: "Winner of the annual Capture The Flag competition hosted by SecureCon."
      }
    ]
  };

  return (
    <div className="cyber-panel relative overflow-hidden">
      <div className="absolute top-0 right-0 p-2 bg-cyber-purple/20 text-xs text-cyber-light">LINKEDIN PROFILE</div>
      
      <div className="p-6">
        <div className="mb-6">
          <div className="flex items-start mb-4">
            <Avatar className="w-16 h-16 mr-4 border-2 border-cyber-purple/40">
              <AvatarImage src="/lovable-uploads/c9830031-2a9f-4929-ac9d-c53f870845fc.png" alt={profile.name} />
              <AvatarFallback className="bg-cyber-dark text-cyber-purple">NJS</AvatarFallback>
            </Avatar>
            
            <div>
              <h2 className="text-xl font-futura font-bold text-cyber-purple">{profile.name}</h2>
              <p className="text-cyber-light/70">{profile.title}</p>
              
              <div className="flex items-center mt-2 text-xs text-cyber-light/50">
                <MapPin size={14} className="mr-1" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
          
          <p className="text-cyber-light/80 text-sm mb-4">{profile.about}</p>
          
          <a 
            href={profile.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs text-cyber-blue hover:text-cyber-purple transition-colors"
            onMouseEnter={() => window.playSound?.('hover')}
            onClick={() => window.playSound?.('click')}
          >
            <span>View LinkedIn Profile</span>
            <ExternalLink size={12} className="ml-1" />
          </a>
        </div>
        
        {/* Navigation tabs */}
        <div className="flex border-b border-cyber-purple/30 mb-4">
          <button 
            className={`px-3 py-2 text-sm font-medium transition-colors ${activeTab === 'experience' ? 'text-cyber-purple border-b-2 border-cyber-purple' : 'text-cyber-light/60 hover:text-cyber-light'}`}
            onClick={() => {
              setActiveTab('experience');
              window.playSound?.('click');
            }}
            onMouseEnter={() => window.playSound?.('hover')}
          >
            <Briefcase size={16} className="inline-block mr-1" />
            Experience
          </button>
          <button 
            className={`px-3 py-2 text-sm font-medium transition-colors ${activeTab === 'education' ? 'text-cyber-purple border-b-2 border-cyber-purple' : 'text-cyber-light/60 hover:text-cyber-light'}`}
            onClick={() => {
              setActiveTab('education');
              window.playSound?.('click');
            }}
            onMouseEnter={() => window.playSound?.('hover')}
          >
            <GraduationCap size={16} className="inline-block mr-1" />
            Education
          </button>
          <button 
            className={`px-3 py-2 text-sm font-medium transition-colors ${activeTab === 'certifications' ? 'text-cyber-purple border-b-2 border-cyber-purple' : 'text-cyber-light/60 hover:text-cyber-light'}`}
            onClick={() => {
              setActiveTab('certifications');
              window.playSound?.('click');
            }}
            onMouseEnter={() => window.playSound?.('hover')}
          >
            <Award size={16} className="inline-block mr-1" />
            Certifications
          </button>
          <button 
            className={`px-3 py-2 text-sm font-medium transition-colors ${activeTab === 'achievements' ? 'text-cyber-purple border-b-2 border-cyber-purple' : 'text-cyber-light/60 hover:text-cyber-light'}`}
            onClick={() => {
              setActiveTab('achievements');
              window.playSound?.('click');
            }}
            onMouseEnter={() => window.playSound?.('hover')}
          >
            <Trophy size={16} className="inline-block mr-1" />
            Achievements
          </button>
        </div>
        
        {/* Experience Tab Content */}
        {activeTab === 'experience' && (
          <div className="space-y-4">
            <h3 className="text-lg font-futura font-bold mb-3 flex items-center">
              <Briefcase size={18} className="mr-2 text-cyber-purple" />
              <span>Professional Experience</span>
            </h3>
            
            {profile.experience.map(exp => (
              <div key={exp.id} className="border-l-2 border-cyber-purple/30 pl-4">
                <h4 className="text-cyber-blue font-medium">{exp.role}</h4>
                <div className="flex justify-between text-xs">
                  <span className="text-cyber-light">{exp.company}</span>
                  <span className="text-cyber-purple">{exp.period}</span>
                </div>
                <p className="text-cyber-light/60 text-xs mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        )}
        
        {/* Education Tab Content */}
        {activeTab === 'education' && (
          <div className="space-y-4">
            <h3 className="text-lg font-futura font-bold mb-3 flex items-center">
              <GraduationCap size={18} className="mr-2 text-cyber-purple" />
              <span>Education</span>
            </h3>
            
            {profile.education.map(edu => (
              <div key={edu.id} className="border-l-2 border-cyber-purple/30 pl-4 mb-6">
                <h4 className="text-cyber-blue font-medium">{edu.degree}</h4>
                <div className="flex justify-between text-xs">
                  <span className="text-cyber-light">{edu.institution}</span>
                  <span className="text-cyber-purple">{edu.period}</span>
                </div>
                <p className="text-cyber-light/60 text-xs mt-2">{edu.description}</p>
                
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mt-2">
                    <h5 className="text-xs text-cyber-green font-medium mb-1">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, index) => (
                        <li key={index} className="text-xs text-cyber-light/70 flex items-start">
                          <span className="text-cyber-purple mr-2">▹</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {/* Certifications Tab Content */}
        {activeTab === 'certifications' && (
          <div>
            <h3 className="text-lg font-futura font-bold mb-3 flex items-center">
              <Award size={18} className="mr-2 text-cyber-purple" />
              <span>Certifications</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profile.certifications.map(cert => (
                <div 
                  key={cert.id}
                  className="border border-cyber-purple/30 bg-cyber-dark/40 p-3 hover:border-cyber-purple/60 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <Award size={16} className="text-cyber-green mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-cyber-blue text-sm">{cert.name}</h4>
                      <div className="flex justify-between text-xs mt-1">
                        <span className="text-cyber-light/70">{cert.issuer}</span>
                        <span className="text-cyber-purple">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Achievements Tab Content */}
        {activeTab === 'achievements' && (
          <div>
            <h3 className="text-lg font-futura font-bold mb-3 flex items-center">
              <Trophy size={18} className="mr-2 text-cyber-purple" />
              <span>Notable Achievements</span>
            </h3>
            
            <div className="space-y-4">
              {profile.achievements.map(achievement => (
                <div 
                  key={achievement.id}
                  className="border-l-2 border-cyber-purple/30 pl-4"
                >
                  <div className="flex items-center">
                    <Star size={16} className="text-cyber-green mr-2 flex-shrink-0" />
                    <h4 className="text-cyber-blue font-medium">{achievement.title}</h4>
                  </div>
                  <div className="text-xs text-cyber-purple mb-1">{achievement.date}</div>
                  <p className="text-cyber-light/60 text-xs">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkedInInfo;
