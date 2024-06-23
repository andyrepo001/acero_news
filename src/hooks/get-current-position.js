import { useEffect, useState } from "react";

export const usePosition = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setCurrentPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { currentPosition };
};
