import { useRef } from "react";
import { motion } from "framer-motion";
import { profile, codeCard } from "../data/content";

const rise = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: 0,
    transition: { duration: 0.9, delay: 0.15 * i, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

export default function Hero() {
  const ref = useRef(null);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--px", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    ref.current.style.setProperty("--py", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };

  return (
    <section id="top" className="hero" ref={ref} onPointerMove={onMove}>
      <div className="hero__copy">
        <h1 className="hero__title">
          {profile.headline.map((line, i) => (
            <span className="mask" key={line}>
              <motion.span custom={i} variants={rise} initial="hidden" animate="show">
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="hero__role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {profile.intro}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a className="btn btn--solid" href="#projects">View projects</a>
          <a className="btn btn--ghost" href="#contact">Hire me</a>
          <a className="btn btn--ghost" href={`mailto:${profile.email}`}>Email me</a>
        </motion.div>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <div className="orbit">
          <div className="orbit__core" />
          <svg viewBox="0 0 400 400" className="orbit__ring orbit__ring--1"><circle cx="200" cy="200" r="190" /><circle className="dot" cx="200" cy="10" r="6" /></svg>
          <svg viewBox="0 0 400 400" className="orbit__ring orbit__ring--2"><circle cx="200" cy="200" r="140" /><circle className="dot" cx="340" cy="200" r="5" /></svg>
          <svg viewBox="0 0 400 400" className="orbit__ring orbit__ring--3"><circle cx="200" cy="200" r="90" /><circle className="dot" cx="200" cy="290" r="4" /></svg>
        </div>

        <div className="codecard">
          <div className="codecard__bar"><i /><i /><i /><span>profile.js</span></div>
          <pre>
            <code>
              <span>{"{"}</span>
              {Object.entries(codeCard).map(([key, value]) => (
                <span className="codecard__line" key={key}>
                  <span className="c-key">{key}</span>:{" "}
                  <span className="c-str">
                    {Array.isArray(value) ? `[${value.map((v) => `'${v}'`).join(", ")}]` : `'${value}'`}
                  </span>
                  ,
                </span>
              ))}
              <span>{"}"}</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}