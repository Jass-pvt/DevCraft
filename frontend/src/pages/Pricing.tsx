import Seo from "@/components/Seo";
import PricingGrid from "@/sections/PricingGrid";
import FaqAccordion from "@/sections/FaqAccordion";

export default function PricingPage() {
  return (
    <>
      <Seo
        title="Pricing"
        description="Transparent DevCraft pricing packages for starter, professional, and premium websites, plus custom quotes."
        path="/pricing"
      />
      <div className="pt-32" />
      <PricingGrid />
      <FaqAccordion />
    </>
  );
}
