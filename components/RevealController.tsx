"use client";

import { useEffect } from "react";

/**
 * Observes every `.fade-up` element on the page, adds the `.in` class when it
 * enters the viewport, and fills any skill bars (`.bar i[data-w]`) inside it.
 */
export default function RevealController() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            e.target
              .querySelectorAll<HTMLElement>(".bar i")
              .forEach((b) => {
                b.style.width = (b.dataset.w ?? "0") + "%";
              });
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
