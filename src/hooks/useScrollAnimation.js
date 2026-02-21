import { useEffect, useRef, useState } from "react";

/**
 * useScrollAnimation
 * Returns a [ref, inView] pair.
 * Attach `ref` to a DOM element; `inView` becomes true once
 * the element scrolls into the viewport (and stays true).
 *
 * @param {number} threshold - 0-1 fraction of element visible before triggering
 */
const useScrollAnimation = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el); // fire once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
};

export default useScrollAnimation;
