import { projectDescription, references } from "@/content/journal";
import Link from "next/link";

export default function ProjectDescription({ standalone = false }: { standalone?: boolean }) {
  const wordCount = projectDescription.join(" ").split(/\s+/).length;
  return <article className="project-description">
    <span className="eyebrow">BEHIND THE PROJECT / {wordCount} WORDS</span>
    <h1>How this project<br/>captures wellbeing.</h1>
    <p className="description-label">PROJECT DESCRIPTION</p>
    {projectDescription.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
    {references.length > 0 && <section className="references"><h2>References</h2>{references.map((reference, i) => <p key={i}>{reference}</p>)}</section>}
    <div className="description-links">{standalone ? <Link href="/">← Back to the project</Link> : <Link href="/project-description/">Read the project description ↗</Link>}</div>
  </article>;
}
