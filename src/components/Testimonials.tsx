
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { CarouselContent } from './ui/carousel';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  delay?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, company, delay = 0 }) => (
  <Card className={`border border-powble-darkGray shadow-md hover:shadow-lg transition-all duration-300 animate-reveal bg-powble-black`} style={{ animationDelay: `${delay}ms` }}>
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

        <div className="w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              <CarouselItem className="pl-1 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Testimonial
                    quote="Review committees can be a pain, but Powble's AI tools have made it easier for us to review and approve designs."
                    author="Andres Penaranda"
                    company="SoftSolar"
                    delay={0}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Testimonial
                    quote="Urgent quotation requests are a thing of the past. Powble's AI tools have made it easier for us to generate quotations and respond to urgent requests."
                    author="Camilo Estrada"
                    company="Green Energy"
                    delay={100}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Testimonial
                    quote="The component selection tool has saved us from costly mistakes. It's like having an expert engineer always available to consult."
                    author="Juan Perez"
                    company="PowerGrid Solutions"
                    delay={200}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Testimonial
                    quote="Report generation tools permit us to employ the time to assess measurements into customers and field tasks."
                    author="Andrea Carrillo"
                    company="PowerGrid Solutions"
                    delay={200}
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
