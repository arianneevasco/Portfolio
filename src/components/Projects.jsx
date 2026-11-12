import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Code2, ExternalLink, Lock } from "lucide-react";
import { projects as localProjects } from "../data/content";
import { supabase } from "../lib/supabaseClient";

export default function Projects() {
  const [i, setI] = useState(0);
  const [typeFilter, setTypeFilter] = useState("All");
  const [techFilter, setTechFilter] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const types = ["All", ...new Set(projects.map((project) => project.type))];
  const technologies = ["All", ...new Set(projects.flatMap((project) => project.stack))];
  const filteredProjects = useMemo(
    () => projects.filter((project) =>
      (typeFilter === "All" || project.type === typeFilter) &&
      (techFilter === "All" || project.stack.includes(techFilter))),
    [techFilter, typeFilter],
  );

  useEffect(() => setI(0), [techFilter, typeFilter]);

  useEffect(() => {
    let active = true;

    async function loadProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("published", true)
        .order("sort_order", { ascending: true });

      if (!active) return;

      if (error) {
        console.error("Could not load projects from Supabase:", error);
        setProjects(localProjects);
      } else {
        setProjects(data.map((project) => {
          const localProject = localProjects.find((item) => item.title === project.title);
          return {
            ...project,
            type: project.role,
            image: project.image_url || localProject?.image,
            live: project.live_url,
            code: project.code_url,
          };
        }));
      }

      setLoading(false);
    }

    loadProjects();
    return () => { active = false; };
  }, []);

  const go = (n) => setI(Math.max(0, Math.min(filteredProjects.length - 1, n)));
  const clearFilters = () => { setTypeFilter("All"); setTechFilter("All"); };

  return (
    <section id="projects" className="section section--wide">
      <h2 className="section__title">Projects</h2>
      <p className="section__sub">Things I've built, and the part I took in each.</p>

      <div className="project-filters" aria-label="Filter projects">
        <div className="project-filters__group">
          <span className="project-filters__label">Role</span>
          {types.map((type) => (
            <button key={type} className={`filter-btn ${typeFilter === type ? "is-selected" : ""}`} onClick={() => setTypeFilter(type)} type="button">
              {type}
            </button>
          ))}
        </div>
        <div className="project-filters__group">
          <span className="project-filters__label">Technology</span>
          <select value={techFilter} onChange={(event) => setTechFilter(event.target.value)} aria-label="Filter by technology">
            {technologies.map((technology) => <option key={technology}>{technology}</option>)}
          </select>
          {(typeFilter !== "All" || techFilter !== "All") && <button className="filter-reset" onClick={clearFilters} type="button">Clear filters</button>}
        </div>
      </div>

      {loading ? <p className="project-filters__empty">Loading projects...</p> : filteredProjects.length > 0 ? (
        <>
          <div className="stage">
            <div className="stage__track" style={{ transform: `translateX(calc(${-i} * (var(--card-w) + var(--gap))))` }}>
              {filteredProjects.map((p, n) => (
                <article key={p.title} className={`project ${n === i ? "is-active" : ""}`} aria-hidden={n !== i} onClick={() => n !== i && go(n)}>
                  <div className="project__shot">
                    {p.image ? <img src={p.image} alt={`${p.title} screenshot`} className={p.title === "Schedify" ? "project__image--schedify" : undefined} loading="lazy" /> : <span className="project__dot" />}
                  </div>
                  <div className="project__info">
                    <small>{p.type}</small>
                    <h3>{p.title}</h3>
                    <p>{p.summary}</p>
                    <ul className="chips">
                      {p.stack.map((technology) => (
                        <li key={technology}>
                          <button type="button" onClick={(event) => { event.stopPropagation(); setTechFilter(technology); }} title={`Show projects using ${technology}`}>
                            {technology}
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div className="project__links">
                      {p.live && <a className="btn btn--solid" href={p.live} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}><ExternalLink size={16} /> Live Demo</a>}
                      {p.code && <a className="btn btn--ghost" href={p.code} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}><Code2 size={16} /> GitHub</a>}
                      {p.note && <span className="tag"><Lock size={13} /> {p.note}</span>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="stage__bar">
            <span className="stage__count">{String(i + 1).padStart(2, "0")} / {String(filteredProjects.length).padStart(2, "0")}</span>
            <div className="stage__dots">{filteredProjects.map((p, n) => <button key={p.title} className={n === i ? "on" : ""} onClick={() => go(n)} aria-label={`Show ${p.title}`} type="button" />)}</div>
            <div className="carousel__nav">
              <button onClick={() => go(i - 1)} disabled={i === 0} aria-label="Previous project" type="button"><ChevronLeft size={18} /></button>
              <button onClick={() => go(i + 1)} disabled={i === filteredProjects.length - 1} aria-label="Next project" type="button"><ChevronRight size={18} /></button>
            </div>
          </div>
        </>
      ) : <p className="project-filters__empty">No projects match those filters.</p>}

    </section>
  );
}
