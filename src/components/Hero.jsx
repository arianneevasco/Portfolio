import { useRef } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/content";

// Animation recipe: start pushed down, then slide up into place
const rise = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: 0,
    transition: { duration: 0.9, delay: 0.15 * i, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

export default function Hero() {
  const [first, ...rest] = profile.name.split(" ");

  const ref = useRef(null);

// Mouse parallax: store the pointer position as CSS variables
const onMove = (e) => {
  const r = ref.current.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  ref.current.style.setProperty("--px", x.toFixed(3));
  ref.current.style.setProperty("--py", y.toFixed(3));
};

  return (
    <section id="top" className="hero" ref={ref} onMouseMove={onMove}>
      <div className="hero__copy">
        <h1 className="hero__name">
          <span className="mask">
            <motion.span custom={0} variants={rise} initial="hidden" animate="show">
              {first}
            </motion.span>
          </span>
          <span className="mask">
            <motion.span custom={1} variants={rise} initial="hidden" animate="show">
              {rest.join(" ") || profile.role}
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="hero__role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {profile.role}. {profile.intro}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a className="btn btn--solid" href="#projects">See my projects</a>
          <a className="btn btn--ghost" href="#contact">Get in touch</a>
        </motion.div>
      </div>
    </section>
  );
}