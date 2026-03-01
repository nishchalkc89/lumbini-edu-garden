import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Sports & Wellness', href: '/sports' },
  { label: 'Life Skills', href: '/life-skills' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

const homeSections = [
  { id: 'hero', href: '/' },
  { id: 'about', href: '/about' },
  { id: 'academics', href: '/academics' },
  { id: 'facilities', href: '/facilities' },
  { id: 'sports', href: '/sports' },
  { id: 'life-skills', href: '/life-skills' },
  { id: 'gallery', href: '/gallery' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // 🔥 Detect scroll for transparent → solid effect
  useEffect(() => {
    const handleNavbarScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleNavbarScroll);
    return () => window.removeEventListener('scroll', handleNavbarScroll);
  }, []);

  const handleScroll = useCallback(() => {
    if (!isHomePage) return;

    let currentSection = '/';
    for (const section of homeSections) {
      const el = document.getElementById(section.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          currentSection = section.href;
        }
      }
    }
    setActiveSection(currentSection);
  }, [isHomePage]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const currentActive = isHomePage ? activeSection : location.pathname;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6">

        {/* Logo + Name */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Lumbini Smart School Logo"
            className="h-10 w-auto"
          />
          <span className={`font-display text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-navy' : 'text-white'
            }`}>
            Lumbini<span className="text-gold"> Smart School</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${currentActive === link.href
                    ? 'text-gold font-semibold'
                    : scrolled
                      ? 'text-navy hover:text-gold'
                      : 'text-white hover:text-gold'
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${scrolled ? 'text-navy' : 'text-white'
            }`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">

          {/* Mobile Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Lumbini Smart School Logo"
              className="h-10 w-auto"
            />
            <span className="font-display text-xl font-bold text-navy">
              Lumbini<span className="text-gold"> Smart School</span>
            </span>
          </div>

          <button onClick={() => setMobileOpen(false)} className="text-navy p-2">
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col items-start px-8 pt-8 gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`text-lg font-medium transition-colors ${currentActive === link.href
                    ? 'text-gold'
                    : 'text-navy'
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;