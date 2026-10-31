import Marquee from "./Marquee";
import { skills } from "../data/content";

export default function Skills() {
  // Split the tools into two rows
  const half = Math.ceil(skills.tools.length / 2);
  const rowA = skills.tools.slice(0, half);
  const rowB = skills.tools.slice(half);

  return (
    <section id="skills" className="section">
      <div className="skills">
        <div className="skills__intro">
          <h2 className="skills__title">
            {skills.heading}
            <span>{skills.accent}</span>
          </h2>
          <p className="skills__lead">{skills.lead}</p>

          <p className="skills__label">Currently learning:</p>
          <ul className="pills">
            {skills.learning.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <p className="skills__label">Beyond code</p>
          <ul className="beyond">
            {skills.beyond.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div className="skills__groups">
          {skills.groups.map((g) => (
            <div key={g.title} className="sgroup">
              <h3>{g.title}</h3>
              <ul className="sgroup__box">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="skills__label skills__label--tools">Languages and tools I've worked with</p>
      <Marquee items={rowA} variant="tools" />
      <Marquee items={rowB} variant="tools" reverse />
    </section>
  );
}