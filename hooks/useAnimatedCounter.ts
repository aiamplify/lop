import React, { useState, useEffect, useRef } from 'react';

export const useAnimatedCounter = (targetValue: number, duration: number = 2000): number => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = targetValue;
          if (start === end) return;

          let startTime: number | null = null;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * (end - start) + start));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    // This is a conceptual link to the ref, but the ref needs to be on an actual element.
    // The component using this hook must forward the ref. This hook just provides logic.
    // For this implementation, we will assume it starts on mount for simplicity since we can't pass ref from here.

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetValue, duration]);
  
  // A simplified version that starts on mount for this use case.
   useEffect(() => {
      let start = 0;
      const end = targetValue;
      if (start === end) return;

      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
   }, [targetValue, duration]);


  return count;
};
