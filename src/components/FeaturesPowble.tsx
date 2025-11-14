
import React from 'react';


const FeaturesPowble: React.FC = () => {
  const containerStyle = "flex flex-row items-center justify-start gap-x-3";
  const styleNumber = "bg-powble-white text-powble-black p-2 rounded-full w-8 h-8 flex items-center justify-center hover:bg-green-500 transition-all duration-300";
  const contentStyle = "flex flex-col items-start justify-start gap-0";
  const titleStyle = "text-xl font-bold mb-0 text-powble-white";
  const descriptionStyle = "text-powble-foreground text-sm";
  return (
    <section id="features" className="py-16 md:py-24 bg-powble-darkGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-8">
          <div className="col-span-1 flex flex-col items-center justify-center animate-reveal">
            <img src="/flow_norma_check.png" alt="Powble Flow" className="min-w-[300px] max-w-[350px] object-cover" width={1000} height={1000} />
          </div>
          <div className="col-span-1 flex flex-col items-center justify-start md:max-w-[550px]">
            <h2 className="text-2xl font-bold mb-3 text-powble-white">Powble can boost your design process through project assessment and ticket generation in least of one minute</h2>
            <div className="list-disc list-inside flex flex-col gap-2 justify-start items-start w-full">
              <div className={containerStyle}>
                <div className={styleNumber}>
                  1
                </div>
                <div className={contentStyle}>
                  <h3 className={titleStyle}>Project Assessment</h3>
                  <p className={descriptionStyle}>Powble will assess your project and generate a list of tickets based on the project requirements.</p>
                </div>
              </div>

              <div className={containerStyle}>
                <div className={styleNumber}>
                  2
                </div>
                <div className={contentStyle}>
                  <h3 className={titleStyle}>Ticket Generation</h3>
                  <p className={descriptionStyle}>Powble will generate a list of tickets based on the project requirements.</p>
                </div>
              </div>

              <div className={containerStyle}>
                <div className={styleNumber}>
                  3
                </div>
                <div className={contentStyle}>
                  <h3 className={titleStyle}>Automated Response</h3>
                  <p className={descriptionStyle}>Powble will generate a response to the ticket based on the project requirements.</p>
                </div>
              </div>

              <div className={containerStyle}>
                <div className={styleNumber}>
                  4
                </div>
                <div className={contentStyle}>
                  <h3 className={titleStyle}>Automated Response</h3>
                  <p className={descriptionStyle}>Powble will generate a response to the ticket based on the project requirements.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesPowble;
