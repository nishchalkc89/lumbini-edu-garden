import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import { MapPin, Phone, Mail, Send, Facebook, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* ✅ Background image from public */}
      <PageHeader
        title="Contact"
        titleHighlight="Us"
        subtitle="We'd love to hear from you"
        backgroundImage="/academics.jpg"
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <ScrollReveal>
              <h2 className="font-display text-3xl font-bold text-navy mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-10">

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Address</h3>
                    <p className="text-sm text-muted-foreground">
                      Tulsipur-9 Doghare, Dang <br />
                      (Detailed address to be updated)
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Phone</h3>
                    <p className="text-sm text-muted-foreground">
                      +977-9829876303
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      info@lumbinismartschool.edu.np
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                {[
                  {
                    icon: Facebook,
                    link: "https://www.facebook.com/profile.php?id=61587268503352",
                  },
                  {
                    icon: Instagram,
                    link: "https://www.instagram.com/yourusername",
                  },
                  {
                    icon: Youtube,
                    link: "https://www.youtube.com/@yourchannel",
                  },
                ].map(({ icon: Icon, link }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-navy hover:text-primary-foreground hover:border-navy transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>

              {/* ✅ Google Map Embed */}
              <div className="mt-10 rounded-lg overflow-hidden h-[300px] shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.536661242252!2d82.28363337663984!3d28.130146606714938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997f463c49965a3%3A0x2139a370963189d1!2sDoghare%2C%20Tulsipur%2022412%2C%20Nepal!5e0!3m2!1sen!2sin!4v1772369591304!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={200}>
              <form
                onSubmit={handleSubmit}
                className="bg-card p-8 rounded-lg shadow-sm"
              >
                <h2 className="font-display text-2xl font-bold text-navy mb-6">
                  Send a Message
                </h2>

                <div className="space-y-5">

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 transition"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 transition"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 transition"
                      placeholder="Subject"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 transition resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-navy text-primary-foreground py-3 rounded-md font-medium text-sm hover:bg-navy-dark transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={16} />
                  </button>

                </div>
              </form>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;