"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function TopBar() {
  const { c, toggle } = useLanguage();

  return (
    <div className="topbar">
      <a href="#top" className="logo">
        {c.profile.fullName}
      </a>
      <div className="topbar-right">
        <nav>
          {c.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <button className="lang-toggle" onClick={toggle} aria-label="Switch language">
          {c.ui.toggleTo}
        </button>
      </div>
    </div>
  );
}
