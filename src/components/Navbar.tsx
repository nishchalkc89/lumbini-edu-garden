import { useState, useEffect } from 'react';
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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glassmorphism shadow-sm'
          : 'bg-transparent'
      }`}
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
                  location.pathname === link.href
                    ? 'text-gold'
                    : scrolled
                    ? 'text-navy'
                    : 'text-navy'
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
        <div className="absolute inset-0 bg-background/95 backdrop-blur-lg" />
        <div className="relative flex flex-col h-full">
          <div className="flex justify-between items-center px-6 py-4">
            <span className="font-display text-xl font-bold text-navy">
              Lumbini<span className="text-gold"> Smart School</span>
            </span>
            <button onClick={() => setMobileOpen(false)} className="text-navy p-2">
              <X size={24} />
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center flex-1 gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`text-lg font-medium transition-colors ${
                    location.pathname === link.href ? 'text-gold' : 'text-navy'
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
