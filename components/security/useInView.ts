"use client";

import { useEffect, useRef, useState } from "react";

/** Fires once when the element enters the viewport. Content is rendered and
 *  readable before this ever runs; it only ever adds finish. */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  // Near-full viewport. A tight band can be jumped clean over by a fast scroll
  // (or a scripted one), and the element then never reveals at all.
  rootMargin = "0px 0px -5% 0px",
) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 },
    );
    io.observe(el);

    // Safety net: these reveals are finish, never the only way content exists.
    // Nothing may stay hidden because an observer failed to fire.
    const failsafe = window.setTimeout(() => {
      setSeen(true);
      io.disconnect();
    }, 4000);

    return () => {
      window.clearTimeout(failsafe);
      io.disconnect();
    };
  }, [seen, rootMargin]);

  return { ref, seen };
}
