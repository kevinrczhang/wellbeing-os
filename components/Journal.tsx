"use client";

import { useState } from "react";
import type { AppId, JournalId } from "@/content/journal";
import { journal, timeline } from "@/content/journal";
import { Icon } from "./Icon";

export default function Journal({ id, openApp }: { id: JournalId; openApp: (id: AppId) => void }) {
  const entry = journal[id];
  const [rest, setRest] = useState(35);
  const [photoExpanded, setPhotoExpanded] = useState(false);
  return <article className={`journal-content journal-${id}`}>
    {id === "environment" ? <>
      <button className={`photo-button environment-photo ${photoExpanded ? "expanded-photo" : ""}`} onClick={() => setPhotoExpanded(!photoExpanded)} aria-label={photoExpanded ? "Show journal text" : "Expand photograph"} aria-expanded={photoExpanded}>
        {/* Plain images preserve the editable local-asset workflow for static hosting. */}
        <img src={entry.image} alt={entry.alt}/><span className="photo-index">FIELD NOTES / 004</span><span className="photo-expand">{photoExpanded ? "−" : "+"}</span>
      </button>
      <div className="photo-caption"><span>SAMPLE PHOTOGRAPH</span><span>SPACE TO LOOK UP ↗</span></div>
      <div className="environment-intro"><span className="eyebrow">{entry.eyebrow}</span><h2>{entry.title}</h2><p>{entry.intro}</p></div>
    </> : <>
      <header className="journal-heading"><span className="eyebrow">{entry.eyebrow}</span><h2>{entry.title}</h2><p>{entry.intro}</p></header>
      <figure className="journal-photo"><img src={entry.image} alt={entry.alt}/><figcaption>{entry.caption}</figcaption></figure>
    </>}
    {id === "purpose" && <div className="timeline"><span className="eyebrow">A PERSONAL TIMELINE / ADD YOUR MOMENTS</span>{timeline.map((moment, index) => <div className="timeline-moment" key={moment.label}><span className="timeline-index">0{index + 1}</span><div><span className="eyebrow">{moment.label}</span><h3>{moment.title}</h3><p>{moment.prompt}</p></div></div>)}</div>}
    {id === "recovery" && <section className="rest-experiment"><div className="rest-heading"><div><span className="eyebrow">A SMALL REST EXPERIMENT</span><h3>A little space goes a long way.</h3></div><span className="rest-percent">{rest}%</span></div><div className="battery" role="meter" aria-label="Illustrative energy level" aria-valuemin={0} aria-valuemax={100} aria-valuenow={rest}>{Array.from({length: 10}, (_, i) => <span key={i} className={i < Math.round(rest / 10) ? "charged" : ""}/>)}</div><div className="rest-actions"><button onClick={() => setRest(Math.min(100, rest + 15))} disabled={rest === 100}>{rest === 100 ? "Room to begin again" : "Make time for a pause"}<span> +15</span></button><button className="text-button" onClick={() => setRest(35)}>Start again ↺</button></div><p>Illustrative energy, not a measurement. In real life, rest looks different for everyone.</p><p className="rest-feedback" aria-live="polite">{rest < 50 ? "Some things need your attention. So do you." : rest < 80 ? "A little less urgency. A little more room." : "A full battery is permission to live, not a request to do more."}</p></section>}
    <section className="reflection"><span className="eyebrow">YOUR REFLECTION / REPLACE THIS PROMPT</span><p>{entry.reflection}</p><blockquote>{entry.question}</blockquote></section>
    <div className="journal-note"><Icon name={id} size={27}/><p>{entry.note}</p></div>
    <footer className="journal-footer"><button className="text-button" onClick={() => openApp("monitor")}>See the bigger picture <span>↗</span></button><button className="text-button" onClick={() => openApp("summary")}>System summary <span>↗</span></button></footer>
  </article>;
}
