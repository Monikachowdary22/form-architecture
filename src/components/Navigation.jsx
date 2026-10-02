import { useEffect, useState } from "react";
import Dialog from "./Dialog";
import Arrow from "./Arrow";

const links = [
  ["Residences", "#residences"],
  ["The studio", "#studio"],
  ["Our approach", "#approach"],
];

export default function Navigation({ onBrief }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (query.matches) setMenuOpen(false);
    };

    query.addEventListener("change", closeOnDesktop);
    return () => query.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <>
      <header className={`navigation ${scrolled ? "is-scrolled" : ""}`}>
        <a href="#home" className="wordmark" aria-label="FORM home">
          FORM<span>®</span>
        </a>

        <nav aria-label="Main navigation" className="hidden md:flex nav-links">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <button className="nav-contact hidden md:flex" onClick={onBrief}>
          Start a conversation <Arrow diagonal />
        </button>

        <button
          className="menu-button md:hidden"
          aria-label="Open navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu-content"
          onClick={() => setMenuOpen(true)}
        >
          <span />
          <span />
        </button>
      </header>

      <Dialog
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        titleId="mobile-menu-title"
        className="mobile-menu"
      >
        <div id="mobile-menu-content">
          <p id="mobile-menu-title" className="eyebrow">Explore FORM</p>

          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}<Arrow diagonal />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="text-link"
            onClick={() => setMenuOpen(false)}
          >
            Begin your project <Arrow />
          </a>

          <p className="menu-note">
            Architecture for a quieter way of living.
          </p>
        </div>
      </Dialog>
    </>
  );
}
