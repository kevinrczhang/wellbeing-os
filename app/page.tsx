import Link from "next/link";
import Navigation from "@/components/Navigation";
import Reflection from "@/components/Reflection";
import Monitor from "@/components/Monitor";
import { journal, wellbeingSignals, contextReflection, changedUnderstanding, projectDescription } from "@/content/journal";

function ChapterHeading({ id, number, question, title, intro }: { id: string; number: string; question: string; title: string; intro?: string }) {
  return <header className="chapter-heading"><div className="chapter-label"><span>{number}</span><span>{question}</span></div><div><h2 id={id}>{title}</h2>{intro && <p>{intro}</p>}</div></header>;
}

export default function Home() {
  return <div id="top" className="wellbeing-site">
    <a className="skip-link" href="#main-content">Skip to the project</a><Navigation/>
    <main id="main-content">
      <section className="opening page-width" aria-labelledby="project-title">
        <div className="opening-heading"><h1 id="project-title">Wellbeing OS</h1></div>
        <div className="opening-note"><p className="opening-explanation">{projectDescription[0]}</p><a className="inline-link" href="#what-helps">Start exploring <span aria-hidden="true">↓</span></a></div>
      </section>

      <section id="what-helps" className="chapter page-width" aria-labelledby="helps-title">
        <ChapterHeading id="helps-title" number="01" question="WELLBEING" title="Connection, purpose, recovery, and environment"/>
        <div className="journal-grid">{journal.map(entry => <article className={`journal-entry entry-${entry.id}`} key={entry.id} id={entry.id}>
          <div className="journal-category"><span>{entry.name}</span><span>{entry.number}</span></div><h3>{entry.title}</h3><div className="entry-prose">{entry.personalReflection.split(/\n\s*\n/).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
        </article>)}</div>
      </section>

      <section id="my-signals" className="chapter signals-chapter" aria-labelledby="signals-title"><div className="page-width">
        <ChapterHeading id="signals-title" number="02" question="MY SIGNALS" title="How I know I’m doing well"/>
        <div className="signals-grid"><section className="signal-column"><span className="eyebrow">DOING WELL</span><h3>When I’m doing well</h3><ul>{wellbeingSignals.well.map(signal => <li key={signal}><span aria-hidden="true">+</span>{signal}</li>)}</ul></section><section className="signal-column signal-pressure"><span className="eyebrow">STRUGGLING</span><h3>When I’m struggling</h3><ul>{wellbeingSignals.struggling.map(signal => <li key={signal}><span aria-hidden="true">—</span>{signal}</li>)}</ul></section></div>
        <Reflection text={wellbeingSignals.personalReflection} label="When productivity hid a problem"/>
        <div className="understanding-reflection"><h3>What has changed in my understanding?</h3><Reflection text={changedUnderstanding.personalReflection} label="What I have learned"/></div>
      </div></section>

      <section id="beyond-me" className="chapter page-width" aria-labelledby="beyond-title">
        <ChapterHeading id="beyond-title" number="03" question="BROADER INFLUENCES" title="My circumstances and my response"/>
        <Reflection text={contextReflection.personalReflection} label="My circumstances and my response"/>
      </section>

      <section id="find-balance" className="chapter balance-chapter" aria-labelledby="balance-title"><div className="page-width">
        <ChapterHeading id="balance-title" number="04" question="SYSTEM MONITOR" title="Workload and wellbeing"/>
        <Monitor/>
      </div></section>

      <section className="closing page-width" aria-labelledby="closing-title"><div className="closing-mark"><span className="eyebrow">SYSTEM SUMMARY</span></div><h2 id="closing-title">{projectDescription[projectDescription.length - 1]}</h2><div className="closing-bottom"><Link className="primary-link" href="/project-description/">Read the project description <span aria-hidden="true">↗</span></Link></div></section>
    </main>
    <footer className="site-footer page-width"><span>WELLBEING OS / NURS 180</span><a href="#top">Back to the beginning ↑</a></footer>
  </div>;
}
