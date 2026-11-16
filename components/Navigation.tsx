"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const chapters = [
  { id: "what-helps", label: "What helps", number: "01" },
  { id: "my-signals", label: "My signals", number: "02" },
  { id: "beyond-me", label: "Beyond me", number: "03" },
  { id: "find-balance", label: "Find balance", number: "04" },
];

export default function Navigation() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-12% 0px -60% 0px", threshold: 0 });
    chapters.forEach(chapter => { const section = document.getElementById(chapter.id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  return <header className="site-header"><div className="header-inner">
    <a className="site-brand" href="#top" aria-label="Wellbeing OS, back to the beginning"><span>Wellbeing OS<span className="brand-subtitle">A personal exploration</span></span></a>
    <nav className="chapter-navigation" aria-label="Project chapters">{chapters.map(chapter => <a key={chapter.id} href={`#${chapter.id}`} aria-current={active === chapter.id ? "location" : undefined} onClick={() => setActive(chapter.id)}><span>{chapter.number}</span>{chapter.label}</a>)}</nav>
    <Link className="description-navigation" href="/project-description/">Project description <span aria-hidden="true">↗</span></Link>
  </div></header>;
}
