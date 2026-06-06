import { useEffect, useRef, useState } from "react";

const skillsData = [
  { name: "HTML",         percent: 95, color: "#f97316" },
  { name: "CSS",          percent: 95, color: "#38bdf8" },
  { name: "React",        percent: 98, color: "#22d3ee" },
  { name: "Tailwind CSS", percent: 95, color: "#2dd4bf" },
  { name: "Node.js",      percent: 80, color: "#4ade80" },
  { name: "Python",       percent: 75, color: "#facc15" },
  { name: "SQL",          percent: 70, color: "#a78bfa" },
  { name: "JavaScript",   percent: 88, color: "#fbbf24" },
];

interface SkillBarProps {
  name: string;
  percent: number;
  color: string;
  animate: boolean;
  index: number;
}

const SkillBar = ({ name, percent, color, animate, index }: SkillBarProps) => {
  const [displayCount, setDisplayCount] = useState(0);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    if (!animate) return;
    const delay = index * 100;
    const countTimer = setTimeout(() => {
      const duration = 1500;
      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setDisplayCount(Math.floor(eased * percent));
        setBarWidth(eased * percent);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(countTimer);
  }, [animate, percent, index]);

  return (
    <div
      className="p-4 rounded-lg shadow-md bg-white dark:bg-[#0f172a]"
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0px)" : "translateY(30px)",
        transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms`,
        borderLeft: `3px solid ${color}`,
        // light: subtle tinted border, dark: glowing border
      }}
    >
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-gray-800 dark:text-white">{name}</span>
        <span className="tabular-nums font-bold" style={{ color }}>
          {displayCount}%
        </span>
      </div>
      {/* Track */}
      <div className="w-full rounded-full h-2.5 overflow-hidden bg-gray-200 dark:bg-[#1e293b]">
        <div
          className="h-2.5 rounded-full"
          style={{
            width: `${barWidth}%`,
            backgroundColor: color,
            transition: "none",
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimate(true), 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 md:px-10 lg:px-20 h-180 bg-gray-100 dark:bg-gray-900"
    >
      <div className="text-center mb-10">
        <span
        className="text-2xl sm:text-3xl font-bold text-center mb-10 text-purple-500 hover:cursor-pointer hover:underline"
        style={{
          opacity: animate ? 1 : 0,
          transform: animate ? "translateY(0px)" : "translateY(-20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        Skills
      </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {skillsData.map((skill, index) => (
          <SkillBar
            key={skill.name}
            {...skill}
            animate={animate}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;