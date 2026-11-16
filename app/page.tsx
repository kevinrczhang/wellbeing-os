import Link from "next/link";
import Navigation from "@/components/Navigation";
import Reflection from "@/components/Reflection";
import Monitor from "@/components/Monitor";
import { journal, wellbeingSignals, widerConnections, contextReflection, changedUnderstanding } from "@/content/journal";

function ChapterHeading({ id, number, question, title, intro }: { id: string; number: string; question: string; title: string; intro: string }) {
  return <header className="chapter-heading"><div className="chapter-label"><span>{number}</span><span>{question}</span></div><div><h2 id={id}>{title}</h2><p>{intro}</p></div></header>;
}

export default function Home() {
  return <div id="top" className="wellbeing-site">
    <a className="skip-link" href="#main-content">Skip to the project</a><Navigation/>
    <main id="main-content">
      <section className="opening page-width" aria-labelledby="project-title">
        <div className="opening-heading"><span className="eyebrow">A CREATIVE EXPLORATION OF WELLBEING / VOL. 01</span><h1 id="project-title">A little less output.<br/><span>A little more life.</span></h1></div>
        <div className="opening-note"><span className="eyebrow">THE IDEA BEHIND WELLBEING OS</span><p>A system can be productive<br/>without being healthy.</p><p className="opening-explanation">I often approach life like a computer system: improving performance, completing tasks, and optimising my time. This project explores what helps me enjoy the life I’m working to build.</p><a className="inline-link" href="#what-helps">Start exploring <span aria-hidden="true">↓</span></a></div>
      </section>

      <section id="what-helps" className="chapter page-width" aria-labelledby="helps-title">
        <ChapterHeading id="helps-title" number="01" question="WHAT HELPS ME FEEL WELL?" title="The things that make room for life." intro="Four connected parts of wellbeing. Each matters on its own; each also changes how the others feel."/>
        <div className="journal-grid">{journal.map(entry => <article className={`journal-entry entry-${entry.id}`} key={entry.id} id={entry.id}>
          <div className="journal-category"><span>{entry.name}</span><span>{entry.number}</span></div><h3>{entry.title}</h3><div className="entry-prose">{entry.personalReflection.split(/\n\s*\n/).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
        </article>)}</div>
        <p className="section-connection"><span aria-hidden="true">↳</span>Connection needs time. Purpose needs energy. Recovery needs space. Environment shapes what is available.</p>
      </section>

      <section id="my-signals" className="chapter signals-chapter" aria-labelledby="signals-title"><div className="page-width">
        <ChapterHeading id="signals-title" number="02" question="HOW DO I KNOW I AM WELL?" title="Look beyond the completed tasks." intro="I used to interpret finishing tasks as evidence that I was doing well. Now I pay attention to whether I feel fulfilled, rested, and connected to others."/>
        <div className="signals-grid"><section className="signal-column"><span className="eyebrow">SIGNS OF HAVING ROOM</span><h3>When I’m doing well</h3><ul>{wellbeingSignals.well.map(signal => <li key={signal}><span aria-hidden="true">+</span>{signal}</li>)}</ul></section><section className="signal-column signal-pressure"><span className="eyebrow">SIGNS TO PAY ATTENTION TO</span><h3>When I need to pause</h3><ul>{wellbeingSignals.struggling.map(signal => <li key={signal}><span aria-hidden="true">—</span>{signal}</li>)}</ul></section></div>
        <Reflection text={wellbeingSignals.personalReflection} label="When productivity hid a problem"/>
        <div className="understanding-reflection"><h3>What has changed in my understanding?</h3><Reflection text={changedUnderstanding.personalReflection} label="What I have learned"/></div>
      </div></section>

      <section id="beyond-me" className="chapter page-width" aria-labelledby="beyond-title">
        <ChapterHeading id="beyond-title" number="03" question="HOW IS MY WELLBEING CONNECTED?" title="A life is part of something larger." intro="My relationships, the academic environment around me, and access to Vancouver’s natural spaces all influence how I feel."/>
        <div className="wider-connections">{widerConnections.map((connection, index) => <article key={connection.name}><span className="connection-index">0{index + 1} / {connection.name}</span><h3>{connection.title}</h3><p>{connection.text}</p></article>)}</div>
        <div className="context-intro"><span className="eyebrow">WHAT BROADER CONTEXTS INFLUENCE WELLBEING?</span><h3>Choice happens within circumstances.</h3></div>
        <Reflection text={contextReflection.personalReflection} label="My circumstances and my response"/>
      </section>

      <section id="find-balance" className="chapter balance-chapter" aria-labelledby="balance-title"><div className="page-width">
        <ChapterHeading id="balance-title" number="04" question="HOW DO THESE PARTS INTERACT?" title="Try changing just one thing." intro="Increase the workload below. Productivity rises at first. Then notice what happens to connection, recovery, and the room available for wellbeing."/>
        <Monitor/><div className="experiment-takeaway"><span className="eyebrow">WHAT THE INTERACTION ASKS US TO NOTICE</span><p>High output can hide a shrinking life. The important part is recognising what a pace makes possible, what it crowds out, and when the arrangement needs to change.</p></div>
      </div></section>

      <section className="closing page-width" aria-labelledby="closing-title"><div className="closing-mark"><span className="eyebrow">SYSTEM SUMMARY</span></div><h2 id="closing-title">“Wellbeing isn't about running at maximum performance. It's about taking care of the things that make life worth experiencing.”</h2><div className="closing-bottom"><p>People. Purpose. Recovery. Place.<br/>A life needs room for all of them.</p><Link className="primary-link" href="/project-description/">Read the project description <span aria-hidden="true">↗</span></Link></div></section>
    </main>
    <footer className="site-footer page-width"><span>WELLBEING OS / A PERSONAL EXPLORATION</span><a href="#top">Back to the beginning ↑</a></footer>
  </div>;
}
