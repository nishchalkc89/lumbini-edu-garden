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

// Section IDs on the homepage mapped to nav routes
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
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleScroll = useCallback(() => {
    

    if (!isHomePage) return;

    // Find which section is currently in view
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const getActiveHref = () => {
    if (isHomePage) return activeSection;
    return location.pathname;
  };

  const currentActive = getActiveHref();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-500"
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-navy">
            Lumbini<span className="text-gold"> Smart School</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-gold ${
                  currentActive === link.href ? 'text-gold font-semibold' : 'text-navy'
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
          className="lg:hidden text-navy p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 z-40 transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-white" />
        <div className="relative flex flex-col h-full">
          <div className="flex justify-between items-center px-6 py-4">
            <span className="font-display text-xl font-bold text-navy">
              Lumbini<span className="text-gold"> Smart School</span>
            </span>
            <button onClick={() => setMobileOpen(false)} className="text-navy p-2">
              <X size={24} />
            </button>
          </div>
          <ul className="flex flex-col items-start px-8 pt-6 gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`text-lg font-medium transition-colors ${
                    currentActive === link.href ? 'text-gold' : 'text-navy'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
