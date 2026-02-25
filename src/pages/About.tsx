import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import { Target, Eye, Compass, Star } from 'lucide-react';
import aboutImg from '@/assets/about-school.jpg';

const values = [
  { icon: Target, title: 'Our Mission', desc: 'To provide a nurturing and stimulating learning environment where every child develops the skills, confidence, and character to succeed in a rapidly changing world.' },
  { icon: Eye, title: 'Our Vision', desc: 'To be a leading center of educational excellence, recognized for innovative task-based learning, holistic development, and community engagement.' },
  { icon: Compass, title: 'Our Philosophy', desc: 'We believe that children learn best through doing. Our task-based approach transforms every lesson into a meaningful experience, connecting knowledge with real-world application.' },
  { icon: Star, title: 'Our Goals', desc: 'To foster critical thinking, creativity, leadership, and social responsibility in every student, preparing them to become compassionate global citizens.' },
];

const About = () => {
  return (
    <div>
      <PageHeader title="About" titleHighlight="Us" subtitle="Discover the story, vision, and values behind Lumbini Smart School" backgroundImage={aboutImg} />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={aboutImg} alt="Students learning" className="w-full h-[400px] object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="font-display text-3xl font-bold text-navy mb-6">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lumbini Smart School is a progressive educational institution committed to redefining how children learn. Located in the historic region of Lumbini, Nepal, we combine modern pedagogy with timeless values.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our task-based learning approach means students don't just memorize — they explore, create, and solve. Every classroom is a workshop, every project a journey of discovery.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a team of passionate educators, world-class facilities, and a curriculum designed for the 21st century, we prepare students not just for exams, but for life.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-navy text-center mb-14">Our Core Values</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="bg-card p-8 rounded-lg shadow-sm hover-lift">
                  <v.icon size={32} className="text-gold mb-4" />
                  <h3 className="font-display text-xl font-semibold text-navy mb-3">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
