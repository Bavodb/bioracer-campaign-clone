import { useEffect, useState } from "react";
import "./Navbar.css";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Concept", href: "#concept" },
  { label: "Video", href: "#video" },
  { label: "Voor elke rit", href: "#every-ride" },
  { label: "Collectie", href: "#collection" },
  { label: "Contact", href: "#contact" },
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
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-brand" href="#home" aria-label="Bioracer home">
          <img src="/icons/bioracer-logo.webp" alt="Bioracer" />
        </a>

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
        {navItems.map((item) => (
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