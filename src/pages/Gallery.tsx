import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight, X } from 'lucide-react';

const categories = [
  'All',
  'Sports',
  'Yoga & Meditation',
  'Arts & Creativity',
  'Facilities',
  'Events',
  'Student Activities',
];

const images = [
  { src: '/sports.jpg', alt: 'Sports activities', category: 'Sports' },
  { src: '/gallery-yoga.jpg', alt: 'Yoga session', category: 'Yoga & Meditation' },
  { src: '/gallery-arts.png', alt: 'Art class', category: 'Arts & Creativity' },
  { src: '/gallery-events.jpg', alt: 'School events', category: 'Events' },
  { src: '/gallery-facilities.jpg', alt: 'Facilities', category: 'Facilities' },
  { src: '/gallery-students.jpg', alt: 'Students', category: 'Student Activities' },
  { src: '/about-school.jpg', alt: 'Learning activities', category: 'Student Activities' },
  { src: '/academics.jpg', alt: 'Smart classroom', category: 'Facilities' },
  { src: '/life-skills-1.jpg', alt: 'Leadership', category: 'Events' },
  { src: '/life-skills-2.jpg', alt: 'Community event', category: 'Student Activities' },
  { src: '/life-skills-3.jpg', alt: 'Creative activities', category: 'Arts & Creativity' },
  { src: '/life-skills-4.jpg', alt: 'Achievement celebration', category: 'Events' },
];

const Gallery = () => {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    active === 'All'
      ? images
      : images.filter((img) => img.category === active);

  return (
    <div>
      {/* ✅ Header Background from public */}
      <PageHeader
        title="Our"
        titleHighlight="Gallery"
        subtitle="Explore life at Lumbini Smart School through our lens"
        backgroundImage="/gallery-arts.png"
      />

      <section className="py-20">
        <div className="container mx-auto px-6">

          {/* Filter Buttons */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active === cat
                    ? 'bg-navy text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:bg-muted'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <ScrollReveal key={`${img.src}-${i}`} delay={i * 50}>
                <div
                  className="group relative rounded-lg overflow-hidden cursor-pointer aspect-square"
                  onClick={() => setLightbox(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <ArrowRight
                      size={24}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Dark Professional Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white"
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