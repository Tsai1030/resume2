"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Gallery() {
  const { c } = useLanguage();
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!pin || !track) return;

    const horiz = () => {
      const rect = pin.getBoundingClientRect();
      const total = pin.offsetHeight - window.innerHeight;
      const prog = Math.min(Math.max(-rect.top / total, 0), 1);
      const max = track.scrollWidth - window.innerWidth + 40;
      track.style.transform = `translateX(${-prog * max}px)`;
    };

    window.addEventListener("scroll", horiz, { passive: true });
    window.addEventListener("resize", horiz);
    horiz();
    return () => {
      window.removeEventListener("scroll", horiz);
      window.removeEventListener("resize", horiz);
    };
  }, []);

  return (
    <section id="gallery">
      <div className="gal-pin" ref={pinRef}>
        <div className="gal-sticky">
          <div className="gal-head wrap" style={{ paddingLeft: "2.6rem" }}>
            <div className="label">
              <span className="idx">02</span> {c.ui.galleryLabel}
            </div>
            <h2 style={{ margin: 0, fontSize: "clamp(2rem,5vw,3.5rem)" }}>
              {c.ui.galleryHeading}
            </h2>
          </div>
          <div className="gal-track" ref={trackRef}>
            {c.gallery.map((item, i) => (
              <div className="frame" key={i}>
                <div className={`ph ${item.kind === "photo" ? "img" : "c1"}`}>
                  {item.kind === "photo" && item.src && (
                    <Image
                      src={item.src}
                      alt={`${item.title}・${item.subtitle}`}
                      fill
                      sizes="(max-width: 720px) 80vw, 420px"
                      className="ph-photo"
                    />
                  )}
                  <span className="badge">{item.badge}</span>
                  <span className="ttl">
                    {item.title}
                    <br />
                    {item.subtitle}
                  </span>
                </div>
                <div className="cap">{item.cap}</div>
              </div>
            ))}
          </div>
          <div className="gal-note">
            {c.ui.galleryNote} <span className="ph-tag">{c.ui.galleryNoteTag}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
