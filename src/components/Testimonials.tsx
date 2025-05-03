
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  delay?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, company, delay = 0 }) => (
  <Card className={`border border-powble-darkGray shadow-md hover:shadow-lg transition-all duration-300 animate-reveal bg-powble-black`} style={{animationDelay: `${delay}ms`}}>
    <CardContent className="p-6">
      <p className="text-powble-white mb-6 italic">"{quote}"</p>
      <div className="font-semibold text-powble-white">{author}</div>
      <div className="text-sm text-powble-darkGray">{company}</div>
    </CardContent>
  </Card>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-powble-darkGray">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-powble-white">
          Community Impressions
        </h2>
        <p className="text-powble-white text-center max-w-2xl mx-auto mb-12">
          See what our clients have to say about how Powble has transformed their power system design process.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial
            quote="Our design process shortened from 10 to 3 hours. Powble's AI tools have been a game changer for our workflow efficiency."
            author="Sarah Johnson"
            company="ElectraTech Systems"
            delay={0}
          />
          
          <Testimonial
            quote="We can generate quotations and ticket responses easily, avoiding bottlenecks in our organization that used to slow us down."
            author="Michael Chen"
            company="PowerGrid Solutions"
            delay={100}
          />
          
          <Testimonial
            quote="The component selection tool has saved us from costly mistakes. It's like having an expert engineer always available to consult."
            author="David Rodriguez"
            company="Integrate Energy"
            delay={200}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
