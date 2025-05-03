
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="font-bold text-2xl text-powble-black">
        <span>Pow</span>
        <span className="text-powble-black bg-powble-lightGray px-1 rounded-sm">ble</span>
        <span className="text-xs align-top">.com</span>
      </div>
    </div>
  );
};

export default Logo;
