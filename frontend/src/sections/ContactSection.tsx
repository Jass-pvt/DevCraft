import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import ContactForm from "./ContactForm";
import { contactInfo } from "@/data/contact";
import SectionHeading from "@/components/SectionHeading";

export default function ContactSection() {
  const whatsappHref = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    "Hi DevCraft! I'd like to enquire about a website project."
  )}`;

  return (
    <section id="contact" className="section">
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Have a project <span className="gradient-text">in mind?</span>
          </>
        }
        description="Tell us about your idea and let's build something amazing together."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <a href={`mailto:${contactInfo.email}`} className="glass glass-hover flex items-center gap-4 rounded-2xl p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
              <Mail className="h-4 w-4 text-accent-fuchsia" />
            </span>
            <div>
              <div className="text-xs text-white/40">Email</div>
              <div className="text-sm font-medium">{contactInfo.email}</div>
            </div>
          </a>

          <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="glass glass-hover flex items-center gap-4 rounded-2xl p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
              <Phone className="h-4 w-4 text-accent-fuchsia" />
            </span>
            <div>
              <div className="text-xs text-white/40">Phone</div>
              <div className="text-sm font-medium">{contactInfo.phone}</div>
            </div>
          </a>

          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="glass glass-hover flex items-center gap-4 rounded-2xl p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
              <MessageCircle className="h-4 w-4 text-emerald-400" />
            </span>
            <div>
              <div className="text-xs text-white/40">WhatsApp</div>
              <div className="text-sm font-medium">Chat with us</div>
            </div>
          </a>

          <div className="glass flex items-center gap-4 rounded-2xl p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
              <MapPin className="h-4 w-4 text-accent-fuchsia" />
            </span>
            <div>
              <div className="text-xs text-white/40">Location</div>
              <div className="text-sm font-medium">{contactInfo.location}</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
