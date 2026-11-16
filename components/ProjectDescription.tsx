import { projectDescription, references } from "@/content/journal";
import Link from "next/link";

export default function ProjectDescription({ standalone = false }: { standalone?: boolean }) {
  const wordCount = projectDescription.join(" ").split(/\s+/).length;
  return <article className="project-description">
    <span className="eyebrow">BEHIND THE PROJECT / {wordCount} WORDS</span>
    <h1>How this project<br/>captures wellbeing.</h1>
    <p className="description-label">PROJECT DESCRIPTION</p>
    <aside className="draft-label">EDITABLE DRAFT — Personal reflection prompts and sample images are waiting for your experiences.</aside>
    {projectDescription.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
    <section className="references"><h2>References</h2><span className="eyebrow">APA 7 / IF NEEDED</span>{references.length ? references.map((reference, i) => <p key={i}>{reference}</p>) : <p>Add references actually used in your final work. This space is intentionally left for your sources.</p>}</section>
    <details className="credits"><summary>Image & type credits</summary><p>Sample photographs from <a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a>. They illustrate the layout and do not document the author's life. Replace them with personal photographs before submitting.</p><ul><li><a href="https://images.unsplash.com/photo-1470770841072-f978cf4d019e" target="_blank" rel="noreferrer">Environment photograph</a></li><li><a href="https://images.unsplash.com/photo-1511632765486-a01980e01a18" target="_blank" rel="noreferrer">Connections photograph</a></li><li><a href="https://images.unsplash.com/photo-1455390582262-044cdead277a" target="_blank" rel="noreferrer">Purpose photograph</a></li><li><a href="https://images.unsplash.com/photo-1441974231531-c6227db76b6e" target="_blank" rel="noreferrer">Recovery photograph</a></li></ul><p>DM Sans and IBM Plex Mono, distributed under the SIL Open Font License. Fonts and photographs are served locally.</p></details>
    <div className="description-links">{standalone ? <Link href="/">← Back to the project</Link> : <Link href="/project-description/">Read the project description ↗</Link>}</div>
  </article>;
}
