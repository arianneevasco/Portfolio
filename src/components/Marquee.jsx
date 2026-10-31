import { techs } from "../data/content";

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
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}