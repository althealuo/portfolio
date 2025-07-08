// src/components/TextBlock.jsx
import "../styles/gallery.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function TextBlock({ label, title, children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="section-block text-block"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {label && <p className="section-label">{label}</p>}
      {title && <h2>{title}</h2>}
      {children}
    </motion.div>
  );
}

export default TextBlock;
