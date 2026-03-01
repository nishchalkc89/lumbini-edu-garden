import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Lumbini <span className="text-gold">Smart School</span>
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">
              A Task-Based Learning Education Garden — nurturing curiosity, creativity, and character in every child.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {['About', 'Academics', 'Facilities', 'Sports', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase()}`} className="hover:text-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Lumbini, Nepal</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>+977-XXXXXXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <span>info@lumbinismartschool.edu.np</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-sm opacity-60">
          © {new Date().getFullYear()} Lumbini Smart School. All rights reserved. Made by{' '}
          <a href="https://www.nishchalkc.com.np/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Nishchal KC</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
