import { techs } from "../data/content";

const toolLogos = {
  Python: "/images/tech-Python.svg",
  React: "/images/tech-react.svg",
  "Node.js": "/images/tech-Nodejs.svg",
  Java: "/images/tech-Java.svg",
  JavaScript: "/images/tech-JavaScript.svg",
  CSS: "/images/tech-CSS.svg",
  HTML: "/images/tech-HTML.svg",
  Bootstrap: "/images/tech-Bootstrap.svg",
  Figma: "/images/tech-Figma.svg",
  Vercel: "/images/tech-Vercel.svg",
  "VS Code": "/images/tech-VSCode.svg",
  MongoDB: "/images/tech-MongoDB.svg",
  PostgreSQL: "/images/tech-PostgreSQL.svg",
  Git: "/images/tech-Git.svg",
};

export default function Marquee({ items = techs, reverse = false, variant = "" }) {
  // 4 copies, so the strip is wide enough even on big screens
  const row = Array(4).fill(items).flat();

  const classes = ["marquee", variant && `marquee--${variant}`, reverse && "marquee--reverse"]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} aria-hidden="true">
      <ul className="marquee__track">
        {row.map((t, i) => (
          <li key={i}>
            {variant === "tools" && toolLogos[t] && <img src={toolLogos[t]} alt="" aria-hidden="true" />}
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
