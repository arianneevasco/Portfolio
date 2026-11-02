import { useEffect, useState } from "react";
import { awards as localAwards } from "../data/content";
import { supabase } from "../lib/supabaseClient";

export default function Awards() {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadAwards() {
      const { data, error } = await supabase
        .from("awards")
        .select("*")
        .eq("published", true)
        .order("sort_order", { ascending: true });

      if (!active) return;

      if (error) {
        console.error("Could not load awards from Supabase:", error);
        setAwards(localAwards);
      } else {
        setAwards(data);
      }

      setLoading(false);
    }

    loadAwards();
    return () => { active = false; };
  }, []);

  return (
    <section className="section awards" aria-labelledby="awards-title">
      <h2 id="awards-title" className="section__title">Awards &amp; Achievements</h2>
      <p className="section__sub">Milestones I’m proud to have earned.</p>

      {loading ? (
        <p className="awards__empty">Loading achievements...</p>
      ) : (
        <div className="awards__list">
          {awards.map((award) => (
            <article className="award" key={`${award.title}-${award.year}`}>
              <div>
                <h3>{award.title}</h3>
                <p>{award.issuer}</p>
              </div>
              <time>{award.year}</time>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
