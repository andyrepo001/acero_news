import { useEffect, useState } from "react";

export const useIntersection = (item) => {
  const [intersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (item.current) observer.observe(item.current);
  }, [item]);

  return { intersecting };
};
