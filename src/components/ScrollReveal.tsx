import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean; // allow repeat animation
}

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  once = true,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeoutRef.current = window.setTimeout(() => {
              entry.target.classList.add('revealed');
            }, delay);

            if (once) observer.unobserve(entry.target);
          } else {
            if (!once) {
              entry.target.classList.remove('revealed');
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [delay, once]);

  return (
    <div ref={ref} className={`section-reveal ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;