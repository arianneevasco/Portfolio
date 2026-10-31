import { FileText, GraduationCap, MapPin, Code2, Briefcase } from "lucide-react";
import { about, profile } from "../data/content";

// One icon per fact, in the same order as about.facts in content.js
const icons = [GraduationCap, MapPin, Code2, Briefcase];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="about">
        <div className="about__portrait-wrap">
          <figure className="about__portrait">
            <img src="/images/profile-portrait.png" alt="Arianne Evasco" />
          </figure>
          <figcaption className="about__portrait-caption">
            <strong>Arianne Evasco</strong>
          </figcaption>
          <span className="about__portrait-note">curious by nature · builder by choice</span>
        </div>

        <div className="about__content">
          <p className="section__eyebrow">A little about me</p>
          <h2 className="about__heading">{about.heading}</h2>
          <p className="about__lead">{about.lead}</p>

          {about.body.map((text) => (
            <p key={text} className="about__text">{text}</p>
          ))}

          <ul className="about__facts">
            {about.facts.map((fact, i) => {
              const Icon = icons[i];
              return (
                <li key={fact}>
                  <Icon size={20} />
                  <span>{fact}</span>
                </li>
              );
            })}
          </ul>

          <a className="btn btn--ghost" href={profile.cv}>
            <FileText size={16} /> View my CV
          </a>
        </div>
      </div>
    </section>
  );
}
