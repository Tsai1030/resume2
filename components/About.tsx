"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { c, lang } = useLanguage();

  return (
    <section className="sec wrap" id="about">
      <div className="label fade-up">
        <span className="idx">01</span> {c.ui.aboutLabel}
      </div>
      <div className="about">
        <p className="big fade-up">
          {lang === "zh" ? (
            <>
              十餘年橫跨<b>行政、門市、餐飲與會展</b>的歷練，讓我習慣在多工之間保持
              <b>條理</b>。我相信好的行政，是讓組織「順起來」的隱形引擎。
            </>
          ) : (
            <>
              Over a decade across <b>administration, retail, F&amp;B and MICE</b> taught me
              to stay <b>organized</b> while juggling many tasks. Good administration is the
              invisible engine that keeps an organization running smoothly.
            </>
          )}
        </p>
        <div className="meta-list fade-up d1">
          {c.aboutMeta.map((m) => (
            <div className="mrow" key={m.k}>
              <span className="k">{m.k}</span>
              <span className="v">{m.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
