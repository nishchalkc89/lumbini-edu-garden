import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight } from 'lucide-react';
import lifeSkills1 from '@/assets/life-skills-1.jpg';
import lifeSkills2 from '@/assets/life-skills-2.jpg';
import lifeSkills3 from '@/assets/life-skills-3.jpg';
import lifeSkills4 from '@/assets/life-skills-4.jpg';

const programs = [
  { img: lifeSkills1, title: 'Student Leadership Programs', desc: 'Our leadership programs empower students with decision-making skills, public speaking confidence, and the ability to lead by example. Through student councils, peer mentoring, and leadership workshops, young leaders emerge ready to make a difference.' },
  { img: lifeSkills2, title: 'Community Awareness Events', desc: 'We cultivate social consciousness through community service projects, environmental campaigns, tree planting drives, and awareness programs. Students learn the value of giving back and become responsible citizens of tomorrow.' },
  { img: lifeSkills3, title: 'Creative Activities', desc: 'From art exhibitions to creative writing workshops, drama performances to science fairs, our creative programs nurture imagination and self-expression. Every student finds their unique voice and channel for creativity.' },
  { img: lifeSkills4, title: 'Achievement Celebrations', desc: 'We believe in celebrating every milestone — academic, athletic, artistic, and personal. Regular award ceremonies, achievement walls, and recognition events motivate students to strive for excellence in all they do.' },
];

const LifeSkills = () => {
  return (
    <div>
      <PageHeader title="Life Skills & Community" subtitle="Developing well-rounded individuals for a better world" />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {programs.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 100}>
                <div className="group bg-card rounded-lg overflow-hidden shadow-sm hover-lift">
                  <div className="img-zoom h-64 overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-xl font-semibold text-navy mb-3">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                    <ArrowRight size={16} className="text-gold arrow-slide" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeSkills;
