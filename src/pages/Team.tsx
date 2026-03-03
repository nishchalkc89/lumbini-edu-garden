import PageHeader from '@/components/PageHeader';
import TeamCard from '@/components/TeamCard';
import ScrollReveal from '@/components/ScrollReveal';
import { teamMembers } from '@/data/teamMembers';

const Team = () => {
  return (
    <div>
      <PageHeader
        title="Our Team"
        subtitle="Meet the dedicated educators and staff who make Lumbini Smart School a place of excellence."
        backgroundImage="/facilities.jpg"
      />

      <section className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-2">
                Meet Our <span className="text-navy">Team</span>
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">
                Experienced & Passionate Educators
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our team of qualified teachers and support staff are committed to providing
                the best learning experience for every student.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 60}>
                <TeamCard member={member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
