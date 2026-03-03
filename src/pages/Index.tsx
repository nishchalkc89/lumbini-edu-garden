import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Brain, Users, Lightbulb, Monitor, Wrench, BookMarked, FlaskConical, Palette, Dumbbell, Heart, Apple, Activity } from 'lucide-react';
import TypingText from '../components/TypingText';
import PreviewSection from '../components/PreviewSection';
import ScrollReveal from '../components/ScrollReveal';
import TeamCard from '../components/TeamCard';
import { teamMembers } from '../data/teamMembers';

const lifeSkillCards = [
  {
    img: '/life-skills-1.jpg',
    title: 'Student Leadership Programs',
    desc: 'Empowering young minds through responsibility, decision-making, and public speaking opportunities.',
  },
  {
    img: '/life-skills-2.jpg',
    title: 'Community Awareness Events',
    desc: 'Building social consciousness through environmental drives, tree planting, and community service.',
  },
  {
    img: '/life-skills-3.jpg',
    title: 'Creative Activities',
    desc: 'Fostering imagination and self-expression through arts, crafts, and collaborative projects.',
  },
  {
    img: '/life-skills-4.jpg',
    title: 'Achievement Celebrations',
    desc: 'Recognizing excellence and effort through awards, ceremonies, and milestone celebrations.',
  },
];

const galleryImages = [
  { src: '/gallery-yoga.jpg', alt: 'Yoga session' },
  { src: '/gallery-arts.png', alt: 'Art class' },
  { src: '/gallery-events.jpg', alt: 'School event' },
  { src: '/gallery-facilities.jpg', alt: 'School facilities' },
  { src: '/gallery-students.jpg', alt: 'Students' },
  { src: '/sports.jpg', alt: 'Sports activities' },
];

const typingStrings = [
  "Lumbini Smart School…",
  "A Task-Based Learning Education Garden…",
  "Activity-Based • Smart Learning • Holistic Development…",
];

const academicFeatures = [
  { Icon: BookOpen, label: "Activity-Based Learning" },
  { Icon: Monitor, label: "Smart Teaching" },
  { Icon: Brain, label: "Psychological Support" },
  { Icon: Users, label: "Expert Guest Classes" },
];

const facilityItems = [
  { Icon: Monitor, label: "Smart Boards" },
  { Icon: Wrench, label: "Maker Room" },
  { Icon: BookMarked, label: "Self Study Area" },
  { Icon: FlaskConical, label: "Thematic Labs" },
  { Icon: Palette, label: "Art / Dance / Music Rooms" },
];

const Index = () => {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/049/172/328/small/view-of-architecture-of-american-school-building-exterior-concept-free-photo.jpeg"
            alt="Lumbini Smart School campus"
            className="w-full h-full object-cover"
          />

          {/* Dark Blue Overlay with Blur */}
          <div className="absolute inset-0 bg-navy/50 backdrop-blur-sm"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="animate-fade-up">

                <p className="text-sm font-medium tracking-widest uppercase text-gold mb-4">
                  Welcome to
                </p>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  <TypingText strings={typingStrings} />
                </h1>

                <p className="text-gray-200 text-xl font-medium max-w-xl mb-8 leading-relaxed">
                  Where every child discovers their potential through hands-on,
                  task-based learning in a nurturing, modern environment.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/about"
                    className="group inline-flex items-center gap-2 bg-gold text-navy px-7 py-3.5 rounded-md font-medium hover:bg-yellow-500 transition-colors duration-300"
                  >
                    Explore School
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                  </Link>

                  <Link
                    to="/gallery"
                    className="group inline-flex items-center gap-2 border-2 border-white text-white px-7 py-3.5 rounded-md font-medium hover:bg-white hover:text-navy transition-all duration-300"
                  >
                    View Gallery
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
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
        image="/about.png"
        imageAlt="Students engaged in activity-based learning"
        sectionTitle="About"
        sectionTitleHighlight="Us"
        heading="Nurturing Tomorrow's Leaders Today"
        description="At Lumbini Smart School, we believe education extends beyond textbooks and traditional classrooms. Our task-based learning approach engages students in meaningful real-world problem solving that strengthens critical thinking, creativity, and collaboration from the earliest grades. Through technology-enabled classrooms, experiential activities, and strong values-based education, we nurture confident, compassionate, and future-ready learners prepared to excel in academics and in life."
        buttonLabel="More About Us"
        buttonLink="/about"
      />
      <div className="section-divider" />

      {/* ===== PRINCIPAL'S MESSAGE ===== */}
      <section id="principal-message" className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image */}
            <ScrollReveal className="lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg group">
                <img
                  src="/principal.png"
                  alt="Principal of Lumbini Smart School"
                  className="w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal delay={200} className="lg:order-1">

              <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-3">
                Message From <span className="text-navy">The Principal</span>
              </p>

              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-8 leading-tight">
                A Vision for Every Child’s Success
              </h2>

              {/* Message Content */}
              <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-loose text-justify">

                <p>
                  At Lumbini Smart School, I believe that every child possesses unique
                  talents and limitless potential. My mission is to create a nurturing
                  environment where curiosity is encouraged, creativity is celebrated,
                  and each student feels valued and inspired to grow.
                </p>

                <p>
                  Education, to me, is not only about academic achievement. it is about
                  building strong character, developing essential life skills, and fostering
                  confidence that prepares students for real-world challenges.
                </p>

                <p>
                  With the support of our dedicated teachers and parents, I am committed
                  to guiding our students toward becoming responsible, compassionate,
                  and capable leaders of tomorrow.
                </p>

              </div>

              {/* Principal Name */}
              <div className="mt-8 border-l-4 border-gold pl-4">
                <p className="font-display text-navy font-semibold text-lg">
                  Bamdev Sapkota
                </p>
                <p className="text-sm text-muted-foreground">
                  Principal, Lumbini Smart School
                </p>
              </div>

            </ScrollReveal>

          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== ACADEMICS PREVIEW ===== */}
      <section id="academics" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <ScrollReveal>
              <div className="rounded-lg overflow-hidden shadow-lg group">
                <img
                  src="/academics.jpg"
                  alt="Smart classroom"
                  className="w-full h-[350px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-2">
                Our <span className="text-navy">Academics</span>
              </p>

              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-6 leading-tight">
                Academic Excellence Through Innovation
              </h2>

              <div className="space-y-4 text-muted-foreground leading-loose text-justify mb-8">
                <p>
                  At Lumbini Smart School, our curriculum blends strong academic
                  foundations with modern, student-centered teaching methodologies.
                  We focus on conceptual clarity, critical thinking, and practical
                  application to ensure meaningful and lasting learning experiences.
                </p>

                <p>
                  Through smart classrooms, interactive projects, continuous
                  assessments, and personalized guidance, we support every learner’s
                  academic journey. Our goal is to cultivate confident, independent
                  thinkers who are prepared to excel in higher education and beyond.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {academicFeatures.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-3 rounded-md bg-card shadow-sm hover-lift"
                  >
                    <Icon size={20} className="text-gold shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/academics"
                className="group inline-flex items-center gap-2 bg-navy text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-navy-dark transition-colors duration-300"
              >
                View Academics
                <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </Link>
            </ScrollReveal>

          </div>
        </div>
      </section>
      <div className="section-divider" />

      {/* ===== FACILITIES PREVIEW ===== */}
      <section id="facilities" className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <ScrollReveal className="lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg group">
                <img
                  src="/facilities.jpg"
                  alt="Modern school facilities"
                  className="w-full h-[350px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="lg:order-1">
              <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-2">
                Our <span className="text-navy">Facilities</span>
              </p>

              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-6 leading-tight">
                World-Class Infrastructure for Holistic Growth
              </h2>

              <div className="space-y-4 text-muted-foreground leading-loose text-justify mb-8">
                <p>
                  At Lumbini Smart School, our infrastructure is thoughtfully designed
                  to create a safe, inspiring, and technology-enabled learning
                  environment. From smart classrooms and well-equipped laboratories
                  to spacious play areas, every facility supports academic excellence
                  and overall student development.
                </p>

                <p>
                  We continuously invest in modern resources and student-friendly
                  spaces that encourage innovation, collaboration, and creativity.
                  Our facilities ensure that every child experiences comfort,
                  safety, and opportunity while pursuing their educational journey.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {facilityItems.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 p-3 rounded-md bg-secondary hover-lift"
                  >
                    <Icon size={18} className="text-gold shrink-0" />
                    <span className="text-xs font-medium text-foreground">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/facilities"
                className="group inline-flex items-center gap-2 bg-navy text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-navy-dark transition-colors duration-300"
              >
                Explore Facilities
                <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </Link>
            </ScrollReveal>

          </div>
        </div>
      </section>
      <div className="section-divider" />

      {/* ===== SPORTS PREVIEW ===== */}
      <PreviewSection
        id="sports"
        image="/sports.jpg"
        imageAlt="Students playing sports"
        sectionTitle="Sports &"
        sectionTitleHighlight="Wellness"
        heading="Sports, Wellness & Physical Growth"
        description="At Lumbini Smart School, we believe physical education is essential to a child’s overall growth and well-being. Our structured sports and wellness program is designed to build strength, discipline, teamwork, and resilience from an early age. Through activities such as futsal, yoga, meditation, and guided fitness training, students develop not only physical endurance but also mental clarity and emotional balance. 
"
        buttonLabel="Discover Sports"
        buttonLink="/sports"
        bgClass="bg-white"
      >
        <div className="flex flex-wrap gap-4 mb-2">
          {[
            { icon: Dumbbell, label: 'Futsal Ground' },
            { icon: Heart, label: 'Yoga & Meditation' },
            { icon: Apple, label: 'Nutrition Policy' },
            { icon: Activity, label: 'Physical Development' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <item.icon size={16} className="text-gold" />
              {item.label}
            </div>
          ))}
        </div>
      </PreviewSection>

      <div className="section-divider" />

      {/* ===== LIFE SKILLS PREVIEW ===== */}
      <section id="life-skills" className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-6">

          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-2">
                Life <span className="text-navy">Skills</span>
              </p>

              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">
                Life Skills & Community
              </h2>

              <p className="text-muted-foreground max-w-2xl mx-auto">
                Developing well-rounded individuals through leadership programs,
                community engagement, and creative expression.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifeSkillCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 100}>
                <div className="group bg-card rounded-lg overflow-hidden shadow-sm hover-lift cursor-pointer">

                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-navy mb-2">
                      {card.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.desc}
                    </p>

                    <ArrowRight
                      size={16}
                      className="text-gold mt-3 group-hover:translate-x-1 transition"
                    />
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
              Learn Life Skills
              <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </Link>
          </div>

        </div>
      </section>

      <div className="section-divider" />

      {/* ===== GALLERY PREVIEW ===== */}
      <section id="gallery" className="py-20 lg:py-28 ">
        {/* ... keep existing code */}
        <div className="container mx-auto px-6">

          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-2">
                School <span className="text-navy">Gallery</span>
              </p>

              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">
                School Gallery
              </h2>

              <p className="text-muted-foreground max-w-xl mx-auto">
                A glimpse into life at Lumbini Smart School.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="group relative rounded-lg overflow-hidden cursor-pointer aspect-[4/3]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-300 flex items-center justify-center">
                    <ArrowRight
                      size={24}
                      className="text-primary-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                    />
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
              View More Photos
              <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </Link>
          </div>

        </div>
      </section>

      <div className="section-divider" />

      {/* ===== OUR TEAM PREVIEW ===== */}
      <section id="team" className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-6">

          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-2">
                Our <span className="text-navy">Team</span>
              </p>

              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">
                Meet Our Educators
              </h2>

              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dedicated, experienced, and passionate teachers who inspire every student to reach their fullest potential.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(0, 4).map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 100}>
                <TeamCard member={member} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/team"
              className="group inline-flex items-center gap-2 bg-navy text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-navy-dark transition-colors duration-300"
            >
              View All Team Members
              <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Index;
