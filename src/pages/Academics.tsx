import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import { BookOpen, Monitor, Brain, Users, GraduationCap, Lightbulb } from 'lucide-react';

const features = [
  { icon: BookOpen, title: 'Activity-Based Learning', desc: 'Students learn by doing — through experiments, projects, and real-world problem-solving that makes knowledge stick.' },
  { icon: Monitor, title: 'Smart Teaching Methods', desc: 'Interactive smart boards, multimedia content, and digital tools bring lessons to life in engaging and memorable ways.' },
  { icon: Brain, title: 'Psychological Support', desc: 'Dedicated counselors and a supportive environment ensure every student\'s emotional and psychological well-being.' },
  { icon: Users, title: 'Expert Guest Classes', desc: 'Regular sessions with industry professionals, artists, and thought leaders expand students\' horizons beyond the classroom.' },
  { icon: GraduationCap, title: 'Comprehensive Curriculum', desc: 'A balanced curriculum covering sciences, humanities, arts, and technology, aligned with national and international standards.' },
  { icon: Lightbulb, title: 'Innovation & Creativity', desc: 'Dedicated time for creative thinking, innovation labs, and entrepreneurial projects nurture the next generation of problem-solvers.' },
];

const Academics = () => {
  return (
    <div>
      {/* 🔥 Background from public */}
      <PageHeader
        title="Our"
        titleHighlight="Academics"
        subtitle="Excellence through innovative, task-based pedagogy"
        backgroundImage="/academics.jpg"
      />

      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

            <ScrollReveal>
              <div className="rounded-lg overflow-hidden shadow-lg">
                {/* 🔥 Image from public */}
                <img
                  src="/academics.jpg"
                  alt="Smart classroom"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2 className="font-display text-3xl font-bold text-navy mb-6">
                Academic Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Lumbini Smart School, academic excellence isn't just about scores — it's about deep understanding, creative application, and lifelong curiosity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our curriculum integrates task-based learning with technology-enhanced instruction, ensuring students develop both knowledge and practical skills for the modern world.
              </p>
            </ScrollReveal>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <div className="bg-card p-8 rounded-lg shadow-sm hover-lift h-full">
                  <f.icon size={28} className="text-gold mb-4" />
                  <h3 className="font-display text-lg font-semibold text-navy mb-3">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Academics;