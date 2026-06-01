import "./Footer.css";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Voor elke rit", href: "#every-ride" },
  { label: "Video", href: "#video" },
  { label: "Voordelen", href: "#benefits" },
  { label: "Campagne-assets", href: "#campaign-assets" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#home" aria-label="Bioracer home">
            <img src="/icons/bioracer-logo.webp" alt="Bioracer" />
          </a>

          <p>
            Professionele fietskledij voor elke dagelijkse rit. Niet alleen voor
            profs, maar voor iedereen die comfortabel onderweg wil zijn.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigatie">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Bioracer — Elke rit telt.</p>
        <p>Campagneconcept Creative Business Studio 2</p>
      </div>
    </footer>
  );
}

export default Footer;