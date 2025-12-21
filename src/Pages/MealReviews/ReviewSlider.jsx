import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ReviewSlider({ reviews = [] }) {
  const [active, setActive] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  if (reviews.length === 0) {
    return <p className="text-center py-10">No reviews yet</p>;
  }

  const prev = () => {
    setActive((p) => (p === 0 ? reviews.length - 1 : p - 1));
  };

  const next = () => {
    setActive((p) => (p === reviews.length - 1 ? 0 : p + 1));
  };

  /* ---------- DRAG HANDLERS ---------- */
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;

    const diff = e.clientX - startX.current;

    if (diff > 80) prev();     
    if (diff < -80) next();  

    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const r = reviews[active];

  return (
    <section className=" py-20 select-none">
      <div className="max-w-xl mx-auto relative">

        {/* LEFT */}
        <button
          onClick={prev}
          className="absolute -left-14 top-1/2 -translate-y-1/2 bg-white shadow w-10 h-10 rounded-full flex items-center justify-center z-10"
        >
          <ChevronLeft />
        </button>

        {/* CARD */}
        <div
          key={r._id}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="bg-white rounded-2xl p-8 shadow-lg cursor-grab active:cursor-grabbing transition-all duration-500"
        >
          <div className="text-4xl text-gray-300 mb-4">“</div>

          <p className="text-gray-600 mb-6">{r.comment}</p>

          <div className="border-t border-dashed mb-6"></div>

          <div className="flex items-center gap-3">
            <img
              src={r.reviewerImage || "https://i.ibb.co/2nZ7JYf/user.png"}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{r.reviewerName}</p>
              <p className="text-sm text-gray-500">⭐ {r.rating}</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <button
          onClick={next}
          className="absolute -right-14 top-1/2 -translate-y-1/2 bg-lime-400 shadow w-10 h-10 rounded-full flex items-center justify-center z-10"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-3 h-3 rounded-full ${
              active === i ? "bg-lime-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
