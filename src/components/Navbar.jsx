import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/content";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["Home", "#top"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");
  const locked = useRef(false); // pause the scroll-spy while a click-scroll is running

  const close = () => setOpen(false);

  const onLinkClick = (href) => {
    setActive(href);              // highlight immediately on click
    locked.current = true;
    setTimeout(() => (locked.current = false), 900);
    close();
  };

  useEffect(() => {
    const sections = links
      .map(([, href]) => document.querySelector(href))
      .filter(Boolean);

    // The section crossing the middle of the screen becomes active
    const observer = new IntersectionObserver(
      (entries) => {
        if (locked.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    // The last section is short, so also activate Contact at the very bottom
    const onScroll = () => {
      if (locked.current) return;
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 4;
      if (atBottom) setActive("#contact");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="nav">
      <a href="#top" className="nav__brand" aria-label="Back to top" onClick={() => onLinkClick("#top")}>
        {profile.logo}
      </a>

      <nav id="menu" className={`nav__links ${open ? "is-open" : ""}`} aria-label="Main">
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className={active === href ? "is-active" : ""}
            aria-current={active === href ? "true" : undefined}
            onClick={() => onLinkClick(href)}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="nav__right">
        <ThemeToggle />
        <a href="#contact" className="nav__cta" onClick={() => onLinkClick("#contact")}>
          Hire me
        </a>
        <button
          className="nav__toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}