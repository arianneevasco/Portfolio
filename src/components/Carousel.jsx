import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ children, label = "Carousel" }) {
  const track = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  // Work out whether we're at the start or end of the scroll
  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scroll = (dir) => {
    const el = track.current;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="carousel" role="region" aria-label={label}>
      <div className="carousel__track" ref={track} onScroll={update}>
        {children}
      </div>
      <div className="carousel__nav">
        <button onClick={() => scroll(-1)} disabled={edge.start} aria-label="Previous">
          <ChevronLeft size={18} />
        </button>
        <button onClick={() => scroll(1)} disabled={edge.end} aria-label="Next">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}