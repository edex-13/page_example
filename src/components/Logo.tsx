
import React from 'react';


const Logo: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
  isScrolled = false
  return (
    <div className="flex items-center">
      <div className={`cursor-pointer font-bold text-2xl flex flex-row items-center gap-2 ${isScrolled ? 'text-powble-white' : 'text-background'}`} onClick={()=>{window.location.href = '/'}}>
        <img src="/icon.png" alt="Powble" width={48} height={48} className={`rounded-full ${!isScrolled ? 'invert' : ''}`} />
        <span>Powble</span>
      </div>
    </div>
  );
};

export default Logo;
