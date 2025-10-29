import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ContentSwitcher({ items = [] }) {
  const [index, setIndex] = useState(0);

  if (items.length === 0) return null;

  const nextItem = () => setIndex((prev) => (prev + 1) % items.length);
  const prevItem = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="content-switcher">
      <div className="content-container">
        {items[index]}
      </div>

      <div className="switcher-controls">
        <button onClick={prevItem} aria-label="Previous">
          <ChevronLeft size={20} />
        </button>
        <span className="switcher-indicator">
          {index + 1} / {items.length}
        </span>
        <button onClick={nextItem} aria-label="Next">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default ContentSwitcher;
