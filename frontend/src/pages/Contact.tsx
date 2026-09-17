import Seo from "@/components/Seo";
import ContactSection from "@/sections/ContactSection";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Start your project with DevCraft. Send a project enquiry and we'll get back to you soon."
        path="/contact"
      />
      <div className="pt-32" />
      <ContactSection />
    </>
  );
}
