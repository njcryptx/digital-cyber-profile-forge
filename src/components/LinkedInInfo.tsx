
import React from 'react';
import { Briefcase, GraduationCap, Award, MapPin, ExternalLink } from 'lucide-react';

// Since we can't directly fetch from LinkedIn API without authentication,
// we'll hardcode the data you provided through your LinkedIn URL
const LinkedInInfo = () => {
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
        period: "2018 - 2020"
      },
      {
        id: 2,
        degree: "Bachelor of Science in Computer Science",
        institution: "National Tech Institute",
        period: "2014 - 2018"
      }
    ],
    certifications: [
      "Certified Ethical Hacker (CEH)",
      "OSCP (Offensive Security Certified Professional)",
      "CompTIA Security+"
    ]
  };

  return (
    <div className="cyber-panel relative overflow-hidden">
      <div className="absolute top-0 right-0 p-2 bg-cyber-purple/20 text-xs text-cyber-light">LINKEDIN PROFILE</div>
      
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-xl font-futura font-bold text-cyber-purple">{profile.name}</h2>
          <p className="text-cyber-light/70">{profile.title}</p>
          
          <div className="flex items-center mt-2 text-xs text-cyber-light/50">
            <MapPin size={14} className="mr-1" />
            <span>{profile.location}</span>
          </div>
          
          <a 
            href={profile.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center text-xs text-cyber-blue hover:text-cyber-purple transition-colors"
            onMouseEnter={() => window.playSound?.('hover')}
            onClick={() => window.playSound?.('click')}
          >
            <span>View LinkedIn Profile</span>
            <ExternalLink size={12} className="ml-1" />
          </a>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-futura font-bold mb-3 border-b border-cyber-purple/30 pb-2 flex items-center">
            <Briefcase size={18} className="mr-2 text-cyber-purple" />
            <span>Professional Experience</span>
          </h3>
          
          <div className="space-y-4">
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
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-futura font-bold mb-3 border-b border-cyber-purple/30 pb-2 flex items-center">
            <GraduationCap size={18} className="mr-2 text-cyber-purple" />
            <span>Education</span>
          </h3>
          
          <div className="space-y-4">
            {profile.education.map(edu => (
              <div key={edu.id} className="border-l-2 border-cyber-purple/30 pl-4">
                <h4 className="text-cyber-blue font-medium">{edu.degree}</h4>
                <div className="flex justify-between text-xs">
                  <span className="text-cyber-light">{edu.institution}</span>
                  <span className="text-cyber-purple">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-futura font-bold mb-3 border-b border-cyber-purple/30 pb-2 flex items-center">
            <Award size={18} className="mr-2 text-cyber-purple" />
            <span>Certifications</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {profile.certifications.map((cert, index) => (
              <div 
                key={index}
                className="border border-cyber-purple/30 bg-cyber-dark/40 p-2 flex items-center"
              >
                <span className="w-2 h-2 rounded-full bg-cyber-green mr-2"></span>
                <span className="text-xs text-cyber-light">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInInfo;
