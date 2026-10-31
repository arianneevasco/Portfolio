import Carousel from "./Carousel";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section__title">What I work with</h2>
      <Carousel label="Skills">
        {skills.map((s) => (
          <article key={s.group} className="skill">
            <h3>{s.group}</h3>
            <p>{s.note}</p>
            <ul>
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </Carousel>
    </section>
  );
}