import { ReactNode } from 'react';
import ScrollReveal from './ScrollReveal';

interface PageHeaderProps {
  title: string;
  titleHighlight?: string;
  subtitle: string;
  backgroundImage?: string;
  children?: ReactNode;
}

const PageHeader = ({
  title,
  titleHighlight,
  subtitle,
  backgroundImage,
}: PageHeaderProps) => {
  return (
    <section className="relative text-primary-foreground pt-32 pb-20 overflow-hidden">

      {/* ✅ Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage || '/hero-school.jpg'}
          alt="Page Header Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            {title}
            {titleHighlight && (
              <span className="text-gold"> {titleHighlight}</span>
            )}
          </h1>

          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PageHeader;