import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight, X } from 'lucide-react';

import sportsImg from '@/assets/sports.jpg';
import yogaImg from '@/assets/gallery-yoga.jpg';
import artsImg from '@/assets/gallery-arts.jpg';
import eventsImg from '@/assets/gallery-events.jpg';
import facilitiesImg from '@/assets/gallery-facilities.jpg';
import studentsImg from '@/assets/gallery-students.jpg';
import aboutImg from '@/assets/about-school.jpg';
import academicsImg from '@/assets/academics.jpg';
import lifeSkills1 from '@/assets/life-skills-1.jpg';
import lifeSkills2 from '@/assets/life-skills-2.jpg';
import lifeSkills3 from '@/assets/life-skills-3.jpg';
import lifeSkills4 from '@/assets/life-skills-4.jpg';

const categories = ['All', 'Sports', 'Yoga & Meditation', 'Arts & Creativity', 'Facilities', 'Events', 'Student Activities'];

const images = [
  { src: sportsImg, alt: 'Sports activities', category: 'Sports' },
  { src: yogaImg, alt: 'Yoga session', category: 'Yoga & Meditation' },
  { src: artsImg, alt: 'Art class', category: 'Arts & Creativity' },
  { src: eventsImg, alt: 'School events', category: 'Events' },
  { src: facilitiesImg, alt: 'Facilities', category: 'Facilities' },
  { src: studentsImg, alt: 'Students', category: 'Student Activities' },
  { src: aboutImg, alt: 'Learning activities', category: 'Student Activities' },
  { src: academicsImg, alt: 'Smart classroom', category: 'Facilities' },
  { src: lifeSkills1, alt: 'Leadership', category: 'Events' },
  { src: lifeSkills2, alt: 'Community event', category: 'Student Activities' },
  { src: lifeSkills3, alt: 'Creative activities', category: 'Arts & Creativity' },
  { src: lifeSkills4, alt: 'Achievement celebration', category: 'Events' },
];

const Gallery = () => {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === 'All' ? images : images.filter((img) => img.category === active);

  return (
    <div>
      <PageHeader title="Gallery" subtitle="Explore life at Lumbini Smart School through our lens" />

      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Filter buttons */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    active === cat
                      ? 'bg-navy text-primary-foreground'
                      : 'bg-secondary text-muted-foreground hover:bg-muted'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <ScrollReveal key={`${img.src}-${i}`} delay={i * 50}>
                <div
                  className="group relative img-zoom rounded-lg overflow-hidden cursor-pointer aspect-square"
                  onClick={() => setLightbox(img.src)}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-300 flex items-center justify-center">
                    <ArrowRight size={24} className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-primary-foreground"
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
