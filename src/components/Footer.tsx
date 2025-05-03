
import React from 'react';
import Logo from './Logo';
import { Package, Network, Database, Wrench, Settings } from 'lucide-react';

interface FooterColumnProps {
  title: string;
  items: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items }) => (
  <div>
    <h3 className="font-semibold text-lg mb-4 text-powble-white">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <a 
            href={item.href} 
            className="text-powble-darkGray hover:text-powble-white transition-colors flex items-center"
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-powble-black pt-16 pb-8 border-t border-powble-darkGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo />
            <p className="mt-4 text-powble-darkGray">
              Advanced AI-powered tools for power system design and facility management.
            </p>
          </div>
          
          <FooterColumn 
            title="Product" 
            items={[
              { label: "Features", href: "#features", icon: <Package size={16} className="text-powble-white" /> },
              { label: "AI Tools", href: "#", icon: <Settings size={16} className="text-powble-white" /> },
              { label: "Solutions", href: "#", icon: <Wrench size={16} className="text-powble-white" /> },
              { label: "Pricing", href: "#", icon: <Database size={16} className="text-powble-white" /> },
            ]}
          />
          
          <FooterColumn 
            title="Network" 
            items={[
              { label: "Partners", href: "#", icon: <Network size={16} className="text-powble-white" /> },
              { label: "Community", href: "#", icon: <Network size={16} className="text-powble-white" /> },
              { label: "Events", href: "#" },
              { label: "Blog", href: "#" },
            ]}
          />
          
          <FooterColumn 
            title="Resources" 
            items={[
              { label: "Documentation", href: "#" },
              { label: "Support", href: "#" },
              { label: "API", href: "#" },
              { label: "Contact", href: "#" },
            ]}
          />
        </div>
        
        <div className="border-t border-powble-darkGray pt-8 text-center text-powble-darkGray">
          <p>© {currentYear} Powble.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
