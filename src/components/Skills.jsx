import { useEffect, useState } from "react";
import Marquee from "./Marquee";
import { skills as localSkills } from "../data/content";
import { Code2 } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

const skillLogos = {
  React: "/images/tech-react.svg",
  HTML: "/images/tech-HTML.svg",
  CSS: "/images/tech-CSS.svg",
  JavaScript: "/images/tech-JavaScript.svg",
  Bootstrap: "/images/tech-Bootstrap.svg",
  Figma: "/images/tech-Figma.svg",
  "Node.js": "/images/tech-Nodejs.svg",
  Express: "/images/tech-Express.svg",
  Java: "/images/tech-Java.svg",
  Django: "/images/tech-Django.svg",
  PostgreSQL: "/images/tech-PostgreSQL.svg",
  Supabase: "/images/tech-Supabase.svg",
  Python: "/images/tech-Python.svg",
  R: "/images/tech-R.svg",
  Jupyter: "/images/tech-Jupyter.svg",
  NumPy: "/images/tech-NumPy.svg",
  Matplotlib: "/images/tech-Matplotlib.svg",
  MongoDB: "/images/tech-MongoDB.svg",
  Git: "/images/tech-Git.svg",
  Vercel: "/images/tech-Vercel.svg",
  "VS Code": "/images/tech-VSCode.svg",
};

function SkillItem({ name }) {
  const logo = skillLogos[name];
  return logo
    ? <><img className="skill-icon" src={logo} alt="" aria-hidden="true" />{name}</>
    : <><Code2 className="skill-icon" size={15} aria-hidden="true" />{name}</>;
}

export default function Skills() {
  const [skills, setSkills] = useState(localSkills);

  useEffect(() => {
    let active = true;

    async function loadSkills() {
      const { data, error } = await supabase
        .from("skills")
        .select("*")
        .eq("published", true)
        .order("sort_order", { ascending: true });

      if (!active) return;

      if (error) {
        console.error("Could not load skills from Supabase:", error);
        return;
      }

      const grouped = data.reduce((result, skill) => {
        if (!result[skill.category]) result[skill.category] = [];
        if (!result[skill.category].includes(skill.name)) {
          result[skill.category].push(skill.name);
        }
        return result;
      }, {});

      setSkills({
        ...localSkills,
        learning: grouped.learning || localSkills.learning,
        beyond: grouped.beyond || localSkills.beyond,
        tools: grouped.tools || localSkills.tools,
        groups: localSkills.groups.map((group) => ({
          ...group,
          items: grouped[group.title] || group.items,
        })),
      });
    }

    loadSkills();
    return () => { active = false; };
  }, []);

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
              <li key={s}><SkillItem name={s} /></li>
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
                  <li key={item}><SkillItem name={item} /></li>
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
