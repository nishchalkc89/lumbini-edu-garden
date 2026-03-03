import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Lumbini Smart School Logo"
                className="h-10 w-auto"
              />
              <h3 className="font-display text-xl font-bold">
                Lumbini <span className="text-gold">Smart School</span>
              </h3>
            </div>

            <p className="text-sm opacity-80 leading-relaxed">
              A Task-Based Learning Education Garden, nurturing curiosity,
              creativity, and character in every child.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-gold transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-gold transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/sports" className="hover:text-gold transition-colors">
                  Sports & Wellness
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-gold transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Tulsipur-9 Doghare, Dang</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>+977-9829876303</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <span>info@lumbinismartschool.edu.np</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61587268503352"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300"
              >
                <Youtube size={18} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-sm opacity-70">
          © {new Date().getFullYear()} Lumbini Smart School. All rights reserved.
          <br />
          Made by{' '}
          <a
            href="https://www.nishchalkc.com.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            Nishchal KC
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;