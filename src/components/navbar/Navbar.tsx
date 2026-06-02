import { useEffect, useState } from "react";
import "./Navbar.css";

type NavItem = {
  label: string;
  href: string;
};

const leftNavItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Voor elke rit", href: "#every-ride" },
  { label: "Voordelen", href: "#benefits" },
  { label: "Campagne", href: "#campaign-assets" },
];

const rightNavItems: NavItem[] = [
  { label: "Elke rit telt", href: "#gallery" },
];

const mobileNavItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Voor elke rit", href: "#every-ride" },
  { label: "Video", href: "#video" },
  { label: "Voordelen", href: "#benefits" },
  { label: "Campagne", href: "#campaign-assets" },
  { label: "Elke rit telt", href: "#gallery" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <nav className="site-nav" aria-label="Hoofdnavigatie">
        <div className="nav-left">
          {leftNavItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-brand" href="#home" aria-label="Bioracer home">
          <img src="/icons/bioracer-logo.webp" alt="Bioracer" />
        </a>

        <div className="nav-right">
          <a href="#video" className="nav-icon-link" aria-label="Bekijk video">
            <img src="/icons/video-icon.png" alt="video-icon" />
          </a>

          {rightNavItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? "is-open" : ""}`}
          aria-label={isMenuOpen ? "Sluit menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}
        id="mobile-navigation"
      >
        {mobileNavItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="mobile-link"
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Navbar;