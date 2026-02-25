import { ReactNode } from 'react';
import ScrollReveal from './ScrollReveal';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="bg-navy text-primary-foreground pt-32 pb-20">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">{subtitle}</p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PageHeader;
