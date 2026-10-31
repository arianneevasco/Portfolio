import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Carousel from "./Carousel";
import { certificates } from "../data/content";

const isPdf = (file) => file?.toLowerCase().endsWith(".pdf");

export default function Certificates() {
  const [zoom, setZoom] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setZoom(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="certs">
      <h3 className="certs__title">Certificates</h3>
      <p className="certs__sub">Proof of what I've learned and done.</p>

      <Carousel label="Certificates">
        {certificates.map((c) => (
          <figure key={c.title} className="cert">
            <button
              className="cert__open"
              onClick={() => c.image && setZoom(c)}
              aria-label={`View ${c.title}`}
            >
              {c.image ? (
                isPdf(c.image) ? (
                  <iframe src={c.image} title={c.title} className="cert__img cert__pdf" />
                ) : (
                  <img src={c.image} alt={c.title} className="cert__img" loading="lazy" />
                )
              ) : (
                <div className="cert__img placeholder" role="img" aria-label={c.title} />
              )}
            </button>
            <figcaption>
              <strong>{c.title}</strong>
              <span>{c.issuer} · {c.year}</span>
            </figcaption>
          </figure>
        ))}
      </Carousel>

      <AnimatePresence>
        {zoom && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoom(null)}
          >
            <button className="lightbox__close" aria-label="Close" onClick={() => setZoom(null)}>
              <X size={22} />
            </button>
            {isPdf(zoom.image) ? (
              <iframe src={zoom.image} title={zoom.title} className="lightbox__pdf" onClick={(e) => e.stopPropagation()} />
            ) : (
              <img src={zoom.image} alt={zoom.title} onClick={(e) => e.stopPropagation()} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
