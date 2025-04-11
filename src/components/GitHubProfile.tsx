
import React from 'react';
import { useGitHubData } from '@/hooks/useGitHubData';
import { Code, Star, GitFork, Clock, ExternalLink } from 'lucide-react';

interface GitHubProfileProps {
  username: string;
}

const GitHubProfile = ({ username }: GitHubProfileProps) => {
  const { user, repos, isLoading, error } = useGitHubData(username);

  if (isLoading) {
    return (
      <div className="cyber-panel p-6 animate-pulse">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-cyber-dark/70 mr-3"></div>
          <div className="w-40 h-4 bg-cyber-dark/70"></div>
        </div>
        <div className="w-full h-4 bg-cyber-dark/70 mb-3"></div>
        <div className="w-3/4 h-4 bg-cyber-dark/70"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="cyber-panel p-6 text-cyber-red">
        <p>Failed to load GitHub profile: {error}</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="cyber-panel relative overflow-hidden">
      <div className="absolute top-0 right-0 p-2 bg-cyber-blue/20 text-xs text-cyber-light">GITHUB PROFILE</div>
      
      <div className="p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
          <div className="w-20 h-20 cyber-border mb-4 md:mb-0 md:mr-6 overflow-hidden relative scanner-effect">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyber-purple/30 to-cyber-blue/30"></div>
            <img 
              src={user.avatar_url} 
              alt={`${user.name || user.login}'s GitHub avatar`} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center md:text-left">
            <h2 className="text-xl font-futura font-bold text-cyber-purple">{user.name || user.login}</h2>
            <p className="text-cyber-light/70 text-sm">{user.bio}</p>
            
            <div className="flex justify-center md:justify-start mt-3 space-x-4">
              <div className="text-xs">
                <span className="text-cyber-blue font-bold">{user.public_repos}</span>
                <span className="text-cyber-light/50 ml-1">Repos</span>
              </div>
              <div className="text-xs">
                <span className="text-cyber-blue font-bold">{user.followers}</span>
                <span className="text-cyber-light/50 ml-1">Followers</span>
              </div>
              <div className="text-xs">
                <span className="text-cyber-blue font-bold">{user.following}</span>
                <span className="text-cyber-light/50 ml-1">Following</span>
              </div>
            </div>
            
            <a 
              href={user.html_url}
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center text-xs text-cyber-blue hover:text-cyber-purple transition-colors"
              onMouseEnter={() => window.playSound?.('hover')}
              onClick={() => window.playSound?.('click')}
            >
              <span>View GitHub Profile</span>
              <ExternalLink size={12} className="ml-1" />
            </a>
          </div>
        </div>
        
        {repos.length > 0 && (
          <div>
            <h3 className="text-lg font-futura font-bold mb-3 border-b border-cyber-blue/30 pb-2 flex items-center">
              <Code size={18} className="mr-2 text-cyber-blue" />
              <span>Recent Repositories</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {repos.map(repo => (
                <div 
                  key={repo.id}
                  className="border border-cyber-blue/30 bg-cyber-dark/40 p-3 hover:border-cyber-blue/60 transition-all duration-300"
                  onMouseEnter={() => window.playSound?.('hover')}
                >
                  <div className="flex justify-between items-start">
                    <h4 className="text-cyber-blue text-sm font-medium truncate">{repo.name}</h4>
                    <a 
                      href={repo.html_url}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyber-light/70 hover:text-cyber-purple transition-colors"
                      onClick={() => window.playSound?.('click')}
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  
                  <p className="text-cyber-light/60 text-xs mt-1 h-8 overflow-hidden">
                    {repo.description || "No description provided"}
                  </p>
                  
                  <div className="flex justify-between mt-2 text-xs">
                    {repo.language && (
                      <span className="flex items-center text-cyber-green">
                        <span className="w-2 h-2 rounded-full bg-cyber-green mr-1"></span>
                        {repo.language}
                      </span>
                    )}
                    
                    <div className="flex space-x-3">
                      <span className="flex items-center text-cyber-light/50">
                        <Star size={12} className="mr-1" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center text-cyber-light/50">
                        <GitFork size={12} className="mr-1" />
                        {repo.forks_count}
                      </span>
                      <span className="flex items-center text-cyber-light/50">
                        <Clock size={12} className="mr-1" />
                        {new Date(repo.updated_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GitHubProfile;
