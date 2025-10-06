import React, { useState, useEffect, useRef, useCallback } from 'react';

// FIX: Extend IntersectionObserverInit to include custom `triggerOnce` property.
interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export const useIntersectionObserver = <T extends HTMLElement,>(options: UseIntersectionObserverOptions) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T | null>(null);

  // FIX: Destructure `triggerOnce` to use as a stable dependency and separate it from standard options.
  const { triggerOnce, ...observerOptions } = options;

  const observerCallback = useCallback<IntersectionObserverCallback>((entries, observer) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsIntersecting(true);
      // FIX: If `triggerOnce` is true, unobserve the element after intersection.
      if (triggerOnce) {
        observer.unobserve(entry.target);
      }
    }
  }, [triggerOnce]);

  useEffect(() => {
    // FIX: Pass the standard IntersectionObserver options.
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observerCallback, JSON.stringify(observerOptions)]); // FIX: Use stable dependency for options object to avoid re-renders.

  return { ref, isIntersecting };
};
