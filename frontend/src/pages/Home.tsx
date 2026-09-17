import Seo from "@/components/Seo";
import Hero from "@/sections/Hero";
import ServicesGrid from "@/sections/ServicesGrid";
import PortfolioGrid from "@/sections/PortfolioGrid";
import PricingGrid from "@/sections/PricingGrid";
import ProcessTimeline from "@/sections/ProcessTimeline";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import StatsSection from "@/sections/StatsSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import FaqAccordion from "@/sections/FaqAccordion";
import CtaSection from "@/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Seo
        title="We Design Dreams"
        description="DevCraft builds modern, high-performance websites that help businesses stand out, grow, and turn visitors into customers."
        path="/"
      />
      <Hero />
      <StatsSection />
      <ServicesGrid compact />
      <PortfolioGrid compact />
      <PricingGrid />
      <ProcessTimeline />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FaqAccordion />
      <CtaSection />
    </>
  );
}
