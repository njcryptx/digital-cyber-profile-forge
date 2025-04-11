
import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';

const Achievements = () => {
  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-futura font-bold mb-6 text-cyber-light flex items-center">
          <Award className="mr-2 text-cyber-purple" size={32} />
          <span className="text-gradient">ACHIEVEMENTS</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Coming soon - will be filled with achievements */}
          <div className="cyber-panel h-64 flex flex-col items-center justify-center">
            <Trophy className="text-cyber-blue w-16 h-16 mb-4" />
            <h2 className="text-xl font-futura font-bold text-cyber-light">ACHIEVEMENTS LOADING...</h2>
            <p className="text-cyber-light/70 mt-2">Sync in progress...</p>
          </div>
          
          <div className="cyber-panel h-64 flex flex-col items-center justify-center">
            <Star className="text-cyber-green w-16 h-16 mb-4" />
            <h2 className="text-xl font-futura font-bold text-cyber-light">DATA ENCRYPTED</h2>
            <p className="text-cyber-light/70 mt-2">Access level: Top Secret</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
