import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/contact";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi DevCraft! I'd like to enquire about a website project."
  );
  const href = `https://wa.me/${contactInfo.whatsappNumber}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with DevCraft on WhatsApp"
      className="fixed bottom-6 right-5 sm:right-8 z-40 flex h-14 w-14 items-center justify-center rounded-full
        bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-[0_8px_30px_rgba(16,185,129,0.45)]
        hover:scale-105 active:scale-95 transition-transform duration-300"
    >
      <MessageCircle className="h-6 w-6 text-white" strokeWidth={2.2} />
    </a>
  );
}
