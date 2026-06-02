"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Skills() {
  const { c } = useLanguage();

  return (
    <section className="sec wrap" id="skills">
      <div className="label fade-up">
        <span className="idx">04</span> {c.ui.skillsLabel}
      </div>
      <h2 className="fade-up">{c.ui.skillsHeading}</h2>
      <div className="skills-grid">
        {c.skills.map((s, i) => (
          <div className={`skill fade-up${i % 2 === 1 ? " d1" : ""}`} key={i}>
            <div className="top">
              <span className="nm">{s.nm}</span>
              <span className="pc">{s.pc}</span>
            </div>
            <div className="bar">
              <i data-w={s.pc} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "5rem" }}>
        <div className="label fade-up">
          <span className="idx">05</span> {c.ui.certsLabel}
        </div>
        <div className="chips fade-up">
          {c.certs.map((cert) => (
            <span className="chip" key={cert}>
              {cert}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "5rem" }}>
        <div className="label fade-up">
          <span className="idx">06</span> {c.ui.langLabel}
        </div>
        <div className="lang-row fade-up">
          {c.languages.map((l) => (
            <div className="lang-item" key={l.name}>
              <h4>{l.name}</h4>
              <p>{l.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
