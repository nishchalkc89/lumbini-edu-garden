import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import { Dumbbell, Heart, Apple, Activity, Trophy, Sun } from 'lucide-react';

const sportsFeatures = [
  {
    icon: Dumbbell,
    title: 'Futsal Ground',
    desc: 'A professional-grade futsal court for competitive and recreational play, building teamwork and physical fitness.',
  },
  {
    icon: Heart,
    title: 'Yoga & Meditation',
    desc: 'Daily yoga and mindfulness sessions that develop focus, emotional balance, and inner peace.',
  },
  {
    icon: Apple,
    title: 'Nutrition Policy',
    desc: 'A comprehensive nutrition program ensuring healthy meals and educating students about balanced diets.',
  },
  {
    icon: Activity,
    title: 'Physical Development',
    desc: 'Age-appropriate physical training programs designed to build strength, coordination, and endurance.',
  },
  {
    icon: Trophy,
    title: 'Competitive Sports',
    desc: 'Inter-school tournaments and athletic meets that nurture sportsmanship and competitive spirit.',
  },
  {
    icon: Sun,
    title: 'Outdoor Activities',
    desc: 'Nature walks, adventure camps, and outdoor education experiences that connect students with the environment.',
  },
];

const Sports = () => {
  return (
    <div>
      {/* ✅ Background from public */}
      <PageHeader
        title="Sports &"
        titleHighlight="Wellness"
        subtitle="Building healthy bodies and resilient minds"
        backgroundImage="/sports.jpg"
      />

      <section className="py-20">
        <div className="container mx-auto px-6">

          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

            <ScrollReveal>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/sports.jpg"
                  alt="Students playing sports"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2 className="font-display text-3xl font-bold text-navy mb-6">
                Holistic Physical Growth
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Physical wellness is a cornerstone of our educational philosophy. We believe healthy bodies support healthy minds.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our comprehensive sports and wellness program combines structured athletics with mindfulness practices, ensuring balanced development.
              </p>
            </ScrollReveal>

          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {sportsFeatures.map((f, i) => (
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

          {/* Bottom Image */}
          <ScrollReveal>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/gallery-yoga.jpg"
                alt="Yoga and meditation"
                className="w-full h-[350px] object-cover"
              />
            </div>
          </ScrollReveal>

        </div>
      </section>
    </div>
  );
};

export default Sports;