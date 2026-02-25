import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface PreviewSectionProps {
  id?: string;
  image: string;
  imageAlt: string;
  heading: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
  reversed?: boolean;
  children?: ReactNode;
  bgClass?: string;
}

const PreviewSection = ({
  id,
  image,
  imageAlt,
  heading,
  description,
  buttonLabel,
  buttonLink,
  reversed = false,
  children,
  bgClass = '',
}: PreviewSectionProps) => {
  return (
    <section id={id} className={`py-20 lg:py-28 ${bgClass}`}>
      <div className="container mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image */}
          <ScrollReveal className={reversed ? 'lg:order-2' : ''}>
            <div className="img-zoom rounded-lg overflow-hidden shadow-lg">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-[350px] lg:h-[450px] object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={200} className={reversed ? 'lg:order-1' : ''}>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-6 leading-tight">
              {heading}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {description}
            </p>

            {children}

            <Link
              to={buttonLink}
              className="group inline-flex items-center gap-2 bg-navy text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-navy-dark transition-colors duration-300 mt-6"
            >
              {buttonLabel}
              <ArrowRight size={16} className="arrow-slide" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
