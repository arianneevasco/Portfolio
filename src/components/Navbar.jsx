const links = [
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <header className="nav">
      <a href="#top" className="nav__brand">AE</a>
      <nav aria-label="Main">
        {links.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
    </header>
  );
}