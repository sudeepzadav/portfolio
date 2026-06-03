  // hooks/useSectionObserver.js
  import { useEffect } from "react";

  const useSectionObserver = () => {
    useEffect(() => {
      const sections = document.querySelectorAll("section[id]");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove(
                "opacity-0",
                "translate-y-10"
              );

              entry.target.classList.add(
                "opacity-100",
                "translate-y-0"
              );

              observer.unobserve(entry.target); // animate only once
            }
          });
        },
        {
          threshold: 0.2,
        }
      );

      sections.forEach((section) => {
        section.classList.add(
          "opacity-0",
          "translate-y-10",
          "transition-all",
          "duration-900",
          "ease-out"
        );

        observer.observe(section);
      });

      return () => observer.disconnect();
    }, []);
  };

  export default useSectionObserver;