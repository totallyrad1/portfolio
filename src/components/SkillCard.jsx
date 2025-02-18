import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SkillCard({ title, description }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="hover"
    >
      <div className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 duration-500 transition-opacity">
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
          }}
        />
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`,
          }}
        />
      </div>
      <div className="relative space-y-3 rounded-lg border border-white/10 bg-white p-6 duration-300 group-hover:border-black/25">
        <h3 className="text-lg font-medium text-black">{title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
