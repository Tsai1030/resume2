"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Contact() {
  const { c } = useLanguage();

  return (
    <section className="cta wrap" id="contact">
      <div className="label fade-up" style={{ justifyContent: "center" }}>
        <span className="idx">07</span> {c.ui.contactLabel}
      </div>
      <h2 className="fade-up">
        {c.ui.contactTop}
        <br />
        {c.ui.contactBottom}
      </h2>
      <a className="mail fade-up d1" href={`mailto:${c.profile.email}`}>
        {c.profile.email}
      </a>
      <div className="row fade-up d2">
        <span>{c.profile.phone}</span>
        <span>{c.profile.location}</span>
        <span>
          {c.ui.contactHours} {c.profile.contactTime}
        </span>
      </div>
    </section>
  );
}
