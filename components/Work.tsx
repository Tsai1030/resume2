"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Work() {
  const { c } = useLanguage();

  return (
    <section className="sec wrap" id="work">
      <div className="label fade-up">
        <span className="idx">03</span> {c.ui.workLabel}
      </div>
      <h2 className="fade-up">{c.ui.workHeading}</h2>
      <div className="tl">
        {c.jobs.map((job, i) => (
          <div className="item fade-up" key={i}>
            <div className="yr">{job.yr}</div>
            <div>
              <h3>{job.role}</h3>
              <div className="org">{job.org}</div>
              <p>{job.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
