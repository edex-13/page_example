
import React from 'react';
import { ClockArrowDown, Package, Ticket, BookCheck } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-powble-black p-6 rounded-lg shadow-lg border border-powble-darkGray transition-all duration-300 hover:shadow-xl">
    <div className="flex items-center justify-start mb-4 gap-4">
      <div className="bg-powble-white text-powble-black p-3 rounded-full w-12 h-12 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-powble-white">{title}</h3>
    </div>

    <p className="text-powble-foreground text-sm">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-powble-darkGray">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-powble-white">
          Access to Novel AI Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FeatureCard
            icon={<ClockArrowDown size={24} />}
            title="Reduce Design Time"
            description="Our AI tools help you reduce design time by fast design generation and optimization based on your requirements."
          />
          <FeatureCard
            icon={<Ticket size={24} />}
            title="Ticket Response"
            description="Automate and optimize your issues list with AI-powered solutions that reduce response time."
          />
          <FeatureCard
            icon={<Package size={24} />}
            title="Component Selection"
            description="Get AI recommendations to select the right components for your power system projects based on requirements."
          />
          <FeatureCard
            icon={<BookCheck size={24} />}
            title="Automate Documents Generation"
            description="Our AI tools help you generate documents for your power system projects based on your requirements, reducing the time and effort."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
