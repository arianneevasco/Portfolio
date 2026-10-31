import { techs } from "../data/content";

export default function Marquee() {
  const row = [...techs, ...techs]; // doubled so the loop has no gap

  return (
    <div className="marquee" aria-hidden="true">
      <ul className="marquee__track">
        {row.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}