
import React from 'react';

interface MetricCardProps {
  value: string;
  label: string;
  suffix?: string;
  duration?: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, label, suffix = "", duration = 2000 }) => {
  const [count, setCount] = React.useState(0);
  const targetValue = parseInt(value.replace(/,/g, ''));
  
  React.useEffect(() => {
    let startTimestamp: number;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      
      const currentCount = Math.min(
        Math.floor((progress / duration) * targetValue),
        targetValue
      );

      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetValue]);

  const formattedCount = count.toLocaleString();

  return (
    <div className="bg-powble-white text-powble-black p-8 rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
      <div className="text-4xl md:text-5xl font-bold mb-2">{formattedCount}{suffix}</div>
      <div className="text-powble-darkGray font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
};

const Metrics: React.FC = () => {
  return (
    <section id="metrics" className="py-16 md:py-24 bg-powble-black">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-powble-white">
          Our Impact in Numbers
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard value="98" label="Projects Assessed" suffix="+" duration={750} />
          <MetricCard value="270" label="Tickets Fixed Daily" suffix="" duration={1000} />
          <MetricCard value="170" label="Documents Generated" suffix="+" duration={1500} />
          <MetricCard value="550" label="Products Selected" suffix="+" duration={1250} />
        </div>
      </div>
    </section>
  );
};

export default Metrics;
