import React from 'react';
import logoImage from '../../assets/images/Virtual Tech Box (1) (1).png';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <img 
        src={logoImage} 
        alt="Virtual Tech Box Logo" 
        className="w-10 h-10 rounded-lg"
      />
      <span className="text-xl font-semibold hidden sm:block">Virtual Tech Box</span>
    </div>
  );
};

export default Logo;