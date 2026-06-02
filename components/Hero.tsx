"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { c, lang } = useLanguage();
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translate(-50%,-50%) translateX(${
          -window.scrollY * 0.25
        }px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="hero wrap" id="top">
      <div className="bg-word" ref={bgRef}>
        ADMIN
      </div>
      <div className="hero-row">
        <div className="inner">
          <span className="tag">{c.profile.tag}</span>
          <h1 className={lang === "en" ? "en" : ""}>
            {c.profile.namePre}
            <span className="o">{c.profile.nameAccent}</span>
            {c.profile.namePost}
          </h1>
          <p className="role">{c.profile.role}</p>
        </div>
        <div className="hero-card" aria-label={c.ui.heroCardLabel}>
          <div className="hc-frame">
            <span className="hc-badge">PHOTO</span>
            <div className="hc-label">
              {c.ui.heroCardLabel}
              <span>{c.ui.heroCardSub}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="stats wrap" style={{ padding: 0 }}>
        {c.stats.map((s) => (
          <div key={s.l}>
            <div className="n">{s.n}</div>
            <div className="l">{s.l}</div>
          </div>
        ))}
      </div>
    </header>
  );
}
