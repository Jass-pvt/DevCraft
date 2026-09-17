import Seo from "@/components/Seo";
import FaqAccordion from "@/sections/FaqAccordion";
import CtaSection from "@/sections/CtaSection";

export default function FaqPage() {
  return (
    <>
      <Seo
        title="FAQ"
        description="Answers to common questions about DevCraft's pricing, timelines, hosting, redesigns, maintenance, and custom features."
        path="/faq"
      />
      <div className="pt-32" />
      <FaqAccordion />
      <CtaSection title="Still have questions?" description="Reach out and we'll walk you through anything that's unclear." primaryLabel="Talk to Us" />
    </>
  );
}
