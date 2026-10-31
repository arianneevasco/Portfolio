import { useState } from "react";
import { ChevronLeft, ChevronRight, FileText, Lock, Code2 } from "lucide-react";
import { projects } from "../data/content";

export default function Projects() {
  const [i, setI] = useState(0); // index of the active project

  // Keep the index between 0 and the last project
  const go = (n) => setI(Math.max(0, Math.min(projects.length - 1, n)));

  return (
    <section id="projects" className="section section--wide">
      <h2 className="section__title">Projects</h2>
      <p className="section__sub">Things I've built, and the part I took in each.</p>

      <div className="stage">
        <div
          className="stage__track"
          style={{ transform: `translateX(calc(${-i} * (var(--card-w) + var(--gap))))` }}
        >
          {projects.map((p, n) => (
            <article
              key={p.title}
              className={`project ${n === i ? "is-active" : ""}`}
              aria-hidden={n !== i}
              onClick={() => n !== i && go(n)}
            >
              <div className="project__shot">
                {p.image ? (
                  <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
                ) : (
                  <span className="project__dot" />
                )}
              </div>

              <div className="project__info">
                <small>{p.type}</small>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>

                <ul className="chips">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>

                <div className="project__links">
                  <a className="btn btn--solid" href={p.caseStudy} tabIndex={n === i ? 0 : -1}>
                    <FileText size={16} /> Case study
                  </a>
                  {p.code && (
                    <a className="btn btn--ghost" href={p.code} tabIndex={n === i ? 0 : -1}>
                      <Code2 size={16} /> Code
                    </a>
                  )}
                  {p.note && (
                    <span className="tag">
                      <Lock size={13} /> {p.note}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="stage__bar">
        <span className="stage__count">
          {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>

        <div className="stage__dots">
          {projects.map((p, n) => (
            <button
              key={p.title}
              className={n === i ? "on" : ""}
              onClick={() => go(n)}
              aria-label={`Show ${p.title}`}
            />
          ))}
        </div>

        <div className="carousel__nav">
          <button onClick={() => go(i - 1)} disabled={i === 0} aria-label="Previous project">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => go(i + 1)} disabled={i === projects.length - 1} aria-label="Next project">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}