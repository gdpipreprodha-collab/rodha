import { useEffect, useState } from "react";
import { X } from "lucide-react";
import popupImage from "../assets/images/popup/popup.png";

export default function HomepagePopup() {
  const [isOpen, setIsOpen] = useState(true);

  const handlePackageClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsOpen(false);
    window.history.pushState(null, "", "/#package");

    window.setTimeout(() => {
      document
        .getElementById("package")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Rodha mock packages announcement"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setIsOpen(false);
      }}
    >
      <div className="relative max-h-[94vh] max-w-[min(94vw,760px)] overflow-hidden rounded-xl bg-black shadow-2xl ring-1 ring-white/20">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 z-10 grid size-10 place-items-center rounded-full bg-black/80 text-white shadow-lg ring-1 ring-white/40 transition hover:scale-105 hover:bg-[#f97316] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] sm:right-3 sm:top-3"
          aria-label="Close announcement"
          autoFocus
        >
          <X aria-hidden="true" className="size-6" strokeWidth={2.5} />
        </button>

        <a
          href="/#package"
          onClick={handlePackageClick}
          aria-label="View Rodha mock packages"
          className="block cursor-pointer"
        >
          <img
            src={popupImage}
            alt="Rodha mock packages now include VARC and QA concept capsules"
            className="block max-h-[94vh] w-auto max-w-full object-contain"
          />
        </a>
      </div>
    </div>
  );
}
