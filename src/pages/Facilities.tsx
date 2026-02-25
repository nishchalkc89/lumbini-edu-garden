import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import { Monitor, Wrench, BookMarked, FlaskConical, Palette, Music, Wifi, Library } from 'lucide-react';
import facilitiesImg from '@/assets/facilities.jpg';

const facilities = [
  { icon: Monitor, title: 'Smart Boards', desc: 'Every classroom equipped with interactive smart boards for immersive, multimedia-enhanced lessons.' },
  { icon: Wrench, title: 'Maker Room', desc: 'A dedicated space for hands-on building, robotics, coding, and creative engineering projects.' },
  { icon: BookMarked, title: 'Self Study Area', desc: 'Quiet, well-lit study zones where students can focus on independent learning and research.' },
  { icon: FlaskConical, title: 'Thematic Labs', desc: 'Specialized science and technology labs designed around thematic learning experiences.' },
  { icon: Palette, title: 'Art Studio', desc: 'A fully-equipped studio for painting, sculpture, digital art, and creative expression.' },
  { icon: Music, title: 'Dance & Music Rooms', desc: 'Dedicated spaces for performing arts with professional sound systems and rehearsal areas.' },
  { icon: Wifi, title: 'Digital Infrastructure', desc: 'High-speed internet, cloud-based resources, and digital tools accessible across the campus.' },
  { icon: Library, title: 'Modern Library', desc: 'A rich collection of books, journals, and digital resources supporting all academic levels.' },
];

const Facilities = () => {
  return (
    <div>
      <PageHeader title="Our" titleHighlight="Facilities" subtitle="World-class infrastructure designed to inspire learning" backgroundImage={facilitiesImg} />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <ScrollReveal>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={facilitiesImg} alt="School facilities" className="w-full h-[400px] object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="font-display text-3xl font-bold text-navy mb-6">Smart Infrastructure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our campus is thoughtfully designed to provide the ideal environment for learning, creativity, and physical development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From cutting-edge technology to serene study spaces, every corner of Lumbini Smart School supports our mission of holistic education.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 60}>
                <div className="bg-card p-6 rounded-lg shadow-sm hover-lift h-full text-center">
                  <f.icon size={28} className="text-gold mb-3 mx-auto" />
                  <h3 className="font-display text-base font-semibold text-navy mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
