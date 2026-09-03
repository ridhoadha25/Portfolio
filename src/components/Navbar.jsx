import { useEffect, useState } from "react";
import { Menu, Send, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  useEffect(() => {
    const updateActiveLink = () => {
      const viewportCenter = window.innerHeight * 0.45;

      let activeMenu = "Home";
      let closestDistance = Number.POSITIVE_INFINITY;

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          activeMenu = link.name;
        }
      });

      setActiveLink(activeMenu);
    };

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    window.addEventListener("resize", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
    };
  }, []);

  const handleClick = (name) => {
    setActiveLink(name);
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-thirdary/70 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-2xl font-semibold tracking-[-0.06em] text-text-primary"
          onClick={() => setActiveLink("Home")}
        >
          Ridho<span className="text-text-secondary">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`relative text-sm font-medium transition-all duration-200 hover:text-text-primary ${
                  isActive ? "text-text-primary" : "text-text-secondary"
                }`}
              >
                <span
                  className={`relative pb-1 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-text-primary after:transition-transform after:duration-200 after:content-[''] ${
                    isActive ? "after:scale-x-100" : "after:scale-x-0"
                  }`}
                >
                  {link.name}
                </span>
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setActiveLink("Contact")}
            className="flex items-center gap-2 rounded-lg border border-white/15 bg-foreground px-4 py-2 text-sm font-medium text-text-primary shadow-[0_6px_18px_rgba(0,0,0,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-button-hover"
          >
            Contact
            <Send size={15} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-thirdary bg-foreground text-text-primary transition-colors duration-150 hover:bg-button-hover"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-thirdary/70 bg-background px-5 transition-[max-height,opacity] duration-150 ease-out md:hidden ${
          isOpen ? "max-h-96 py-3 opacity-100" : "pointer-events-none max-h-0 py-0 opacity-0"
        }`}
      >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = activeLink === link.name;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleClick(link.name)}
                    className={`relative py-2 text-[1.05rem] font-medium transition-all duration-200 ${
                      isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    <span
                      className={`relative inline-block pb-1 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-text-primary after:transition-transform after:duration-200 after:content-[''] ${
                        isActive ? "after:scale-x-100" : "after:scale-x-0"
                      }`}
                    >
                      {link.name}
                    </span>
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => handleClick("Contact")}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-foreground px-4 py-3 text-sm font-medium text-text-primary shadow-[0_6px_18px_rgba(0,0,0,0.25)] transition-all duration-200 hover:border-white/25 hover:bg-button-hover"
              >
                Contact
                <Send size={15} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
      </div>
    </header>
  );
}

export default Navbar;
