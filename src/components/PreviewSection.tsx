import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface PreviewSectionProps {
  id?: string;
  image: string;
  imageAlt: string;
  sectionTitle?: string;
  sectionTitleHighlight?: string;
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
  sectionTitle,
  sectionTitleHighlight,
  heading,
  description,
  buttonLabel,
  buttonLink,
  reversed = false,
  children,
  bgClass = 'bg-white',
}: PreviewSectionProps) => {
  return (
    <section id={id} className={`py-20 lg:py-28 ${bgClass}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <ScrollReveal className={reversed ? 'lg:order-2' : 'lg:order-1'}>
            <div className="rounded-lg overflow-hidden shadow-lg group">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-[350px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={200} className={reversed ? 'lg:order-1' : 'lg:order-2'}>

            {sectionTitle && (
              <h2 className="font-display text-sm font-semibold tracking-widest uppercase text-gold mb-3">
                {sectionTitle}
                {sectionTitleHighlight && (
                  <span className="text-navy"> {sectionTitleHighlight}</span>
                )}
              </h2>
            )}

            <h3 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-6 leading-tight">
              {heading}
            </h3>

            <p className="text-muted-foreground text-base md:text-lg leading-loose text-justify">
              {description}
            </p>

            {/* Automatic spacing for icons / extra content */}
            {children && (
              <div className="mt-8 pt-4 border-t border-gray-200">
                {children}
              </div>
            )}

            <Link
              to={buttonLink}
              className="group inline-flex items-center gap-2 bg-navy text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-navy-dark transition-all duration-300 mt-8"
            >
              {buttonLabel}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default PreviewSection;