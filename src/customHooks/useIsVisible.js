import { useEffect, useRef, useState } from "react";

export const useIsVisible = (options) => {
  const optionsRef = useRef(options);
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(() => true);
        } else {
          setIsVisible(() => false);
        }
      });
    }, optionsRef.current);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
      observer.disconnect(); // Clean up the IntersectionObserver
    };
  }, []);

  return { isVisible, targetRef };
};
