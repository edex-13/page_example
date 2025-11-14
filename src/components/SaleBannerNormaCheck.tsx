
import React from 'react';


const SaleBannerPowble: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-powble-darkGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
          <div className="col-span-1 flex flex-col items-center justify-center animate-reveal">
            <img src="/flow_norma_check.png" alt="Powble Flow" className="min-w-[300px] max-w-[350px] object-cover" width={1000} height={1000} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleBannerPowble;
