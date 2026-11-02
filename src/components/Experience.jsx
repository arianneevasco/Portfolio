import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Certificates from "./Certificates";
import { experiences as localExperiences } from "../data/content";
import { supabase } from "../lib/supabaseClient";

function Img({ src, alt, className }) {
  return src ? (
    <img src={src} alt={alt} className={className} loading="lazy" />
  ) : (
    <div className={`${className} placeholder`} role="img" aria-label={alt} />
  );
}

export default function Experience() {
  const [open, setOpen] = useState(null);
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadExperiences() {
      const { data, error } = await supabase
        .from("experiences")
        .select("*")
        .eq("published", true)
        .order("sort_order", { ascending: true });

      if (!active) return;

      if (error) {
        console.error("Could not load experience from Supabase:", error);
        setExperiences(localExperiences);
      } else {
        setExperiences(data.map((experience) => {
          const localExperience = localExperiences.find((item) => item.role === experience.role);
          return { ...experience, image: experience.image_url || localExperience?.image };
        }));
      }

      setLoading(false);
    }

    loadExperiences();
    return () => { active = false; };
  }, []);

  return (
    <section id="experience" className="section">
      <h2 className="section__title">Experience</h2>
      <p className="section__sub">Where I've applied what I've learned.</p>

      <div className="exp-layout">
        <div className="exp">
          {loading ? <p className="project-filters__empty">Loading experience...</p> : experiences.map((e) => {
            const isOpen = open === e.id;

            return (
              <div key={e.id} className={`exp__item ${isOpen ? "is-open" : ""}`}>
                <button
                  className="exp__head"
                  onClick={() => setOpen(isOpen ? null : e.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${e.id}-panel`}
                >
                  <span className="exp__dot" />
                  <span className="exp__text">
                    <span className="exp__meta">
                      <b>{e.kind}</b>
                      <span>{e.period}</span>
                    </span>
                    <span className="exp__role">
                      {e.role} <em>{e.company}</em>
                    </span>
                  </span>
                  <ChevronDown className="exp__chev" size={22} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`${e.id}-panel`}
                      className="exp__panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                      <div className="exp__body">
                        <Img src={e.image} alt={`${e.role} photo`} className="exp__photo" />
                        <p>{e.summary}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <Certificates />
      </div>

    </section>
  );
}
