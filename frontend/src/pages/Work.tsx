import Seo from "@/components/Seo";
import PortfolioGrid from "@/sections/PortfolioGrid";
import CtaSection from "@/sections/CtaSection";

export default function WorkPage() {
  return (
    <>
      <Seo
        title="Our Work"
        description="Browse DevCraft's portfolio of business, e-commerce, portfolio, event, and web application projects."
        path="/work"
      />
      <div className="pt-32" />
      <PortfolioGrid />
      <CtaSection title="Like what you see?" description="Let's talk about building something similar for you." primaryLabel="Start Your Project" />
    </>
  );
}
