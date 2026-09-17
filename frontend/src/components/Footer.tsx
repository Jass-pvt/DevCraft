import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";
import { navLinks } from "@/data/nav";
import { contactInfo } from "@/data/contact";
import { socialLinks } from "@/data/social";

const iconMap: Record<string, typeof Linkedin> = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg mb-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-purple to-accent-fuchsia text-sm">
              D
            </span>
            DevCraft
          </Link>
          <p className="text-sm text-white/50 leading-relaxed max-w-xs">
            We build modern, high-performance websites that help businesses stand out, grow, and turn visitors into customers.
          </p>
          <div className="flex items-center gap-3 mt-5">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              if (!Icon) return null;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full glass glass-hover"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white/80 mb-4">Navigate</h3>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-white/50 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white/80 mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-white/50">
            <li>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 shrink-0" /> {contactInfo.email}
              </a>
            </li>
            <li>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 shrink-0" /> {contactInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" /> {contactInfo.location}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white/80 mb-4">Start a Project</h3>
          <p className="text-sm text-white/50 mb-4">Have an idea? Let's talk about what you're building.</p>
          <Link to="/contact" className="btn-secondary text-sm">
            Get a Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-white/[0.06] py-6 text-center text-xs text-white/35">
        © {new Date().getFullYear()} DevCraft. All rights reserved.
      </div>
    </footer>
  );
}
