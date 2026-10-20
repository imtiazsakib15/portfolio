import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Toolkit" },
  { href: "#projects", label: "Work" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu}>
          <span className="wordmark-mark" aria-hidden="true">
            IS
          </span>
          <span>Imtiaz Sakib</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <div
          className={`nav-content${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
        >
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
