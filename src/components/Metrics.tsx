
import React from 'react';

interface MetricCardProps {
  value: string;
  label: string;
  suffix?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, label, suffix = "" }) => (
  <div className="bg-powble-white text-powble-black p-8 rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
    <div className="text-4xl md:text-5xl font-bold mb-2">{value}{suffix}</div>
    <div className="text-powble-darkGray font-medium uppercase tracking-wider">{label}</div>
  </div>
);

const Metrics: React.FC = () => {
  return (
    <section id="metrics" className="py-16 md:py-24 bg-powble-black">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-powble-white">
          Our Impact in Numbers
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard value="500" label="Projects Completed" suffix="+" />
          <MetricCard value="98" label="Tickets Fixed Daily" suffix="%" />
          <MetricCard value="2,500" label="Happy Customers" suffix="+" />
          <MetricCard value="70" label="Time Saved" suffix="%" />
        </div>
      </div>
    </section>
  );
};

export default Metrics;
