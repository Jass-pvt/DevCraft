import Seo from "@/components/Seo";
import ServicesGrid from "@/sections/ServicesGrid";
import CtaSection from "@/sections/CtaSection";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Explore DevCraft's web development services: business websites, e-commerce stores, portfolios, landing pages, event sites, custom applications, and redesigns."
        path="/services"
      />
      <div className="pt-32" />
      <ServicesGrid />
      <CtaSection title="Not sure which service fits?" description="Tell us about your project and we'll recommend the right approach." primaryLabel="Talk to Us" />
    </>
  );
}
