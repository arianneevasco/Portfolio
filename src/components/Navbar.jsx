import { profile } from "../data/content";

const links = [
  ["Home", "#top"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <header className="nav">
      <a href="#top" className="nav__brand" aria-label="Back to top">
        {profile.logo}
      </a>

      <nav className="nav__links" aria-label="Main">
        {links.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>

      <a href="#contact" className="nav__cta">Hire me</a>
    </header>
  );
}