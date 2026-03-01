import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Brain, Users, Lightbulb, Monitor, Wrench, BookMarked, FlaskConical, Palette, Dumbbell, Heart, Apple, Activity } from 'lucide-react';
import TypingText from '../components/TypingText';
import PreviewSection from '../components/PreviewSection';
import ScrollReveal from '../components/ScrollReveal';

import heroImg from '@/assets/hero-school.jpg';
import aboutImg from '@/assets/about-school.jpg';
import academicsImg from '@/assets/academics.jpg';
import facilitiesImg from '@/assets/facilities.jpg';
import sportsImg from '@/assets/sports.jpg';
import lifeSkills1 from '@/assets/life-skills-1.jpg';
import lifeSkills2 from '@/assets/life-skills-2.jpg';
import lifeSkills3 from '@/assets/life-skills-3.jpg';
import lifeSkills4 from '@/assets/life-skills-4.jpg';
import galleryYoga from '@/assets/gallery-yoga.jpg';
import galleryArts from '@/assets/gallery-arts.jpg';
import galleryEvents from '@/assets/gallery-events.jpg';
import galleryFacilities from '@/assets/gallery-facilities.jpg';
import galleryStudents from '@/assets/gallery-students.jpg';

const typingStrings = [
  'Lumbini Smart School…',
  'A Task-Based Learning Education Garden…',
  'Activity-Based • Smart Learning • Holistic Development…',
];

const academicFeatures = [
  { icon: BookOpen, label: 'Activity-Based Learning' },
  { icon: Monitor, label: 'Smart Teaching' },
  { icon: Brain, label: 'Psychological Support' },
  { icon: Users, label: 'Expert Guest Classes' },
];

const facilityItems = [
  { icon: Monitor, label: 'Smart Boards' },
  { icon: Wrench, label: 'Maker Room' },
  { icon: BookMarked, label: 'Self Study Area' },
  { icon: FlaskConical, label: 'Thematic Labs' },
  { icon: Palette, label: 'Art / Dance / Music Rooms' },
];

const lifeSkillCards = [
  { img: lifeSkills1, title: 'Student Leadership Programs', desc: 'Empowering young minds through responsibility, decision-making, and public speaking opportunities.' },
  { img: lifeSkills2, title: 'Community Awareness Events', desc: 'Building social consciousness through environmental drives, tree planting, and community service.' },
  { img: lifeSkills3, title: 'Creative Activities', desc: 'Fostering imagination and self-expression through arts, crafts, and collaborative projects.' },
  { img: lifeSkills4, title: 'Achievement Celebrations', desc: 'Recognizing excellence and effort through awards, ceremonies, and milestone celebrations.' },
];

const galleryImages = [
  { src: galleryYoga, alt: 'Yoga session' },
  { src: galleryArts, alt: 'Art class' },
  { src: galleryEvents, alt: 'School event' },
  { src: galleryFacilities, alt: 'School facilities' },
  { src: galleryStudents, alt: 'Students' },
  { src: sportsImg, alt: 'Sports activities' },
];

const Index = () => {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={heroImg} alt="Lumbini Smart School campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="animate-fade-up">
                <p className="text-sm font-medium tracking-widest uppercase text-gold mb-4">
                  Welcome to
                </p>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
                  <TypingText strings={typingStrings} />
                </h1>
                <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
                  Where every child discovers their potential through hands-on, task-based learning in a nurturing, modern environment.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/about"
                    className="group inline-flex items-center gap-2 bg-navy text-primary-foreground px-7 py-3.5 rounded-md font-medium hover:bg-navy-dark transition-colors duration-300"
                  >
                    Explore School
                    <ArrowRight size={16} className="arrow-slide" />
                  </Link>
                  <Link
                    to="/gallery"
                    className="group inline-flex items-center gap-2 border-2 border-navy text-navy px-7 py-3.5 rounded-md font-medium hover:bg-navy hover:text-primary-foreground transition-all duration-300"
                  >
                    View Gallery
                    <ArrowRight size={16} className="arrow-slide" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== ABOUT PREVIEW ===== */}
      <PreviewSection
        id="about"
        image={aboutImg}
        imageAlt="Students engaged in activity-based learning"
        sectionTitle="About"
        sectionTitleHighlight="Us"
        heading="Nurturing Tomorrow's Leaders Today"
        description="At Lumbini Smart School, we believe education goes beyond textbooks. Our task-based learning approach engages students in real-world problem solving, fostering critical thinking, creativity, and collaboration from the earliest grades."
        buttonLabel="More About Us"
        buttonLink="/about"
      />

      <div className="section-divider" />

      {/* ===== PRINCIPAL'S MESSAGE ===== */}
      <section id="principal-message" className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal className="lg:order-2">
              <div className="img-zoom rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg"
                  alt="Principal of Lumbini Smart School"
                  className="w-full h-[350px] lg:h-[450px] object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200} className="lg:order-1">
              <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-2">
                What Our <span className="text-navy">Principal Said</span>
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-6 leading-tight">
                A Message From Our Principal
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "At Lumbini Smart School, we are committed to nurturing every child's unique potential. Our vision is to create an environment where curiosity thrives, creativity flourishes, and every student feels empowered to become a responsible global citizen."
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "We believe that true education is not just about academic excellence — it is about building character, developing life skills, and inspiring a lifelong love for learning. Our dedicated team of educators works tirelessly to ensure that each child receives personalized attention and guidance."
              </p>
              <p className="text-muted-foreground leading-relaxed">
                "Together with parents and our community, we are shaping the leaders of tomorrow — one child at a time."
              </p>
              <p className="font-display text-navy font-semibold mt-6">— Principal, Lumbini Smart School</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== ACADEMICS PREVIEW ===== */}
      <section id="academics" className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="img-zoom rounded-lg overflow-hidden shadow-lg">
                <img src={academicsImg} alt="Smart classroom" className="w-full h-[350px] lg:h-[450px] object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-2">Our <span className="text-navy">Academics</span></p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-6">Academic Excellence Through Innovation</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our curriculum blends traditional academic rigor with modern pedagogical methods, ensuring every student receives a world-class education tailored to their learning style.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {academicFeatures.map((f) => (
                  <div key={f.label} className="flex items-center gap-3 p-3 rounded-md bg-card shadow-sm hover-lift">
                    <f.icon size={20} className="text-gold shrink-0" />
                    <span className="text-sm font-medium text-foreground">{f.label}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/academics"
                className="group inline-flex items-center gap-2 bg-navy text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-navy-dark transition-colors duration-300"
              >
                View Academics <ArrowRight size={16} className="arrow-slide" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== FACILITIES PREVIEW ===== */}
      <section id="facilities" className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal className="lg:order-2">
              <div className="img-zoom rounded-lg overflow-hidden shadow-lg">
                <img src={facilitiesImg} alt="Modern school facilities" className="w-full h-[350px] lg:h-[450px] object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200} className="lg:order-1">
              <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-2">Our <span className="text-navy">Facilities</span></p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-6">World-Class Facilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From smart classrooms to specialized labs, our infrastructure is designed to inspire exploration and support every dimension of student growth.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {facilityItems.map((f) => (
                  <div key={f.label} className="flex items-center gap-2 p-3 rounded-md bg-secondary hover-lift">
                    <f.icon size={18} className="text-gold shrink-0" />
                    <span className="text-xs font-medium text-foreground">{f.label}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/facilities"
                className="group inline-flex items-center gap-2 bg-navy text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-navy-dark transition-colors duration-300"
              >
                Explore Facilities <ArrowRight size={16} className="arrow-slide" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== SPORTS PREVIEW ===== */}
      <PreviewSection
        id="sports"
        image={sportsImg}
        imageAlt="Students playing sports"
        sectionTitle="Sports &"
        sectionTitleHighlight="Wellness"
        heading="Sports, Wellness & Physical Growth"
        description="We champion holistic physical development through a structured sports and wellness program that includes futsal, yoga, meditation, and a comprehensive nutrition policy — shaping healthy, resilient individuals."
        buttonLabel="Discover Sports"
        buttonLink="/sports"
        bgClass="bg-cream"
      >
        <div className="flex flex-wrap gap-4 mb-2">
          {[
            { icon: Dumbbell, label: 'Futsal Ground' },
            { icon: Heart, label: 'Yoga & Meditation' },
            { icon: Apple, label: 'Nutrition Policy' },
            { icon: Activity, label: 'Physical Development' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <item.icon size={16} className="text-gold" />
              {item.label}
            </div>
          ))}
        </div>
      </PreviewSection>

      <div className="section-divider" />

      {/* ===== LIFE SKILLS PREVIEW ===== */}
      <section id="life-skills" className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-2">Life <span className="text-navy">Skills</span></p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">Life Skills & Community</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Developing well-rounded individuals through leadership programs, community engagement, and creative expression.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifeSkillCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 100}>
                <div className="group bg-card rounded-lg overflow-hidden shadow-sm hover-lift cursor-pointer">
                  <div className="img-zoom h-48 overflow-hidden">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-navy mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                    <ArrowRight size={16} className="text-gold mt-3 arrow-slide" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/life-skills"
              className="group inline-flex items-center gap-2 bg-navy text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-navy-dark transition-colors duration-300"
            >
              Learn Life Skills <ArrowRight size={16} className="arrow-slide" />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== GALLERY PREVIEW ===== */}
      <section id="gallery" className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-2">Campus <span className="text-navy">Gallery</span></p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">Campus Gallery</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">A glimpse into life at Lumbini Smart School.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="group relative img-zoom rounded-lg overflow-hidden cursor-pointer aspect-[4/3]">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-300 flex items-center justify-center">
                    <ArrowRight size={24} className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-2 bg-navy text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-navy-dark transition-colors duration-300"
            >
              View More Photos <ArrowRight size={16} className="arrow-slide" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
