"use client";

import { useEffect, useRef } from "react";

export default function Progress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (ref.current && h > 0) {
        ref.current.style.width = (window.scrollY / h) * 100 + "%";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="progress" ref={ref} />;
}
