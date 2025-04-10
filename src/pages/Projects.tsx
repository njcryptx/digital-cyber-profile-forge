
import React, { useState, useEffect } from 'react';
import { Code, ExternalLink, Github, Shield, Lock, Server, Eye, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link: string;
  github?: string;
  status: 'completed' | 'in-progress' | 'classified';
  year: string;
}

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Phantom Guard",
      description: "Advanced intrusion detection system with machine learning capabilities for identifying zero-day exploits and unusual network behavior patterns.",
      image: "/placeholder.svg",
      category: "Security Tools",
      technologies: ["Python", "TensorFlow", "Elasticsearch", "Kibana"],
      link: "#",
      github: "https://github.com",
      status: "completed",
      year: "2023"
    },
    {
      id: 2,
      title: "Neural Breach",
      description: "Automated penetration testing framework designed for critical infrastructure environments with custom vulnerability scanners.",
      image: "/placeholder.svg",
      category: "Penetration Testing",
      technologies: ["Python", "Ruby", "Docker", "PostgreSQL"],
      link: "#",
      github: "https://github.com",
      status: "completed",
      year: "2022"
    },
    {
      id: 3,
      title: "Crypto Guardian",
      description: "Blockchain security analysis tool for smart contract vulnerability detection and transaction monitoring.",
      image: "/placeholder.svg",
      category: "Blockchain",
      technologies: ["Solidity", "JavaScript", "Web3.js", "React"],
      link: "#",
      github: "https://github.com",
      status: "completed",
      year: "2022"
    },
    {
      id: 4,
      title: "Shadow Protocol",
      description: "Secure communications platform with end-to-end encryption and anti-surveillance features for high-risk environments.",
      image: "/placeholder.svg",
      category: "Communications",
      technologies: ["C++", "Signal Protocol", "Flutter", "Firebase"],
      link: "#",
      status: "in-progress",
      year: "2023"
    },
    {
      id: 5,
      title: "Nexus Defense",
      description: "Cloud security posture management system for multi-cloud environments with automated remediation capabilities.",
      image: "/placeholder.svg",
      category: "Cloud Security",
      technologies: ["TypeScript", "AWS SDK", "Azure SDK", "Terraform"],
      link: "#",
      github: "https://github.com",
      status: "completed",
      year: "2021"
    },
    {
      id: 6,
      title: "Project Sentinel",
      description: "Classified security research project focused on next-generation threat modeling and preemptive defense systems.",
      image: "/placeholder.svg",
      category: "Research",
      technologies: ["Python", "C", "Custom Hardware", "AI"],
      link: "#",
      status: "classified",
      year: "2023"
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  useEffect(() => {
    const filtered = categoryFilter === 'All' 
      ? projects 
      : projects.filter(project => project.category === categoryFilter);
      
    // Reset visible projects
    setVisibleProjects([]);
    
    // Add projects one by one with delay
    filtered.forEach((project, index) => {
      setTimeout(() => {
        setVisibleProjects(prev => [...prev, project]);
        if (window.playSound && index % 2 === 0) window.playSound('notification');
      }, 150 * index);
    });
  }, [categoryFilter]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-cyber-green';
      case 'in-progress': return 'bg-cyber-blue';
      case 'classified': return 'bg-cyber-red';
      default: return 'bg-cyber-purple';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'DEPLOYED';
      case 'in-progress': return 'IN DEVELOPMENT';
      case 'classified': return 'CLASSIFIED';
      default: return status.toUpperCase();
    }
  };

  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-futura font-bold flex items-center">
            <Code className="mr-3 text-cyber-red" size={28} />
            <span className="text-cyber-light">PROJECTS & OPERATIONS</span>
          </h1>
          <p className="text-cyber-light/70 mt-2">
            Cybersecurity tools, research projects, and secure application development portfolio.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 whitespace-nowrap ${
                  categoryFilter === category 
                    ? 'bg-cyber-red text-cyber-light' 
                    : 'bg-cyber-dark/70 text-cyber-light/70 border border-cyber-red/30 hover:border-cyber-red/60'
                }`}
                onClick={() => {
                  setCategoryFilter(category);
                  window.playSound?.('click');
                }}
                onMouseEnter={() => window.playSound?.('hover')}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <div 
              key={project.id}
              className="cyber-panel group relative overflow-hidden transition-all duration-300 h-full"
              onMouseEnter={() => {
                setHoveredId(project.id);
                window.playSound?.('hover');
              }}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image with Overlay */}
              <div className="relative h-40 mb-4 overflow-hidden scanner-effect">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-80"></div>
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3 flex items-center">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)} mr-1 animate-pulse`}></div>
                  <span className="text-[10px] bg-cyber-dark/80 px-2 py-0.5">
                    {getStatusText(project.status)}
                  </span>
                </div>
                
                {/* Year */}
                <div className="absolute bottom-3 left-3 text-xs text-cyber-light/80 bg-cyber-dark/50 px-2 py-0.5">
                  {project.year}
                </div>
              </div>
              
              {/* Project Info */}
              <div>
                <h3 className="text-xl font-futura text-cyber-red mb-2">{project.title}</h3>
                
                <p className="text-sm text-cyber-light/70 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-[10px] border border-cyber-blue/30 bg-cyber-dark/50 px-2 py-0.5 text-cyber-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex justify-between items-center">
                  <span className="text-xs text-cyber-light/50">
                    {project.category}
                  </span>
                  
                  <div className="flex space-x-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyber-light/70 hover:text-cyber-purple transition-colors"
                        onMouseEnter={() => window.playSound?.('hover')}
                        onClick={() => window.playSound?.('click')}
                      >
                        <Github size={16} />
                      </a>
                    )}
                    
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyber-light/70 hover:text-cyber-red transition-colors"
                      onMouseEnter={() => window.playSound?.('hover')}
                      onClick={() => window.playSound?.('click')}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Hover effect */}
              <div className={`absolute inset-0 border-2 border-cyber-red/0 transition-all duration-300 pointer-events-none ${
                hoveredId === project.id ? 'border-cyber-red/50' : ''
              }`}></div>
              
              {/* Bottom glow effect */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-cyber-red transition-all duration-500 ${
                hoveredId === project.id ? 'opacity-50' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>
        
        {/* Featured Project */}
        <div className="mt-12 cyber-panel relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 bg-cyber-red/20 text-xs text-cyber-light">FEATURED PROJECT</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-futura font-bold mb-4 flex items-center text-cyber-blue">
                <Lock className="mr-2" size={24} />
                <span>SECURE ACCESS GATEWAY</span>
              </h2>
              
              <p className="text-cyber-light/80 mb-4">
                A next-generation zero-trust architecture implementation with context-aware access controls and real-time threat intelligence integration. Designed for enterprise environments with strict compliance requirements.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-start">
                  <Shield size={16} className="mr-2 text-cyber-purple mt-0.5" />
                  <div>
                    <h3 className="text-cyber-purple text-sm">Advanced Security Features</h3>
                    <p className="text-xs text-cyber-light/70">Multi-factor authentication with biometric verification and behavioral analysis</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Server size={16} className="mr-2 text-cyber-blue mt-0.5" />
                  <div>
                    <h3 className="text-cyber-blue text-sm">Scalable Architecture</h3>
                    <p className="text-xs text-cyber-light/70">Microservices-based system with Kubernetes orchestration for high availability</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Eye size={16} className="mr-2 text-cyber-green mt-0.5" />
                  <div>
                    <h3 className="text-cyber-green text-sm">Threat Monitoring</h3>
                    <p className="text-xs text-cyber-light/70">Real-time traffic analysis with AI-powered anomaly detection</p>
                  </div>
                </div>
              </div>
              
              <button 
                className="cyber-button flex items-center"
                onMouseEnter={() => window.playSound?.('hover')}
                onClick={() => window.playSound?.('click')}
              >
                <span>VIEW PROJECT DETAILS</span>
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
            
            <div className="relative overflow-hidden h-64 md:h-auto scanner-effect">
              <img 
                src="/placeholder.svg" 
                alt="Secure Access Gateway" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
