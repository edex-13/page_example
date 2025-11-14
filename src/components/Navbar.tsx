
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const atagStyle = "text-white hover:text-powble-accent transition-colors";
  const navItemStyle = "text-white hover:text-powble-accent transition-colors";
  const buttonStyle = "bg-powble-accent text-white hover:bg-powble-accent/90";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${
        isScrolled 
          ? 'bg-powble-gray-950/95 backdrop-blur-lg shadow-lg border-b border-powble-gray-800 py-3' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="transform transition-all duration-300 hover:scale-105">
          <Logo isScrolled={isScrolled} />
        </div>

        <div className="hidden md:flex space-x-20">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-row gap-3">
              <NavigationMenuItem>
                <NavigationMenuLink href="#productos" className={`${atagStyle} transition-all duration-300 hover:scale-105 font-medium`}>
                  Productos
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#auditoria" className={`${atagStyle} transition-all duration-300 hover:scale-105 font-medium`}>
                  Auditoría IA
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#chat" className={`${atagStyle} transition-all duration-300 hover:scale-105 font-medium`}>
                  Chat Normativo
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#testimonios" className={`${atagStyle} transition-all duration-300 hover:scale-105 font-medium`}>
                  Testimonios
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#contacto" className={`${atagStyle} transition-all duration-300 hover:scale-105 font-medium`}>
                  Contacto
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Button className={`${buttonStyle} transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold`}>
          Comenzar
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
