import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_GROUP_URL =
  "https://chat.whatsapp.com/FHFxXxmuYLO0TDA19WpNHS";

export default function WhatsAppGroupCta() {
  return (
    <a
      href={WHATSAPP_GROUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join the free Rodha group on WhatsApp"
      className="group fixed bottom-20 right-4 z-[9998] flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(37,211,102,0.4)] transition duration-200 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:right-6 sm:text-base md:bottom-6"
    >
      <FaWhatsapp
        aria-hidden="true"
        className="size-6 shrink-0 transition-transform duration-200 group-hover:scale-110"
      />
      <span>Join Free Group</span>
    </a>
  );
}
